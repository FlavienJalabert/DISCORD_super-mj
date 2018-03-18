var commands = [
	{cmd: 'ping', response: 'Pong!'},
	{cmd: 'bonjour', response: 'Coucou toi !'},
	{cmd: 'cerises', response: 'Ma petite cerise'}
];

module.exports = {
	request : function(requestedCmd) {
		return commands.find(x => x.cmd === requestedCmd).response;
	}
}