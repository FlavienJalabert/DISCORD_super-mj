const Discord = require("discord.js");

// Initialize Discord Bot
var bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', message => {
	if(message.author.bot) return;
    if (message.content.substring(0, 1) == '$') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                message.channel.send('Pong!');
            break;
			case 'bonjour':
                message.channel.send('Couou toi!');
            break;
            // Just add any case commands if you want to..
         }
     }
});


bot.login(process.env.BOT_TOKEN);