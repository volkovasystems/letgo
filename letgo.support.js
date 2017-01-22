"use strict";

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "letgo",
			"path": "letgo/letgo.js",
			"file": "letgo.js",
			"module": "letgo",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/letgo.git",
			"test": "letgo-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Construct a catcher flow procedure.

		This will return a catcher function which should
			be returned to catch a callback.

		The catcher contains a cache with the callback.

		The catcher returns the cache by default.

		The cache contains the result and callback.

		Passing a custom method to letgo executes the method after consuming the callback
			and after executing the catcher function. This will provide for a more
			specific flow of procedures.

		Passing a custom method will change the flow of the procedure. The method
			is executed once and the result will be saved forever.

		An internal cleaning mechanism allows you to clean up the cache data.

		The result of the custom method will be returned instead of cache if it is given.
	@end-module-documentation

	@include:
		{
			"called": "called",
			"harden": "harden",
			"protype": "protype",
			"truly": "truly",
			"vound": "vound",
			"zelf": "zelf",
		}
	@end-include
*/

var called = require("called");
var harden = require("harden");
var protype = require("protype");
var truly = require("truly");
var vound = require("vound");
var zelf = require("zelf");

var CLEANER = (0, _symbol2.default)("cleaner");

var letgo = function letgo(method) {
	var _cache;

	/*;
 	@meta-configuration:
 		{
 			"method": "function"
 		}
 	@end-meta-configuration
 */

	if (truly(method) && !protype(method, FUNCTION)) {
		throw new Error("invalid method");
	}

	var self = zelf(this);

	var cache = (_cache = {}, (0, _defineProperty3.default)(_cache, CLEANER, []), (0, _defineProperty3.default)(_cache, "callback", called.bind(self)()), _cache);

	/*;
 	@note:
 		This is the default cleaner.
 	@end-note
 */
	cache[CLEANER].push(function clean() {
		(0, _getOwnPropertyNames2.default)(cache).forEach(function (name) {
			try {
				cache[name] = undefined;
			} catch (error) {}
		});
	});

	var catcher = called.bind(self)(function catcher(callback) {
		cache.callback = called.bind(self)(callback);

		/*;
  	@note:
  		If the method is given, it will execute the method
  			after the catcher function is called.
  			This will return the result of the method instead of the cache.
  	@end-note
  */
		if (truly(method) && protype(method, FUNCTION)) {
			try {
				var result = vound(method, self)(cache);

				cache.result = result;

				return result;
			} catch (error) {
				return cache.callback(new Error("error executing catcher custom method, " + error));
			}
		}

		return cache;
	});

	/*;
 	@note:
 		This is the heart of the catcher-flow procedure.
 	@end-note
 */
	harden("cache", cache, catcher);

	/*;
 	@note:
 		This method is provided to prevent internal memory leaks.
 	@end-note
 */
	harden("release", function release(cleaner) {
		if (protype(cleaner, FUNCTION)) {
			cache[CLEANER].push(cleaner);

			return catcher;
		}

		while (cache[CLEANER].length) {
			cache[CLEANER].pop()();
		}

		return catcher;
	}, catcher);

	return catcher;
};

