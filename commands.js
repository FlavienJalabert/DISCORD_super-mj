var commands = [
	{cmd: 'ping', response: 'Pong!'},
	{cmd: 'bonjour', response: 'Coucou toi!'},
	{cmd: 'cerises', response: 'Ma petite cerise'}
];

module.exports = {
	request : function(requestedCmd) {
		if (commands.find(x => x.cmd === requestedCmd).response) {
			return commands.find(x => x.cmd === requestedCmd).response;
		}else return null
	}
}