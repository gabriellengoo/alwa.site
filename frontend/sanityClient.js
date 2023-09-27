// sanityClient.js

import sanityClient from '@sanity/client';

// Import your Sanity configuration from sanity.config.js
import sanityConfig from './sanity.config';

// Initialize the Sanity client
const client = sanityClient({
  projectId: sanityConfig.api.projectId,
  dataset: sanityConfig.api.dataset,
  useCdn: false, // Disable CDN if needed
  token: '', // Set an API token if required
});

// Function to fetch data from Sanity
export async function fetchDataFromSanity(query) {
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}

export default client;
