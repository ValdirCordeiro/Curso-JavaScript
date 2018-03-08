var obj = { 
	nome: "Jon", 
	sobrenome: "Snow", 
	idade: 16, 

	apresentar: function(){
		console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome +'.');
	},

	apresentar2 : apresentar2
};

function apresentar2() {
	console.log("Olá2, eu sou " + this.nome + ' ' + this.sobrenome +'.');
}

console.log(obj.nome);

obj.apresentar();

obj.apresentar2();