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
			"arid": "arid",
			"budge": "budge",
			"called": "called",
			"depher": "depher",
			"filled": "filled",
			"harden": "harden",
			"protype": "protype",
			"truly": "truly",
			"zelf": "zelf",
		}
	@end-include
*/

var arid = require("arid");
var budge = require("budge");
var called = require("called");
var depher = require("depher");
var filled = require("filled");
var harden = require("harden");
var protype = require("protype");
var truly = require("truly");
var zelf = require("zelf");

//: @support-module:
//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Array.prototype.every || (Array.prototype.every = function (r, t) {
	"use strict";

	var e, n;if (null == this) throw new TypeError("this is null or not defined");
	var o = Object(this),
	    i = o.length >>> 0;if ("function" != typeof r) throw new TypeError();
	for (arguments.length > 1 && (e = t), n = 0; i > n;) {
		var f;if (n in o) {
			f = o[n];var y = r.call(e, f, n, o);
			if (!y) return !1;
		}n++;
	}return !0;
});
//: @end-support-module

//: @support-module:
//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Array.prototype.some || (Array.prototype.some = function (r) {
	"use strict";

	if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
	if ("function" != typeof r) throw new TypeError();for (var e = Object(this), t = e.length >>> 0, o = arguments.length >= 2 ? arguments[1] : void 0, n = 0; t > n; n++) {
		if (n in e && r.call(o, e[n], n, e)) return !0;
	}return !1;
});
//: @end-support-module

