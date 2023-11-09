// middlewares/sanity.js
const axios = require('axios');

module.exports = async (req, res, next) => {
  // Your Sanity-related logic here using GROQ
  // Example: Fetch data from Sanity
  const sanityData = await axios.post('YOUR_SANITY_API_URL', { query: 'YOUR_GROQ_QUERY' });

  // Attach Sanity data to the request
  req.sanityData = sanityData.data;

  next();
};
