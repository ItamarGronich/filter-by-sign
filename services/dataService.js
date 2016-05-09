(function (app) {
	app.service('dataService', dataService);

	function dataService() {

		function getCurrVal() {
			var simData = ( Math.random() - .5 ) * Math.pow(10, 4);
			return simData.toFixed(5)
		}
		
		
		this.getCurrVal = getCurrVal();

	}


})(angular.module('currApp'));