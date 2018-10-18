# Midterm-Bot

This project is a twitter bot was made to retweet relevant tweets from a group of prominent NBA reporters using node.js, the "Twit" npm package as well as the "string-similarity" package. The bot uses the twitter ID of the reporters to retweet their most recent tweets. The purpose of the bot was to have a stream of information to keep up with the NBA. To avoid similar information being retweeted more than once, the npm package "string-similarity" to compare the tweets and evaluate its similarity compared to previously retweeted information. 

To start, you will need a Twitter API key and install the two npm packages, "twit" and "string-similarity". Then use the terminal to run the bot using the terminal and the command "node bot.js". The bot will begin to run and as tweets are created from the NBA reporter accounts, the tweets will be retweeted to your twitter account.
