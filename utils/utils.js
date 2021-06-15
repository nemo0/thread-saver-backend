const { client } = require('../config/twitter');

//@desc     Extracts the tweet text from the tweet object
async function getTweetDetails(tweet) {
  try {
    const tweetDetails = {};
    tweetDetails.user = await tweet.user.name;
    tweetDetails.username = await tweet.user.screen_name;
    tweetDetails.createdAt = await tweet.created_at;
    let tweetId = await tweet.id_str;
    tweetDetails.tweetId = tweetId;
    tweetDetails.tweetUrl = `https://twitter.com/i/web/status/${tweetId}`;
    if (tweet.truncated) {
      tweetDetails.text = await tweet.extended_tweet.full_text;
      return tweetDetails;
    } else {
      tweetDetails.text = await tweet.full_text;
      return tweetDetails;
    }
  } catch (error) {
    console.error(error);
  }
}

// @desc    Searches a tweets bases on tweet ID
async function searchTweet(tweetId) {
  try {
    let tweet = await client.get('statuses/show/' + tweetId, {
      tweet_mode: 'extended',
    });
    return tweet;
  } catch (error) {
    console.error(error);
  }
}

var myArray = [];
// @desc    Gets a single tweet for a given tweet ID
async function getSingleTweet(tId) {
  try {
    let tweets = {};
    let tweet = await searchTweet(tId);
    let repliedToTid = tweet.in_reply_to_status_id_str;
    if (tweet.extended_entities !== undefined) {
      let mediaArray = [];
      let details = await getTweetDetails(tweet);
      tweets.details = [details];
      tweet.extended_entities.media.forEach((media) => {
        mediaArray.push(media.media_url_https);
      });
      tweets.details[0].media = mediaArray;
    } else {
      let details = await getTweetDetails(tweet);
      tweets.details = [details];
    }
    myArray.push(tweets);
    return repliedToTid;
  } catch (error) {
    console.error(error);
  } finally {
    // console.log('From finally', myArray);
  }
}

// @desc    Gets the aboves tweets recursively
async function getTweetsRecurse(tweetId) {
  try {
    if (tweetId === null) {
      var tempArray = myArray.slice();
      myArray = [];
      return tempArray;
    } else {
      let repliedToTid = await getSingleTweet(tweetId);
      return getTweetsRecurse(repliedToTid);
    }
  } catch (error) {
    console.error(error);
  }
}

// Testing Functions
async function getTweetMe() {
  try {
    let tId = '1401945295655555074';
    let val = await searchTweet(tId);
    console.log(val);
  } catch (error) {
    console.error(error);
  }
}

async function showT() {
  let i = '1402125508423286784';
  const t = await searchTweet(i);
  console.log(t.extended_entities.media[0]);
}

// showT();

module.exports = {
  getTweetDetails,
  searchTweet,
  getSingleTweet,
  getTweetsRecurse,
};
