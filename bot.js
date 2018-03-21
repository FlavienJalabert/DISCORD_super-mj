const Discord = require("discord.js");
const Commands = require("./commands.js");

// Initialize Discord Bot
var bot = new Discord.Client();
var isTalkative = process.env.TALKATIVITY;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
});


bot.on('message', message => {
	if(message.author.bot) return;
	
	var cmd = message.content;
	
	if(cmd.indexOf(process.env.PREFIX) == -1  && isTalkative == true) {
		if(Commands.request(cmd)) {
				message.channel.send(Commands.request(cmd));
		}else {
			console.log("No Matchs for : "+cmd);
		}
	}else {
		var args = cmd.substring(1, cmd.length);
		const command = args.toLowerCase();
	
	if(command == "play") {
		//do
		console.log("do play")
	}
	
	if(command == "talkative") {
		isTalkative = !isTalkative;
		message.channel.send("talkative set to " + isTalkative);
	}
	
	
	}
});

bot.login(process.env.BOT_TOKEN);
