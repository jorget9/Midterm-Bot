console.log("The bot begins...");

var Twit = require('twit');

var config= require('./config');

var stringSimilarity = require('string-similarity');

var T = new Twit(config);

function tweets(){
	var users =  ["178580925", "50323173", "2372249542","27649623","48488561","57710919","27667187","20444254","42040091","74518740","4845928227"];
	var stream = T.stream('statuses/filter', {follow: users});

	var previousTweets = ["test"];

	var similarity;


	stream.on('tweet', function (tweet) {
				if (users.indexOf(tweet.user.id_str) > -1) {
				    	console.log(tweet.text)
				    	similarity=stringSimilarity.findBestMatch(tweet.text,previousTweets).bestMatch.rating;
				   		console.log(similarity);

				   		if(similarity<=0.6){

				   			T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
			            	console.log(stringSimilarity);
			            	previousTweets.push(tweet.text);
				       		console.log(previousTweets);
				       		//console.log(data)
	        			})
				   		}

				   		
					
	    		}
				

		
	    
	})
}

tweets();

