const Discord = require("discord.js");
const Commands = require("./commands.js");

// Initialize Discord Bot
var bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', message => {
	if(message.author.bot) return;
	
	var cmd = message.content;
	
	if(Commands.request(cmd)) {
			message.channel.send(Commands.request(cmd));
	}else {
		message.channel.send("Je n'ai pas compris votre message, excusez moi...");
	}
});


bot.login(process.env.BOT_TOKEN);