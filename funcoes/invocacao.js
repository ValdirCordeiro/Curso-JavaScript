function dizerOI(nome) {
	console.log("OI, " + nome);
	console.log(this);
}

//dizerOI("Arya");

dizerOI.call({}, "Arya");

dizerOI.apply({}, ["Arya"]);