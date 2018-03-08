var tick = (function(){
	var contador = 0;

	return function () {
		contador++;
		console.log(contador);
	}
})();


tick();
tick();
tick();
