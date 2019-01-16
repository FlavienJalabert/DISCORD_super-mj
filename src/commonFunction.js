function help(a) {
	let out = "";
	a.forEach(function (e) {
		out += "$"+e+"\n\n";
	});
	return out;
}

module.exports = {
	help : help
};
