(function (app) {

	/**
	 * filters by Negative Positive sign
	 */
	app.filter('bySign', function(){

		/**
		 * error handling and type normalization
		 *
		 * @param input - {number}
		 *
		 * @returns {String} of a Number where negative values are parenthesized.
		 */
		return function(input){
			
			if ( !Number.isNaN(parseInt(input)) ) {
	
				return input < 0 ?  '(' + Math.abs(input) + ')' : '' + input;
				
			} else { 
				return '0';
			}

		}
	})
})(angular.module('currApp'));