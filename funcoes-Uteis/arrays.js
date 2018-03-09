var array = "aba ba ba as sas".split(' ');

console.log(array.toString());

console.log(array.join(' '));


array.push("Sansa");
array.unshift("Sansa");

var elemento = array.pop();

console.log(elemento);

elemento = array.shift();

array[1] = 'Jon Snow';

console.log(array);

var slice = array.slice(3, 4);

console.log(slice);

var splice = array.splice(1, 1, "Araya", "Sansa");

console.log(splice);
console.log(array);

array.splice(3,1);
console.log(array);

array = array.concat(splice, slice);
console.log(array);