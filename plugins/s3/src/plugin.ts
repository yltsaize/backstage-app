import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const s3Plugin = createPlugin({
  id: 's3',
  routes: {
    root: rootRouteRef,
  },
});

export const S3Page = s3Plugin.provide(
  createRoutableExtension({
    name: 'S3Page',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
