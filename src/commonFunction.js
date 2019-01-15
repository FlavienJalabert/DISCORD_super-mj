function getAllExcept(a,max){
	var result=[];
	var step=0;
    for(var i=1;i<max+1;i++){
		if(a!==i){result[step]=i;step+=1;}
	}return result;
}
function getWinners(a, b) {
	var winners=getAllExcept(a, b);
	var response=[];
	for(var i=0;i<winners.length;i++) {
		response[i] = " "+winners[i];
	}
	return response;
}
function nextPlayer(a, b) {
	a=a+1;
	if (a>b) {a=1;}
	return a
}
function arbitrator(a, b) {
	console.log(a, b);
	// if safe = 0 then it's safe, if safe = 1 then rule infraction has been detected
	var safe = 0;
	var error = "fault";
	//do
	
	
	return [safe, error]
}
function help(a) {
	var out = "";
	a.forEach(function (e) {
		out += "$"+e+"\n\n";
	});
	return out;
}


module.exports = {
	getWinners : getWinners,
	arbitrator : arbitrator,
	nextPlayer : nextPlayer,
	help : help,
};