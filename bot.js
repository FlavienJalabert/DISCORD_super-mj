const Discord = require("discord.js");
const Commands = require("./commands.js");

// Initialize Discord Bot
var bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
});


bot.on('message', message => {
	if(message.author.bot) return;
	
	var cmd = message.content;
	
	if(cmd.indexOf(process.env.PREFIX) !== 0) {
		
		if(Commands.request(cmd)) {
				message.channel.send(Commands.request(cmd));
		}else {
			console.log("No Matchs for : "+cmd);
		}
	}else {
		var args = cmd.slice(process.env.PREFIX.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
	
	
	if(command == "play") {
		//do
		console.log("do")
	}
	
	
	}
});


bot.login(process.env.BOT_TOKEN);
