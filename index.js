const express = require('express');
const app = express();
const { client } = require('./config/twitter');
const { getTweetsRecurse } = require('./utils/utils');
const db = require('./config/db');
require('dotenv').config({ path: './config/.env' });

client.stream(
  'statuses/filter',
  {
    track: '#saveTheThread @NemoK98381806',
    tweet_mode: 'extended',
  },
  function (stream) {
    stream.on('data', async (tweet) => {
      console.log(tweet);
      if (tweet.user.screen_name === process.env.T_USERNAME) {
        let repliedToTweetId = tweet.in_reply_to_status_id_str;
        if (repliedToTweetId !== null) {
          let arrData = await getTweetsRecurse(repliedToTweetId);
          let tweetsObj = {};
          tweetsObj.tweets = arrData.reverse();
          const options = {
            table: 'tweets',
            records: [tweetsObj],
          };
          db.insert(options)
            .then((res) => {
              console.log('Tweets Saved');
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log('from index.js', tweetsObj.tweets);
        }
      } else {
        console.error('Unauthorized User');
      }
    });
  }
);

app.get('/', (req, res) => {
  res.redirect('https://threadsaver.xyz');
});

app.get('/:id', (req, res) => {
  res.send('Sorry, page not found.');
});

// Server Setup
const PORT = 3456;
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
