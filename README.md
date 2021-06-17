# Thread Saver Backend

## 🎯 Description

![Thread Saver](https://i.ibb.co/Df2GTHt/threadsaver.gif)
![](https://i.ibb.co/9t9hnRg/de49605b-7529-45d3-a7d1-5b15d73b9098.png)
![](https://i.ibb.co/jRVryPk/ad56a2c5-3767-43f5-a707-fb609350c146.png)

Thread Saver is my entry to the [HarperDB Hackathon on Hashnode](https://townhall.hashnode.com/announcing-harperdb-hackathon-on-hashnode).
This repo contains only the backend code. The frontend can be found [here](https://github.com/nemo0/thread-saver-frontend)

## 🎗 Inspiration and Real-World Usage

Twitter and especially the Twitter tech community share awesome content over Twitter threads. We always don't have the time to read the threads at once. The thread saver is an approach to save the threads and read them later.

## 🥊 Challenges

Challenges at multiple points were very high. Twitter API shares only one message to which a thread was replied. It was essential to understand a replied thread and what is not to get the whole Twitter thread. Once I find a way to figure it out, I created a recursive function that recursively goes from bottom to top, checking the replied thread. And once it finds the original thread, the recursive function ends and returns an array of information.

## 👨‍🏫 Lessons Learnt

During the build of the project, I learned a lot more about JavaScript, how to use asynchronous functions, working with APIs, using Docker, and a lot more.

## 🌌 Future Plan and Roadmap

This product is currently an alpha release. A lot of modification is going to be made to this app. I've plans to implement OAuth to connect the app with Twitter so that different users can use it, just like readwise.io.

More plans:

### Roadmap

- Add OAuth

- Add `add tag to thread` option

- Add custom command option
- Add DM to user when thread stored

## 🏞 Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `T_API_KEY` - Twitter API Key

- `T_API_SECRET` - Twitter API Secret

- `T_BEARER_TOKEN` - Twitter Bearer Token(optional)

- `T_ACCESS_TOKEN` - Twitter Aceess Token

- `T_ACCESS_SECRET` - Twitter Access Secret

- `T_USERNAME` - Twitter T_USERNAME

- `HD_HOST` - HarperDB Hostname

- `HD_USER` - HarperDB Database User

- `HD_PASS` - HarperDB Database User Password

- `HD_SCHEMA` - HarperDB Schema

You'll also need to have a table called `tweets` in your HarperDB studio.
Another thing to note is to change your command on **_line 11_**(`track: '#saveTheTweet @NemoK98381806'`) of `index.js`

## 🔗 License

[MIT](https://choosealicense.com/licenses/mit/)
