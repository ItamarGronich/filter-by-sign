(function (app) {
	app.service('fixer.ioService', fixerService);

	function fixerService($http) {

		this.getExcRate = function (a,b) {

			if (!a && !b) { return }

			return $http.get('http://api.fixer.io/latest?base=' +
				a + '&' + 'symbols=' + b)
				.then(function(res){
					return res.data.rates[b];
				});
		};


		this.getSymList = function () {
			return $http.get('http://api.fixer.io/latest')
				.then(function (res) {
					return Object.keys(res.data.rates);
				});
		}



	}

	fixerService.$inject = ['$http'];

})(angular.module('currApp'));