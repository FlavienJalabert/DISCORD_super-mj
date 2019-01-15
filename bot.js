const Discord=require("discord.js");
const Commands=require("./src/commands.js");
const CommonFunction=require("./src/commonFunction.js");
const fs=require("fs");

// Initialize Discord Bot
let bot = new Discord.Client();
let isTalkative=process.env.TALKATIVITY;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  bot.user.setStatus('online');
  bot.user.setActivity(process.env.PREFIX+"help for further information");
});


bot.on('message', message => {
	if(message.author.bot) return;
	
	let cmd = message.content;
	
	if(cmd.indexOf(process.env.PREFIX) === -1  && isTalkative === true) {
		if(Commands.request(cmd)) {
				message.channel.send(Commands.request(cmd));
		}else {
			console.log("No Matches for : " + cmd);
		}
	}else {
		const args=message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
		const command=args.shift().toLowerCase();
	
	if(command === "talkative") {
		isTalkative=!isTalkative;
		message.channel.send("talkative set to " + isTalkative);
	}

	if(command === "roll") {
		let result = Math.floor(Math.random() * args[0]);
		message.channel.send("rooooooll !  " + result);
	}
	
	if(command === "play") {
		//do
		console.log("do play")
	}
	
	if(command === "help") {
		let help=[];

		help.push("talkative: Set the talkative of the bot (true: will respond to any message, false: be quiet)");
		help.push("game: Set status of the bot to the defined game");

		message.channel.send(CommonFunction.help(help));
	}
	
	}
});

bot.login(process.env.BOT_TOKEN);
