<script lang="ts">
import { faPlug } from '@fortawesome/free-solid-svg-icons';
import { Button, ErrorMessage } from '@podman-desktop/ui-svelte';

let reconnectInProgress = $state(false);
let reconnectError = $state('');
let reconnectResult = $state('');

async function reconnectContainerProviders(): Promise<void> {
  const start = performance.now();
  reconnectInProgress = true;
  reconnectError = '';
  reconnectResult = '...Waiting for response...';
  try {
    await window.reconnectContainerProviders();
  } catch (e) {
    reconnectError = String(e);
    reconnectResult = 'Failed';
  } finally {
    reconnectInProgress = false;
  }
  const end = performance.now();
  reconnectResult = `Done in (${(end - start).toFixed(2)}ms)`;
}
</script>

<div class="flex flex-row items-center">
  <Button
    class="my-1"
    inProgress={reconnectInProgress}
    title="Re-establish connection to the container engine sockets"
    on:click={reconnectContainerProviders}
    icon={faPlug}>
    Reconnect providers
  </Button>
  <div role="status" class="mx-2" aria-label="Reconnect Providers">{reconnectResult}</div>
  {#if reconnectError}
    <ErrorMessage class="mx-2" error={reconnectError} />
  {/if}
</div>
