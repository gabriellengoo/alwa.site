// webhook.js

exports.handler = async (event, context) => {
  // Your webhook logic here
  console.log('Webhook triggered:', event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Webhook received' }),
  };
};