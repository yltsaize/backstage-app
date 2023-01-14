import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { s3Plugin, S3Page } from '../src/plugin';

createDevApp()
  .registerPlugin(s3Plugin)
  .addPage({
    element: <S3Page />,
    title: 'Root Page',
    path: '/s3'
  })
  .render();
