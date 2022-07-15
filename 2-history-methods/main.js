(function() {

	/**
	 * history.back()
	 * history.forward()
	 * history.pushState()
	 * history.replaceState()
	 */
	let elBtns = document.querySelectorAll('[data-js-btn]'),
		elIpsum = document.querySelector('.container');

	for (let i = 0, l = elBtns.length; i < l; i++) {

		elBtns[i].addEventListener('click', function() {

			let dataset = elBtns[i].dataset.jsBtn;

			/* console.log(dataset); */

			if (dataset === 'back') history.back();

			else if (dataset === 'forward') history.forward();
			
			else if (dataset === 'push') {
				history.pushState({
					title: 'hipster',
					texte: 'HIPSTEEEEEEEEEEEER texte'
				}, 
				null, 
				'hipster-ipsum')
			} 
			
			else if (dataset === 'replace') {
				history.replaceState({
					title: 'replace',
					texte: 'REPLAAAAAAAAAAAACE texte'
				}, 
				null, 
				'hipster-replace')
			}

			if (history.state) {
			elIpsum.innerHTML = history.state.texte;

			console.log(history.state);}
		});
	}


	/**
	 * history.go();
	 */
	let elSelect = document.querySelector('[data-js-select]');
	elSelect.addEventListener('change', function() {
		let value = elSelect.value;
		history.go(value);
	});


	/**
	 * Comportements à l'événement 'popstate'
	 */

	window.addEventListener('popstate', function(e) {
		console.log(e.state);
		if (e.state) {
			elIpsum.innerHTML = e.state.texte;

			console.log(e.state);}
	})





})();