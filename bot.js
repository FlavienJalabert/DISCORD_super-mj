const Discord = require("discord.js");

// Initialize Discord Bot
var bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.content.substring(0, 1) == '$') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});


bot.login(process.env.BOT_TOKEN);