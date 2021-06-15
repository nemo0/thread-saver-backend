require('dotenv').config({ path: './config/.env' });
const Twitter = require('twitter');

// Connection with Twitter
var client = new Twitter({
  consumer_key: process.env.T_API_KEY,
  consumer_secret: process.env.T_API_SECRET,
  access_token_key: process.env.T_ACCESS_TOKEN,
  access_token_secret: process.env.T_ACCESS_SECRET,
});

module.exports = { client };