var CLEANER = (0, _symbol2.default)("cleaner");
var CHECKER = (0, _symbol2.default)("checker");

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

	var cache = (_cache = {}, (0, _defineProperty3.default)(_cache, CHECKER, []), (0, _defineProperty3.default)(_cache, CLEANER, []), (0, _defineProperty3.default)(_cache, "callback", called.bind(self)()), _cache);

	/*;
 	@note:
 		This is the default cleaner.
 	@end-note
 */
	cache[CLEANER].push(function clean() {
		(0, _getOwnPropertyNames2.default)(cache).forEach(function (name) {
			if (name != "callback") {
				try {
					cache[name] = undefined;
				} catch (error) {}
			}
		});
	});

	/*;
 	@note:
 		This is the default checker if execution has finished.
 	@end-note
 */
	cache[CHECKER].push(function check() {
		return truly(cache.callback) && cache.callback.called() || arid(cache[CLEANER]);
	});

	var catcher = called.bind(self)(function catcher(callback) {
		cache.callback = called.bind(self)(callback);

		/*;
  	@note:
  		Possible usage of the passed parameters as initial values.
  	@end-note
  */
		var parameter = budge(arguments);
		cache.parameter = parameter;

		/*;
  	@note:
  		If the method is given, it will execute the method
  			after the catcher function is called.
  			This will return the result of the method instead of the cache.
  	@end-note
  */
		if (truly(method) && protype(method, FUNCTION)) {
			try {
				var result = method.apply(self, parameter.concat(cache));

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

		if (arid(cache[CLEANER])) {
			return catcher;
		}

		var reset = depher(arguments, BOOLEAN, false);
		if (reset) {
			while (filled(cache[CLEANER])) {
				cache[CLEANER].pop()();
			}

			while (filled(cache[CHECKER])) {
				cache[CHECKER].pop();
			}
		} else {
			cache[CLEANER].forEach(function (cleaner) {
				cleaner();
			});
		}

		return catcher;
	}, catcher);

	/*;
 	@note:
 		This method is used to register checker and check if the catcher is already done.
 	@end-note
 */
	harden("done", function done(checker) {
		if (protype(checker, FUNCTION)) {
			cache[CHECKER].push(checker);

			return catcher;
		}

		/*;
  	@note:
  		If the checkers are empty it means the catcher has been reset.
  	@end-note
  */
		if (arid(cache[CHECKER])) {
			return true;
		}

		var strict = depher(arguments, BOOLEAN, false);
		if (strict) {
			return cache[CHECKER].every(function (checker) {
				return checker();
			});
		} else {
			return cache[CHECKER].some(function (checker) {
				return checker();
			});
		}
	}, catcher);

	return catcher;
};

module.exports = letgo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYnVkZ2UiLCJjYWxsZWQiLCJkZXBoZXIiLCJmaWxsZWQiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ6ZWxmIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJldmVyeSIsInIiLCJ0IiwiZSIsIm4iLCJUeXBlRXJyb3IiLCJvIiwiT2JqZWN0IiwiaSIsImxlbmd0aCIsImFyZ3VtZW50cyIsImYiLCJ5IiwiY2FsbCIsInNvbWUiLCJDTEVBTkVSIiwiQ0hFQ0tFUiIsImxldGdvIiwibWV0aG9kIiwiRlVOQ1RJT04iLCJFcnJvciIsInNlbGYiLCJjYWNoZSIsImJpbmQiLCJwdXNoIiwiY2xlYW4iLCJmb3JFYWNoIiwibmFtZSIsInVuZGVmaW5lZCIsImVycm9yIiwiY2hlY2siLCJjYWxsYmFjayIsImNhdGNoZXIiLCJwYXJhbWV0ZXIiLCJyZXN1bHQiLCJhcHBseSIsImNvbmNhdCIsInJlbGVhc2UiLCJjbGVhbmVyIiwicmVzZXQiLCJCT09MRUFOIiwicG9wIiwiZG9uZSIsImNoZWNrZXIiLCJzdHJpY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0ZBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxTQUFTRixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLFVBQVVOLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxD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QTs7QUFFRCxNQUFJNEIsU0FBU3BELE9BQVFrQixTQUFSLEVBQW1COEIsT0FBbkIsRUFBNEIsS0FBNUIsQ0FBYjtBQUNBLE1BQUlJLE1BQUosRUFBWTtBQUNYLFVBQU90QixNQUFPTixPQUFQLEVBQWlCaEIsS0FBakIsQ0FBd0IsVUFBRTJDLE9BQUYsRUFBZTtBQUFFLFdBQU9BLFNBQVA7QUFBb0IsSUFBN0QsQ0FBUDtBQUVBLEdBSEQsTUFHSztBQUNKLFVBQU9yQixNQUFPTixPQUFQLEVBQWlCRixJQUFqQixDQUF1QixVQUFFNkIsT0FBRixFQUFlO0FBQUUsV0FBT0EsU0FBUDtBQUFvQixJQUE1RCxDQUFQO0FBQ0E7QUFFRCxFQXhCRCxFQXdCR1gsT0F4Qkg7O0FBMEJBLFFBQU9BLE9BQVA7QUFDQSxDQXRKRDs7QUF3SkFhLE9BQU9DLE9BQVAsR0FBaUI3QixLQUFqQiIsImZpbGUiOiJsZXRnby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibGV0Z28vbGV0Z28uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImxldGdvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q29uc3RydWN0IGEgY2F0Y2hlciBmbG93IHByb2NlZHVyZS5cblxuXHRcdFRoaXMgd2lsbCByZXR1cm4gYSBjYXRjaGVyIGZ1bmN0aW9uIHdoaWNoIHNob3VsZFxuXHRcdFx0YmUgcmV0dXJuZWQgdG8gY2F0Y2ggYSBjYWxsYmFjay5cblxuXHRcdFRoZSBjYXRjaGVyIGNvbnRhaW5zIGEgY2FjaGUgd2l0aCB0aGUgY2FsbGJhY2suXG5cblx0XHRUaGUgY2F0Y2hlciByZXR1cm5zIHRoZSBjYWNoZSBieSBkZWZhdWx0LlxuXG5cdFx0VGhlIGNhY2hlIGNvbnRhaW5zIHRoZSByZXN1bHQgYW5kIGNhbGxiYWNrLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2QgdG8gbGV0Z28gZXhlY3V0ZXMgdGhlIG1ldGhvZCBhZnRlciBjb25zdW1pbmcgdGhlIGNhbGxiYWNrXG5cdFx0XHRhbmQgYWZ0ZXIgZXhlY3V0aW5nIHRoZSBjYXRjaGVyIGZ1bmN0aW9uLiBUaGlzIHdpbGwgcHJvdmlkZSBmb3IgYSBtb3JlXG5cdFx0XHRzcGVjaWZpYyBmbG93IG9mIHByb2NlZHVyZXMuXG5cblx0XHRQYXNzaW5nIGEgY3VzdG9tIG1ldGhvZCB3aWxsIGNoYW5nZSB0aGUgZmxvdyBvZiB0aGUgcHJvY2VkdXJlLiBUaGUgbWV0aG9kXG5cdFx0XHRpcyBleGVjdXRlZCBvbmNlIGFuZCB0aGUgcmVzdWx0IHdpbGwgYmUgc2F2ZWQgZm9yZXZlci5cblxuXHRcdEFuIGludGVybmFsIGNsZWFuaW5nIG1lY2hhbmlzbSBhbGxvd3MgeW91IHRvIGNsZWFuIHVwIHRoZSBjYWNoZSBkYXRhLlxuXG5cdFx0VGhlIHJlc3VsdCBvZiB0aGUgY3VzdG9tIG1ldGhvZCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgY2FjaGUgaWYgaXQgaXMgZ2l2ZW4uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbi8vOiBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9ldmVyeVxuXHRBcnJheS5wcm90b3R5cGUuZXZlcnl8fChBcnJheS5wcm90b3R5cGUuZXZlcnk9ZnVuY3Rpb24ocix0KXtcInVzZSBzdHJpY3RcIjtcblx0dmFyIGUsbjtpZihudWxsPT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWRcIik7XG5cdHZhciBvPU9iamVjdCh0aGlzKSxpPW8ubGVuZ3RoPj4+MDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3I7XG5cdGZvcihhcmd1bWVudHMubGVuZ3RoPjEmJihlPXQpLG49MDtpPm47KXt2YXIgZjtpZihuIGluIG8pe2Y9b1tuXTt2YXIgeT1yLmNhbGwoZSxmLG4sbyk7XG5cdGlmKCF5KXJldHVybiExfW4rK31yZXR1cm4hMH0pO1xuLy86IEBlbmQtc3VwcG9ydC1tb2R1bGVcblxuLy86IEBzdXBwb3J0LW1vZHVsZTpcblx0Ly86IEByZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvbWVcblx0QXJyYXkucHJvdG90eXBlLnNvbWV8fChBcnJheS5wcm90b3R5cGUuc29tZT1mdW5jdGlvbihyKXtcInVzZSBzdHJpY3RcIjtcblx0aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJyYXkucHJvdG90eXBlLnNvbWUgY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuXHRpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3I7Zm9yKHZhciBlPU9iamVjdCh0aGlzKSx0PWUubGVuZ3RoPj4+MCxcblx0bz1hcmd1bWVudHMubGVuZ3RoPj0yP2FyZ3VtZW50c1sxXTp2b2lkIDAsbj0wO3Q+bjtuKyspXG5cdGlmKG4gaW4gZSYmci5jYWxsKG8sZVtuXSxuLGUpKXJldHVybiEwO3JldHVybiExfSk7XG4vLzogQGVuZC1zdXBwb3J0LW1vZHVsZVxuXG5jb25zdCBDTEVBTkVSID0gU3ltYm9sKCBcImNsZWFuZXJcIiApO1xuY29uc3QgQ0hFQ0tFUiA9IFN5bWJvbCggXCJjaGVja2VyXCIgKTtcblxuY29uc3QgbGV0Z28gPSBmdW5jdGlvbiBsZXRnbyggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGxldCBjYWNoZSA9IHtcblx0XHRbIENIRUNLRVIgXTogWyBdLFxuXHRcdFsgQ0xFQU5FUiBdOiBbIF0sXG5cdFx0XCJjYWxsYmFja1wiOiBjYWxsZWQuYmluZCggc2VsZiApKCApXG5cdH07XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IGNsZWFuZXIuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGNhY2hlWyBDTEVBTkVSIF0ucHVzaCggZnVuY3Rpb24gY2xlYW4oICl7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIGNhY2hlICkuZm9yRWFjaCggKCBuYW1lICkgPT4ge1xuXHRcdFx0aWYoIG5hbWUgIT0gXCJjYWxsYmFja1wiICl7XG5cdFx0XHRcdHRyeXsgY2FjaGVbIG5hbWUgXSA9IHVuZGVmaW5lZDsgfWNhdGNoKCBlcnJvciApeyB9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBkZWZhdWx0IGNoZWNrZXIgaWYgZXhlY3V0aW9uIGhhcyBmaW5pc2hlZC5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0Y2FjaGVbIENIRUNLRVIgXS5wdXNoKCBmdW5jdGlvbiBjaGVjayggKXtcblx0XHRyZXR1cm4gKCB0cnVseSggY2FjaGUuY2FsbGJhY2sgKSAmJiBjYWNoZS5jYWxsYmFjay5jYWxsZWQoICkgKSB8fCBhcmlkKCBjYWNoZVsgQ0xFQU5FUiBdICk7XG5cdH0gKTtcblxuXHRsZXQgY2F0Y2hlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGZ1bmN0aW9uIGNhdGNoZXIoIGNhbGxiYWNrICl7XG5cdFx0Y2FjaGUuY2FsbGJhY2sgPSBjYWxsZWQuYmluZCggc2VsZiApKCBjYWxsYmFjayApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0UG9zc2libGUgdXNhZ2Ugb2YgdGhlIHBhc3NlZCBwYXJhbWV0ZXJzIGFzIGluaXRpYWwgdmFsdWVzLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRsZXQgcGFyYW1ldGVyID0gYnVkZ2UoIGFyZ3VtZW50cyApO1xuXHRcdGNhY2hlLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHRoZSBtZXRob2QgaXMgZ2l2ZW4sIGl0IHdpbGwgZXhlY3V0ZSB0aGUgbWV0aG9kXG5cdFx0XHRcdFx0YWZ0ZXIgdGhlIGNhdGNoZXIgZnVuY3Rpb24gaXMgY2FsbGVkLlxuXG5cdFx0XHRcdFRoaXMgd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGluc3RlYWQgb2YgdGhlIGNhY2hlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIHByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gbWV0aG9kLmFwcGx5KCBzZWxmLCBwYXJhbWV0ZXIuY29uY2F0KCBjYWNoZSApICk7XG5cblx0XHRcdFx0Y2FjaGUucmVzdWx0ID0gcmVzdWx0O1xuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0cmV0dXJuIGNhY2hlLmNhbGxiYWNrKCBuZXcgRXJyb3IoIGBlcnJvciBleGVjdXRpbmcgY2F0Y2hlciBjdXN0b20gbWV0aG9kLCAkeyBlcnJvciB9YCApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9ICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIGlzIHRoZSBoZWFydCBvZiB0aGUgY2F0Y2hlci1mbG93IHByb2NlZHVyZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aGFyZGVuKCBcImNhY2hlXCIsIGNhY2hlLCBjYXRjaGVyICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCB0byBwcmV2ZW50IGludGVybmFsIG1lbW9yeSBsZWFrcy5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aGFyZGVuKCBcInJlbGVhc2VcIiwgZnVuY3Rpb24gcmVsZWFzZSggY2xlYW5lciApe1xuXHRcdGlmKCBwcm90eXBlKCBjbGVhbmVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRjYWNoZVsgQ0xFQU5FUiBdLnB1c2goIGNsZWFuZXIgKTtcblxuXHRcdFx0cmV0dXJuIGNhdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYoIGFyaWQoIGNhY2hlWyBDTEVBTkVSIF0gKSApe1xuXHRcdFx0cmV0dXJuIGNhdGNoZXI7XG5cdFx0fVxuXG5cdFx0bGV0IHJlc2V0ID0gZGVwaGVyKCBhcmd1bWVudHMsIEJPT0xFQU4sIGZhbHNlICk7XG5cdFx0aWYoIHJlc2V0ICl7XG5cdFx0XHR3aGlsZSggZmlsbGVkKCBjYWNoZVsgQ0xFQU5FUiBdICkgKXtcblx0XHRcdFx0Y2FjaGVbIENMRUFORVIgXS5wb3AoICkoICk7XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlKCBmaWxsZWQoIGNhY2hlWyBDSEVDS0VSIF0gKSApe1xuXHRcdFx0XHRjYWNoZVsgQ0hFQ0tFUiBdLnBvcCggKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0Y2FjaGVbIENMRUFORVIgXS5mb3JFYWNoKCAoIGNsZWFuZXIgKSA9PiB7IGNsZWFuZXIoICk7IH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0fSwgY2F0Y2hlciApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBtZXRob2QgaXMgdXNlZCB0byByZWdpc3RlciBjaGVja2VyIGFuZCBjaGVjayBpZiB0aGUgY2F0Y2hlciBpcyBhbHJlYWR5IGRvbmUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJkb25lXCIsIGZ1bmN0aW9uIGRvbmUoIGNoZWNrZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY2hlY2tlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0Y2FjaGVbIENIRUNLRVIgXS5wdXNoKCBjaGVja2VyICk7XG5cblx0XHRcdHJldHVybiBjYXRjaGVyO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHRoZSBjaGVja2VycyBhcmUgZW1wdHkgaXQgbWVhbnMgdGhlIGNhdGNoZXIgaGFzIGJlZW4gcmVzZXQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCBhcmlkKCBjYWNoZVsgQ0hFQ0tFUiBdICkgKXtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBzdHJpY3QgPSBkZXBoZXIoIGFyZ3VtZW50cywgQk9PTEVBTiwgZmFsc2UgKTtcblx0XHRpZiggc3RyaWN0ICl7XG5cdFx0XHRyZXR1cm4gY2FjaGVbIENIRUNLRVIgXS5ldmVyeSggKCBjaGVja2VyICkgPT4geyByZXR1cm4gY2hlY2tlciggKTsgfSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gY2FjaGVbIENIRUNLRVIgXS5zb21lKCAoIGNoZWNrZXIgKSA9PiB7IHJldHVybiBjaGVja2VyKCApOyB9ICk7XG5cdFx0fVxuXG5cdH0sIGNhdGNoZXIgKTtcblxuXHRyZXR1cm4gY2F0Y2hlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbGV0Z287XG4iXX0=
