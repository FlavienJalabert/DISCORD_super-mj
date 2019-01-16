let commands = [
	{cmd: 'quelle est la couleur du ciel ?', response: 'Bleu, même si je n\'ai pas d\'yeux pour le voir mon programmateur m\'a dit que bleu est la couleur du ciel'},
	{cmd: 'pourquoi la vie ?', response: 'Parce que les humains vivent ils se questionnent souvent à ce sujet, malheureusement, n\'étant pas humaine je ne peux vraiment vous répondre, désolée...'},
	{cmd: 'blah', response: 'Meh.'},
	{cmd: "rules", response : "règles : "}
];



module.exports = {
	request : (requestedCmd) => {
		if (typeof commands.find(x => x.cmd === requestedCmd) !== "undefined") {
			return commands.find(x => x.cmd === requestedCmd).response;
		}else return false
	}
};
