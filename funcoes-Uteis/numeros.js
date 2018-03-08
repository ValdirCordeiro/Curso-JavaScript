var x = 456e5;  // 45600000

var y = 123e-6;  // 0.000123

var z = 0.9999999999999999; //Máximo 15 digitos em decimais e 16 digitos depois da virgula

var a = 0x100; //256 emhexadecimal -> coloca 0x e depois o hexadecimal

var b = 07777; // Octal começa com 0

console.log(b.toString(16)); //toString(Com a base para exibição)

console.log(x.toExponential());

console.log(y.toFixed(2)); //Arredonda com duas casas


console.log((3.357).toPrecision(4)); 