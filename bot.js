const Discord=require("discord.js");
const Commands=require("./src/commands.js");
const CommonFunction=require("./src/commonFunction.js");
const fs=require("fs");

// Initialize Discord Bot
var bot=new Discord.Client();
var isTalkative=process.env.TALKATIVITY;
var shiritori=false;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
  bot.user.setStatus('available');
  bot.user.setActivity(process.env.PREFIX+"help for further informations");
});


bot.on('message', message => {
	if(message.author.bot) return;
	
	var cmd=message.content;
	
	if(cmd.indexOf(process.env.PREFIX) == -1  && isTalkative == true) {
		if(Commands.request(cmd)) {
				message.channel.send(Commands.request(cmd));
		}else {
			console.log("No Matchs for : "+cmd);
		}
	}else {
		const args=message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
		const command=args.shift().toLowerCase();
	
	if(command == "talkative") {
		isTalkative=!isTalkative;
		message.channel.send("talkative set to " + isTalkative);
	}
	
	if (command === "shiritori" && shiritori != true) {
		shiritori=true;
		const channel=message.channel;
		channel.send("How many members wants to play ?");
        var Collector1=channel.createCollector(message => message.author.bot === false);
        Collector1.on('collect', message => {
			var nop=Number(message.content);
			if (nop <= 1 || typeof nop != 'number') {
				channel.send("Wrong argument, stopping the game");
				shiritori=false;
			}else {
				var player=Math.floor(Math.random()*nop+1);
				channel.send("The first player is player " + player);
				Collector1.stop('game started');
				var Collector2=channel.createCollector(message => message.author.bot === false);
				Collector2.on("collect", message => {
					let lastWord=message.content;
					Collector2.stop('first word set');
					var Collector=new Discord.MessageCollector(channel, message => message.author.bot === false);
					player=CommonFunction.nextPlayer(player, nop);
					channel.send("Next player is player " + player);
					Collector.on("collect", message => {
						if(message.content == "stop") {
							var winners=new CommonFunction.getWinners(player, nop);
							channel.send("Player " + player + ", you loose by "+"give up"+", nice tried ! \nPlayer(s) " +winners.join()+ " won the round!");
							Collector.stop('game end');
							channel.send("Game ended.");
							shiritori=false;
						}else{
							var comp=CommonFunction.arbitrator(lastWord, message.content);
							if (comp[0] == 1) {
								var winners=new CommonFunction.getWinners(player, nop);
								channel.send("Player " + player + ", you loose by "+comp[1]+", nice tried ! \nPlayer(s) " +winners.join()+ " won the round!");
								Collector.stop('game end');
								channel.send("Game ended.");
								shiritori=false;
							}else{
								lastWord=message.content;
								player=CommonFunction.nextPlayer(player, nop);
								channel.send("Next player is player " + player);
								if(Math.random() <= Math.random()) {channel.send("You can end your turn anytime by taping 'stop'. But it will be counted as a give up !");}
							}
						}
					});
				
				});
			}
		});
	}
	
	if(command == "play") {
		//do
		console.log("do play")
	}
	
	if(command == "help") {
		var help=new Array();
		help.push("talkative: Set the talkativity of the bot (true: will respond to any message, false: be quiet)");
		help.push("shiritori: Start a new game of shiritori");
		help.push("game: Set status of the bot to the defined game");

		message.channel.send(CommonFunction.help(help));
	}
	
	}
});

bot.login(process.env.BOT_TOKEN);
