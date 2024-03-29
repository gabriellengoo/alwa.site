import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'ALWA',

  projectId: 't4wk0gbl',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), muxInput()],

  schema: {
    types: schemaTypes,
  },

  api: {
    // Other API configurations

    // Add the webhook configuration here
    webhook: {
      path: './webhook', // Adjust the path based on your project structure
      methods: ['post'],
    },
  },
});
