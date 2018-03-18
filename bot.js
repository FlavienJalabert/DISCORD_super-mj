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
			message.reply(Commands.request(cmd));
	}else {
		message.reply("Mauvaise utilisation de la commande, essayez $help pour plus d'infos");
	}
});


bot.login(process.env.BOT_TOKEN);