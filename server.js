// Live code from "Conversational Slack Bots with JavaScript" meetup 2016-02-18.
// Credit: Mike Brevoort
// Link: http://www.meetup.com/Node-js-Denver-Boulder/events/228756347/

// ~ Check it out ~
// * https://beepboophq.com/
// * https://www.github.com/mbrevoort/trump-slack-bot.git
// * Docker
// * Wit.ai
// * Airtable

var controller = require('botkit').slackbot();

controller.spawn({
  token: process.env.SLACK_TOKEN;
}).startRTM(function(err) {
  if (err) throw new Error(err);
  console.log("Connect to slack!");
})

controller.hears('hi', 'direct_message,direct_mention', fuction (bot, message){
  bot.reply(message, 'hello!');
});

controller.hears('.*', 'ambient', function(bot, message) {
  console.log(message);
  count[message.user] ] (cont[message.user] || 0) + 1:
  console.log(count);
})

controller.on('bot_channel_join', function (bot, message) {
  bot.reply(nessage, 'hi, everyone!');
});
