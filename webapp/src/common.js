function moneyRemoveDecimals(s){
	return s.replace(/\.[\S]*/, '');
}

function jsonEqual(a,b) {
    return JSON.stringify(a) === JSON.stringify(b);
}