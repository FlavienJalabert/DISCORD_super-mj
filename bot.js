const Discord = require("discord.js");
const Commands = require("./commands.js");

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
		var result = Commands.request.find(cmd);
		console.log(result);
        if(result.cmd == cmd) {
                message.channel.send(result.response);
        }else {
			message.channel.send("Mauvaise utilisation de la commande, essayez $help pour plus d'infos");
		}
    }
});


bot.login(process.env.BOT_TOKEN);