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


			var numVal = input.replace(/[^\-\d\.]+/g, ''),
				text = input.replace('-', '').slice(0, input.search(/\d/) - 1);

			if ( !Number.isNaN(parseInt(numVal)) ) {
	
				return numVal < 0 ?  text + ('\u0028' + input.slice(input.search(/\d/)) + '\u0029') : '' + input;
				
			} else { 
				return '0';
			}

		}
	})
})(angular.module('currApp'));