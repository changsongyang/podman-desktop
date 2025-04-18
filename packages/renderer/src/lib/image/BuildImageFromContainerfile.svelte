<script lang="ts">
/* eslint-disable import/no-duplicates */
// https://github.com/import-js/eslint-plugin-import/issues/1479
import { faCube, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import type { OpenDialogOptions } from '@podman-desktop/api';
import { Button, Input } from '@podman-desktop/ui-svelte';
import type { Terminal } from '@xterm/xterm';
import { onDestroy, onMount } from 'svelte';
import { get } from 'svelte/store';

import ContainerConnectionDropdown from '/@/lib/forms/ContainerConnectionDropdown.svelte';
import FileInput from '/@/lib/ui/FileInput.svelte';
import { handleNavigation } from '/@/navigation';
import { type BuildImageInfo, buildImagesInfo } from '/@/stores/build-images';
import { NavigationPage } from '/@api/navigation-page';
/* eslint-enable import/no-duplicates */
import type { ProviderContainerConnectionInfo, ProviderInfo } from '/@api/provider-info';

import { providerInfos } from '../../stores/providers';
import EngineFormPage from '../ui/EngineFormPage.svelte';
import TerminalWindow from '../ui/TerminalWindow.svelte';
import {
  type BuildImageCallback,
  clearBuildTask,
  disconnectUI,
  eventCollect,
  reconnectUI,
  startBuild,
} from './build-image-task';
import BuildImageFromContainerfileCards from './BuildImageFromContainerfileCards.svelte';
import RecommendedRegistry from './RecommendedRegistry.svelte';

let buildFinished = false;
let containerImageName: string | undefined;
let containerFilePath: string;
let containerBuildContextDirectory: string;
let containerBuildPlatform: string;

let buildImageInfo: BuildImageInfo | undefined = undefined;
let cancellableTokenId: number | undefined = undefined;
let providers: ProviderInfo[] = [];
let providerConnections: ProviderContainerConnectionInfo[] = [];
let selectedProvider: ProviderContainerConnectionInfo | undefined = undefined;
let logsTerminal: Terminal;
let buildIDs = [];

const containerFileDialogOptions: OpenDialogOptions = {
  title: 'Select Containerfile to build',
};
const contextDialogOptions: OpenDialogOptions = { title: 'Select Root Context', selectors: ['openDirectory'] };

$: platforms = containerBuildPlatform ? containerBuildPlatform.split(',') : [];
$: hasInvalidFields =
  !containerFilePath ||
  !containerBuildContextDirectory ||
  (platforms.length > 1 && !containerImageName) ||
  platforms.length === 0;
$: if (containerFilePath && !containerBuildContextDirectory) {
  // select the parent directory of the file as default
  // eslint-disable-next-line no-useless-escape
  containerBuildContextDirectory = containerFilePath.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
}

let buildParentImageName: string | undefined = undefined;
let buildError: string | undefined = undefined;

interface BuildOutputItem {
  stream?: string;
  aux?: {
    ID: string;
  };
}

type BuildOutput = BuildOutputItem[];

let buildArgs: { key: string; value: string }[] = [{ key: '', value: '' }];
let formattedBuildArgs: Record<string, string> = {};

function addBuildArg(): void {
  buildArgs = [...buildArgs, { key: '', value: '' }];
}

function deleteBuildArg(index: number): void {
  // Only one item in the list, clear the content
  if (buildArgs.length === 1) {
    buildArgs[index].key = '';
    buildArgs[index].value = '';
  } else {
    // Remove the item from the array
    buildArgs = buildArgs.filter((_, i) => i !== index);
  }
}

function getTerminalCallback(): BuildImageCallback {
  const imageRegexp = RegExp(/docker:\/\/(?<imageName>.*?):\s/);
  return {
    onStream: function (data: string): void {
      logsTerminal.write(`${data}\r`);
    },
    onError: function (error: string): void {
      buildError = error;

      // need to extract image from there
      // it should match the pattern 'initializing source docker://registry.redhat.io/rhel9/postgresql-13:latest' and keep the value 'registry.redhat.io/rhel9/postgresql-13:latest'
      const imageRegexpRes = imageRegexp.exec(buildError);
      // if we found the image name, we should store it
      const findingImageName = imageRegexpRes?.groups?.imageName;
      if (findingImageName) {
        buildParentImageName = findingImageName;
      }
      logsTerminal.write(`Error:${error}\r`);
    },
    onEnd: function (): void {
      window.dispatchEvent(new CustomEvent('image-build', { detail: { name: containerImageName } }));
    },
  };
}

async function buildContainerImage(): Promise<void> {
  buildParentImageName = undefined;
  buildError = undefined;

  // Create the formatted build arguments that will be used when passing to buildImage
  formattedBuildArgs = buildArgs.reduce<Record<string, string>>((acc, { key, value }) => {
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});

  // Pick if we are building a singular platform (which will just create the image)
  // or multiple platforms (which will create the image and then create a manifest)
  if (platforms.length === 1) {
    await buildSinglePlatformImage(); // Single platform build
  } else if (platforms.length > 1) {
    await buildMultiplePlatformImagesAndCreateManifest(); // Multiple platforms build
  } else {
    console.error('No platforms specified for the build.');
  }
}

// Function to handle the building of a container image for a single platform
async function buildSinglePlatformImage(): Promise<void> {
  buildFinished = false;

  if (containerFilePath && selectedProvider) {
    // Extract the relative path from the containerFilePath and containerBuildContextDirectory
    const relativeContainerfilePath = await window.pathRelative(containerBuildContextDirectory, containerFilePath);
    buildImageInfo = startBuild(getTerminalCallback());

    // Store the key
    buildImagesInfo.set(buildImageInfo);

    try {
      cancellableTokenId = await window.getCancellableTokenSource();

      // Build the singular image
      await window.buildImage(
        containerBuildContextDirectory,
        relativeContainerfilePath,
        containerImageName,
        containerBuildPlatform,
        selectedProvider,
        buildImageInfo.buildImageKey,
        eventCollect,
        cancellableTokenId,
        formattedBuildArgs,
      );
    } catch (error) {
      logsTerminal.write(`Error:${error}\r`);
    } finally {
      cancellableTokenId = undefined;
      buildImageInfo.buildRunning = false;
      buildFinished = true;
    }
  }
}

// Function to handle the building of container images for multiple platforms and creating a manifest
// afterwards
async function buildMultiplePlatformImagesAndCreateManifest(): Promise<void> {
  buildFinished = false;

  // Collection of build IDs, this is needed for being able to create the manifest
  // as we need to know either the IDs or the names of the images that were built
  buildIDs = [];

  if (containerFilePath) {
    if (selectedProvider) {
      // Extract the relative path from the containerFilePath and containerBuildContextDirectory
      const relativeContainerfilePath = containerFilePath.substring(containerBuildContextDirectory.length + 1);

      // We'll iterate over each platform and build the image
      for (const platform of platforms) {
        // We'll be using the same terminal for all builds (getTerminalCallback)
        // similar to how Podman CLI does it.
        buildImageInfo = startBuild(getTerminalCallback());

        // Store the key
        buildImagesInfo.set(buildImageInfo);

        try {
          cancellableTokenId = await window.getCancellableTokenSource();

          // Build the image for the current platform
          // NOTE: We purporsely pass in '' as the container name so that the built image is
          // <none> in the image list similar to the Podman CLI.
          const buildOutput: BuildOutput = (await window.buildImage(
            containerBuildContextDirectory,
            relativeContainerfilePath,
            undefined, // Omitting the image name for multi-platform builds, as we'll be creating a singular manifest.
            platform,
            selectedProvider,
            buildImageInfo.buildImageKey,
            eventCollect,
            cancellableTokenId,
            formattedBuildArgs,
          )) as BuildOutput;

          // Extract and store the build ID as this is required for creating the manifest, only if it is available.

          if (buildOutput) {
            const buildIdItem = buildOutput.find(o => o.aux);
            const buildId = buildIdItem ? buildIdItem?.aux?.ID : undefined;
            if (buildId) {
              buildIDs.push(buildId.replace('sha256:', 'containers-storage:'));
            }
          }
        } catch (error) {
          logsTerminal.write(`Error:${error}\r`);
        } finally {
          cancellableTokenId = undefined;
          buildImageInfo.buildRunning = false;
        }
      }

      // Create the manifest after all builds are complete
      // we will log to the terminal if there is an error.
      try {
        await window.createManifest({
          images: buildIDs,
          name: containerImageName!,
        });
      } catch (error) {
        console.error('Error creating manifest: ', error);
        logsTerminal.write(`Error:${error}\r`);
      }

      // Finally mark the build as finished
      buildFinished = true;
    }
  }
}

function cleanupBuild(): void {
  // clear
  if (buildImageInfo) {
    clearBuildTask(buildImageInfo);
    buildImageInfo = undefined;
  }

  // redirect to the image list
  handleNavigation({ page: NavigationPage.IMAGES });
}

onMount(async () => {
  providers = get(providerInfos);
  providerConnections = providers
    .map(provider => provider.containerConnections)
    .flat()
    .filter(providerContainerConnection => providerContainerConnection.status === 'started');

  const selectedProviderConnection = providerConnections.length > 0 ? providerConnections[0] : undefined;
  selectedProvider = !selectedProvider && selectedProviderConnection ? selectedProviderConnection : selectedProvider;

  // check if we have an existing build info
  buildImageInfo = get(buildImagesInfo);
  if (buildImageInfo) {
    reconnectUI(buildImageInfo.buildImageKey, getTerminalCallback());
  }
});

onDestroy(() => {
  if (buildImageInfo) {
    disconnectUI(buildImageInfo.buildImageKey);
  }
});

async function abortBuild(): Promise<void> {
  if (cancellableTokenId) {
    await window.cancelToken(cancellableTokenId);
    cancellableTokenId = undefined;
  }
}
</script>

<EngineFormPage
  title="Build image from Containerfile"
  inProgress={buildImageInfo?.buildRunning}
  showEmptyScreen={providerConnections.length === 0}>
  {#snippet icon()}
    <i class="fas fa-cube fa-2x" aria-hidden="true"></i>
  {/snippet}
  {#snippet content()}
  <div class="space-y-6">
    <div hidden={buildImageInfo?.buildRunning}>
      <label for="containerFilePath" class="block mb-2 font-semibold text-[var(--pd-content-card-header-text)]"
        >Containerfile path</label>
      <FileInput
        name="containerFilePath"
        id="containerFilePath"
        bind:value={containerFilePath}
        placeholder="Containerfile to build"
        options={containerFileDialogOptions}
        class="w-full" />
    </div>

    <div hidden={buildImageInfo?.buildRunning}>
      <label
        for="containerBuildContextDirectory"
        class="block mb-2 font-semibold text-[var(--pd-content-card-header-text)]">Build context directory</label>
      <FileInput
        name="containerBuildContextDirectory"
        id="containerBuildContextDirectory"
        bind:value={containerBuildContextDirectory}
        placeholder="Directory to build in"
        options={contextDialogOptions}
        class="w-full" />
    </div>

    <div hidden={buildImageInfo?.buildRunning}>
      <label for="containerImageName" class="block mb-2 font-semibold text-[var(--pd-content-card-header-text)]"
        >Image name</label>
      <Input
        bind:value={containerImageName}
        name="containerImageName"
        id="containerImageName"
        placeholder="Image name (e.g. quay.io/namespace/my-custom-image)"
        class="w-full"
        required />
    </div>

    {#if providerConnections.length > 1}
      <div hidden={buildImageInfo?.buildRunning}>
        <label for="providerChoice" class="block mb-2 font-semibold text-[var(--pd-content-card-header-text)]"
          >Container engine</label>
        <ContainerConnectionDropdown
          id="providerChoice"
          name="providerChoice"
          bind:value={selectedProvider}
          connections={providerConnections}/>
      </div>
    {/if}

    <div hidden={buildImageInfo?.buildRunning}>
      <label for="inputKey" class="block mb-2 font-semibold text-[var(--pd-content-card-header-text)]"
        >Build arguments</label>
      {#each buildArgs as buildArg, index (index)}
        <div class="flex flex-row items-center space-x-2 mb-2">
          <Input bind:value={buildArg.key} name="inputKey" placeholder="Key" class="grow" required />
          <Input bind:value={buildArg.value} placeholder="Value" class="grow" required />
          <Button
            on:click={(): void => deleteBuildArg(index)}
            icon={faMinusCircle}
            disabled={buildArgs.length === 1 && buildArg.key === '' && buildArg.value === ''}
            aria-label="Delete build argument" />
          <Button on:click={addBuildArg} icon={faPlusCircle} title="Add build argument" />
        </div>
      {/each}
    </div>

    <div hidden={buildImageInfo?.buildRunning}>
      <label for="containerBuildPlatform" class="block mb-2 font-semibold text-[var(--pd-content-card-header-text)]"
        >Platform</label>
      {#if platforms.length > 1}
        <p class="text-[var(--pd-content-text)] mb-2">Multiple platforms selected, a manifest will be created</p>
      {/if}
      <BuildImageFromContainerfileCards bind:platforms={containerBuildPlatform} />
    </div>

    <div class="w-full flex flex-row space-x-4">
      {#if !buildImageInfo?.buildRunning}
        <Button on:click={buildContainerImage} disabled={hasInvalidFields} class="w-full" icon={faCube}>
          Build
        </Button>
      {/if}

      {#if buildFinished}
        <Button on:click={cleanupBuild} class="w-full">Done</Button>
      {/if}
    </div>

    <RecommendedRegistry bind:imageError={buildError} imageName={buildParentImageName} />

    <TerminalWindow bind:terminal={logsTerminal} />
    <div class="w-full">
      {#if buildImageInfo?.buildRunning}
        <Button on:click={abortBuild} class="w-full">Cancel</Button>
      {/if}
    </div>
  </div>
  {/snippet}
</EngineFormPage>
