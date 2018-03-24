var commands = [
	{cmd: 'ping', response: 'Pong!'},
	{cmd: 'bonjour', response: 'Coucou toi!'},
	{cmd: 'quelle est la couleur du ciel ?', response: 'Bleu, même si je n\'ai pas d\'yeux pour le voir mon programmateur m\'a dit que bleu est la couleur du ciel'},
	{cmd: 'pourquoi la vie ?', response: 'Parce que les humains vivent ils se questionnent souvent à ce sujet, malheureusement, n\'étant pas humaine je ne peux vraiment vous répondre, désolée...'},
	{cmd: 'cerises', response: 'Ma petite cerise'},
	{cmd: 'blah', response: 'Meh.'}
];



module.exports = {
	request : function(requestedCmd) {
		if (typeof commands.find(x => x.cmd === requestedCmd) !== "undefined") {
			return commands.find(x => x.cmd === requestedCmd).response;
		}else return false
	}
}