var Twitter = require('../lib/twitter');
var credentials = require("./credentials");

var client = new Twitter({
  consumer_key: credentials.twitter.CONSUMER_KEY,
  consumer_secret: credentials.twitter.CONSUMER_SECRET,
  access_token_key: credentials.twitter.ACCESS_TOKEN_KEY,
  access_token_secret: credentials.twitter.ACCESS_TOKEN_SECRET
});
