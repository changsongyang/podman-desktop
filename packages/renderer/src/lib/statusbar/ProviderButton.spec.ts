/**********************************************************************
 * Copyright (C) 2025 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/
import '@testing-library/jest-dom/vitest';

import type { ProviderStatus } from '@podman-desktop/api';
import { render } from '@testing-library/svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import IconImage from '/@/lib/appearance/IconImage.svelte';
import ProviderButton from '/@/lib/statusbar/ProviderButton.svelte';
import ProviderButtonStatus from '/@/lib/statusbar/ProviderButtonStatus.svelte';
import type { ProviderInfo } from '/@api/provider-info';

vi.mock(import('/@/lib/appearance/IconImage.svelte'));
vi.mock(import('/@/lib/statusbar/ProviderButtonStatus.svelte'));

const PROVIDER_MOCK = {
  name: 'provider1',
  containerConnections: [],
  kubernetesConnections: [],
  vmConnections: [],
  status: 'ready' as ProviderStatus,
  images: {
    icon: 'my-nice-icon',
  },
} as unknown as ProviderInfo;

beforeEach(() => {
  vi.resetAllMocks();
});

test('class props should be propagated to button', async () => {
  const { getByRole } = render(ProviderButton, {
    provider: PROVIDER_MOCK,
    onclick: vi.fn(),
    class: 'potatoes',
  });

  const widget = getByRole('button', { name: 'provider1' });
  expect(widget).toHaveClass('potatoes');
});

test('provider with an image should render it', async () => {
  render(ProviderButton, {
    provider: PROVIDER_MOCK,
    onclick: vi.fn(),
    class: 'potatoes',
  });

  expect(IconImage).toHaveBeenCalledWith(
    expect.anything(),
    expect.objectContaining({
      image: PROVIDER_MOCK.images.icon,
    }),
  );
});

test('left slot should be rendered if defined', async () => {
  const left = vi.fn();
  render(ProviderButton, {
    provider: PROVIDER_MOCK,
    onclick: vi.fn(),
    class: 'potatoes',
    left,
  });

  await vi.waitFor(() => {
    expect(left).toHaveBeenCalled();
  });
});

test('expect ProviderButtonStatus to be called with the current status when a provider icon is provided', () => {
  render(ProviderButton, {
    provider: PROVIDER_MOCK,
    onclick: vi.fn(),
    class: 'potatoes',
  });

  expect(ProviderButtonStatus).toHaveBeenCalledWith(
    expect.anything(),
    expect.objectContaining({
      status: PROVIDER_MOCK.status,
    }),
  );
});
