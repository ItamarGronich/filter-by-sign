(function (app) {


	app.directive('marketValue', function () {
		return {

			restrict: 'AE',
			templateUrl: 'components/marketValue/marketValue.html',

			controller: ['$scope', 'dataService', '$interval', function ($scope, dataService, $interval) {


				$scope.val = '';
				
				
				$interval(function () {
					$scope.val = dataService.getCurrVal();
				}, 1000)
			}]
		}
	})
})(angular.module('currApp'));