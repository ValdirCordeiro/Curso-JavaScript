dizerOi("NED");

function dizerOi(nome){
	console.log("Olá " + nome);
}

var dizerOla = function (nome) {
	console.log("Olá " + nome);
} ;

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau("Geraldo");
