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
			console.log("No matches for : " + cmd);
		}
	}else {
		let args = message.content.slice(process.env.PREFIX.length).trim().split(/ /g);
		const command = args.shift().toLowerCase();

	if(command === "talkative") {
		isTalkative=!isTalkative;
		message.channel.send("talkative set to " + isTalkative);
	}

	if(command === "roll") {
		// TODO multiple dices
		if (typeof args[0] !== "undefined") {
			let result = Math.floor(Math.random() * args[0])+1;
			message.channel.send("rooooooll !  " + result);
		}
	}

	if(command === "play") {
		//do
		console.log("do play")
	}

	if(command === "save") {
		let arguments = args.join(" ").split("-");
		if (arguments[1].contains("command")) {
			let command = arguments[1].split(" ")[1];
			let response = arguments[2].split(" ")[1];
			// TODO save to data base command and response
		}else {
			if (arguments[1].contains("response")) {
				let command = arguments[2].split(" ")[1];
				let response = arguments[1].split(" ")[1];
				// TODO save to data base command and response
			}else {
				message.channel.send("Wrong way to use the save command")
			}
		}
		if (arguments[1].contains("c") && arguments[2].contains("r")) {
			let command = arguments[1].split(" ")[1];
			let response = arguments[2].split(" ")[1];
			// TODO save to data base command and response
		}else {
			if (arguments[1].contains("r") && arguments[2].contains("c")) {
				let command = arguments[2].split(" ")[1];
				let response = arguments[1].split(" ")[1];
				// TODO save to data base command and response
			}
		}

	}

	if(command === "help") {
		let help=[];

		help.push("$roll : roll a dice ($roll <dice size>)");

		message.channel.send(CommonFunction.help(help));
	}

	}
});

bot.login(process.env.BOT_TOKEN);
