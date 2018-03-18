var commands = [
	{cmd: 'ping', response: 'Pong!'},
	{cmd: 'bonjour', response: 'Coucou toi!'},
	{cmd: 'cerises', response: 'Ma petite cerise'}
];

module.exports = {
	request : function(requestedCmd) {
		if (typeof commands.find(x => x.cmd === requestedCmd) !== "undefined") {
			return commands.find(x => x.cmd === requestedCmd).response;
		}else return false
	}
}