module.exports = letgo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLmpzIl0sIm5hbWVzIjpbImNhbGxlZCIsInJlcXVpcmUiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ2b3VuZCIsInplbGYiLCJDTEVBTkVSIiwibGV0Z28iLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwic2VsZiIsImNhY2hlIiwiYmluZCIsInB1c2giLCJjbGVhbiIsImZvckVhY2giLCJuYW1lIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJjYXRjaGVyIiwiY2FsbGJhY2siLCJyZXN1bHQiLCJyZWxlYXNlIiwiY2xlYW5lciIsImxlbmd0aCIsInBvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNTSxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUFBOztBQUNyQzs7Ozs7Ozs7QUFRQSxLQUFJTCxNQUFPSyxNQUFQLEtBQW1CLENBQUNOLFFBQVNNLE1BQVQsRUFBaUJDLFFBQWpCLENBQXhCLEVBQXFEO0FBQ3BELFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPTixLQUFNLElBQU4sQ0FBWDs7QUFFQSxLQUFJTyw0REFBWU4sT0FBWixFQUF1QixFQUF2Qix5Q0FBNEIsVUFBNUIsRUFBd0NQLE9BQU9jLElBQVAsQ0FBYUYsSUFBYixHQUF4QyxVQUFKOztBQUVBOzs7OztBQUtBQyxPQUFPTixPQUFQLEVBQWlCUSxJQUFqQixDQUF1QixTQUFTQyxLQUFULEdBQWlCO0FBQ3ZDLHFDQUE0QkgsS0FBNUIsRUFBb0NJLE9BQXBDLENBQTZDLFVBQUVDLElBQUYsRUFBWTtBQUN4RCxPQUFHO0FBQUVMLFVBQU9LLElBQVAsSUFBZ0JDLFNBQWhCO0FBQTRCLElBQWpDLENBQWlDLE9BQU9DLEtBQVAsRUFBYyxDQUFHO0FBQ2xELEdBRkQ7QUFHQSxFQUpEOztBQU1BLEtBQUlDLFVBQVVyQixPQUFPYyxJQUFQLENBQWFGLElBQWIsRUFBcUIsU0FBU1MsT0FBVCxDQUFrQkMsUUFBbEIsRUFBNEI7QUFDOURULFFBQU1TLFFBQU4sR0FBaUJ0QixPQUFPYyxJQUFQLENBQWFGLElBQWIsRUFBcUJVLFFBQXJCLENBQWpCOztBQUVBOzs7Ozs7O0FBUUEsTUFBSWxCLE1BQU9LLE1BQVAsS0FBbUJOLFFBQVNNLE1BQVQsRUFBaUJDLFFBQWpCLENBQXZCLEVBQW9EO0FBQ25ELE9BQUc7QUFDRixRQUFJYSxTQUFTbEIsTUFBT0ksTUFBUCxFQUFlRyxJQUFmLEVBQXVCQyxLQUF2QixDQUFiOztBQUVBQSxVQUFNVSxNQUFOLEdBQWVBLE1BQWY7O0FBRUEsV0FBT0EsTUFBUDtBQUVBLElBUEQsQ0FPQyxPQUFPSCxLQUFQLEVBQWM7QUFDZCxXQUFPUCxNQUFNUyxRQUFOLENBQWdCLElBQUlYLEtBQUosNkNBQXNEUyxLQUF0RCxDQUFoQixDQUFQO0FBQ0E7QUFDRDs7QUFFRCxTQUFPUCxLQUFQO0FBQ0EsRUF6QmEsQ0FBZDs7QUEyQkE7Ozs7O0FBS0FYLFFBQVEsT0FBUixFQUFpQlcsS0FBakIsRUFBd0JRLE9BQXhCOztBQUVBOzs7OztBQUtBbkIsUUFBUSxTQUFSLEVBQW1CLFNBQVNzQixPQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUM3QyxNQUFJdEIsUUFBU3NCLE9BQVQsRUFBa0JmLFFBQWxCLENBQUosRUFBa0M7QUFDakNHLFNBQU9OLE9BQVAsRUFBaUJRLElBQWpCLENBQXVCVSxPQUF2Qjs7QUFFQSxVQUFPSixPQUFQO0FBQ0E7O0FBRUQsU0FBT1IsTUFBT04sT0FBUCxFQUFpQm1CLE1BQXhCLEVBQWdDO0FBQy9CYixTQUFPTixPQUFQLEVBQWlCb0IsR0FBakI7QUFDQTs7QUFFRCxTQUFPTixPQUFQO0FBQ0EsRUFaRCxFQVlHQSxPQVpIOztBQWNBLFFBQU9BLE9BQVA7QUFDQSxDQWxGRDs7QUFvRkFPLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQiIsImZpbGUiOiJsZXRnby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibGV0Z28vbGV0Z28uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImxldGdvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q29uc3RydWN0IGEgY2F0Y2hlciBmbG93IHByb2NlZHVyZS5cblxuXHRcdFRoaXMgd2lsbCByZXR1cm4gYSBjYXRjaGVyIGZ1bmN0aW9uIHdoaWNoIHNob3VsZFxuXHRcdFx0YmUgcmV0dXJuZWQgdG8gY2F0Y2ggYSBjYWxsYmFjay5cblxuXHRcdFRoZSBjYXRjaGVyIGNvbnRhaW5zIGEgY2FjaGUgd2l0aCB0aGUgY2FsbGJhY2suXG5cblx0XHRUaGUgY2F0Y2hlciByZXR1cm5zIHRoZSBjYWNoZSBieSBkZWZhdWx0LlxuXG5cdFx0VGhlIGNhY2hlIGNvbnRhaW5zIHRoZSByZXN1bHQgYW5kIGNhbGxiYWNrLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2QgdG8gbGV0Z28gZXhlY3V0ZXMgdGhlIG1ldGhvZCBhZnRlciBjb25zdW1pbmcgdGhlIGNhbGxiYWNrXG5cdFx0XHRhbmQgYWZ0ZXIgZXhlY3V0aW5nIHRoZSBjYXRjaGVyIGZ1bmN0aW9uLiBUaGlzIHdpbGwgcHJvdmlkZSBmb3IgYSBtb3JlXG5cdFx0XHRzcGVjaWZpYyBmbG93IG9mIHByb2NlZHVyZXMuXG5cblx0XHRQYXNzaW5nIGEgY3VzdG9tIG1ldGhvZCB3aWxsIGNoYW5nZSB0aGUgZmxvdyBvZiB0aGUgcHJvY2VkdXJlLiBUaGUgbWV0aG9kXG5cdFx0XHRpcyBleGVjdXRlZCBvbmNlIGFuZCB0aGUgcmVzdWx0IHdpbGwgYmUgc2F2ZWQgZm9yZXZlci5cblxuXHRcdEFuIGludGVybmFsIGNsZWFuaW5nIG1lY2hhbmlzbSBhbGxvd3MgeW91IHRvIGNsZWFuIHVwIHRoZSBjYWNoZSBkYXRhLlxuXG5cdFx0VGhlIHJlc3VsdCBvZiB0aGUgY3VzdG9tIG1ldGhvZCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgY2FjaGUgaWYgaXQgaXMgZ2l2ZW4uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ2b3VuZFwiOiBcInZvdW5kXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCIsXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHZvdW5kID0gcmVxdWlyZSggXCJ2b3VuZFwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgQ0xFQU5FUiA9IFN5bWJvbCggXCJjbGVhbmVyXCIgKTtcblxuY29uc3QgbGV0Z28gPSBmdW5jdGlvbiBsZXRnbyggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGxldCBjYWNoZSA9IHsgWyBDTEVBTkVSIF06IFsgXSwgXCJjYWxsYmFja1wiOiBjYWxsZWQuYmluZCggc2VsZiApKCApIH07XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IGNsZWFuZXIuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGNhY2hlWyBDTEVBTkVSIF0ucHVzaCggZnVuY3Rpb24gY2xlYW4oICl7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIGNhY2hlICkuZm9yRWFjaCggKCBuYW1lICkgPT4ge1xuXHRcdFx0dHJ5eyBjYWNoZVsgbmFtZSBdID0gdW5kZWZpbmVkOyB9Y2F0Y2goIGVycm9yICl7IH1cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRsZXQgY2F0Y2hlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGZ1bmN0aW9uIGNhdGNoZXIoIGNhbGxiYWNrICl7XG5cdFx0Y2FjaGUuY2FsbGJhY2sgPSBjYWxsZWQuYmluZCggc2VsZiApKCBjYWxsYmFjayApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0SWYgdGhlIG1ldGhvZCBpcyBnaXZlbiwgaXQgd2lsbCBleGVjdXRlIHRoZSBtZXRob2Rcblx0XHRcdFx0XHRhZnRlciB0aGUgY2F0Y2hlciBmdW5jdGlvbiBpcyBjYWxsZWQuXG5cblx0XHRcdFx0VGhpcyB3aWxsIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBtZXRob2QgaW5zdGVhZCBvZiB0aGUgY2FjaGUuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGxldCByZXN1bHQgPSB2b3VuZCggbWV0aG9kLCBzZWxmICkoIGNhY2hlICk7XG5cblx0XHRcdFx0Y2FjaGUucmVzdWx0ID0gcmVzdWx0O1xuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0cmV0dXJuIGNhY2hlLmNhbGxiYWNrKCBuZXcgRXJyb3IoIGBlcnJvciBleGVjdXRpbmcgY2F0Y2hlciBjdXN0b20gbWV0aG9kLCAkeyBlcnJvciB9YCApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9ICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBoZWFydCBvZiB0aGUgY2F0Y2hlci1mbG93IHByb2NlZHVyZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aGFyZGVuKCBcImNhY2hlXCIsIGNhY2hlLCBjYXRjaGVyICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCB0byBwcmV2ZW50IGludGVybmFsIG1lbW9yeSBsZWFrcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aGFyZGVuKCBcInJlbGVhc2VcIiwgZnVuY3Rpb24gcmVsZWFzZSggY2xlYW5lciApe1xuXHRcdGlmKCBwcm90eXBlKCBjbGVhbmVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRjYWNoZVsgQ0xFQU5FUiBdLnB1c2goIGNsZWFuZXIgKTtcblxuXHRcdFx0cmV0dXJuIGNhdGNoZXI7XG5cdFx0fVxuXG5cdFx0d2hpbGUoIGNhY2hlWyBDTEVBTkVSIF0ubGVuZ3RoICl7XG5cdFx0XHRjYWNoZVsgQ0xFQU5FUiBdLnBvcCggKSggKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0fSwgY2F0Y2hlciApO1xuXG5cdHJldHVybiBjYXRjaGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXRnbztcbiJdfQ==
