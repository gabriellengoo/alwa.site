// sanity.config.js
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { muxInput } from 'sanity-plugin-mux-input';
import openWebPreview from './webPreviewAction';

const WebPreviewAction = {
  name: 'webPreview',
  title: 'Web Preview',
  icon: () => '🌐',
  location: 'document',
  group: 'document',
  action: openWebPreview,
};

export default defineConfig({
  name: 'default',
  title: 'ALWA',
  projectId: 't4wk0gbl',
  dataset: 'production',
  plugins: [
    deskTool({
      desk: {
        actions: [WebPreviewAction],
      },
    }),
    visionTool(),
    muxInput(),
  ],
  schema: {
    types: schemaTypes,
  },
});
