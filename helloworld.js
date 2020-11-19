function beyanAramaSayfasindaUyar(){

	alert('beyan arama sayfası');
	
}

var oldHref = document.location.href;

		console.log(oldHref)
		
		window.onload = function() {

			var
				bodyList = document.querySelector("body")

				,observer = new MutationObserver(function(mutations) {

					mutations.forEach(function(mutation) {

						if (oldHref != document.location.href) {

							oldHref = document.location.href;

							console.log(oldHref)
							
							if (oldHref.includes('beyan')){
								beyanAramaSayfasindaUyar();
							}
							
							

						}

					});

				});

			var config = {
				childList: true,
				subtree: true
			};

			observer.observe(bodyList, config);

		};



