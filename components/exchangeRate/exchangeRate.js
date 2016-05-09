(function (app) {


	app.directive('exchangeRate', function () {
		return {

			restrict: 'AE',
			templateUrl: 'components/exchangeRate/exchangeRate.html',

			controller: ['$scope', 'fixer.ioService', function ($scope, fixer) {


				$scope.symList = [];
				fixer.getSymList().then(res => $scope.symList = res);

				$scope.changeEvent = function () {
					fixer.getExcRate($scope.base , $scope.exc)
						.then(function(res){
							if ($scope.base && $scope.exc) {
								$scope.response = 'One ' +
									$scope.base + ' is ' +
									res + ' ' + $scope.exc;
							}


					})
				};


			}]
		}
	})
})(angular.module('currApp'));