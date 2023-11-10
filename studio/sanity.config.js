import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'
// import customDeskStructure from './deskStructure.js';

export default defineConfig({
  name: 'default',
  title: 'ALWA',

  projectId: 't4wk0gbl',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), muxInput()],

  schema: {
    types: schemaTypes,
  },
  
  // desk: {
  //   name: 'alwa',
  //   structure: customDeskStructure,
  // },
  parts: [
    // Other parts...
    {
      name: 'part:@sanity/desk-tool/structure',
      path: './deskStructure.js', // Make sure to adjust the path accordingly
    },
  ],
}) 
