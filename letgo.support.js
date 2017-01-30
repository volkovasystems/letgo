"use strict";

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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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

var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
				/*;
    	@note:
    		Don't change this structure, cache should come first.
    	@end-note
    */
				var result = method.apply(self, [cache].concat(parameter));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYnVkZ2UiLCJjYWxsZWQiLCJkZXBoZXIiLCJmaWxsZWQiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ6ZWxmIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJldmVyeSIsInIiLCJ0IiwiZSIsIm4iLCJUeXBlRXJyb3IiLCJvIiwiT2JqZWN0IiwiaSIsImxlbmd0aCIsImFyZ3VtZW50cyIsImYiLCJ5IiwiY2FsbCIsInNvbWUiLCJDTEVBTkVSIiwiQ0hFQ0tFUiIsImxldGdvIiwibWV0aG9kIiwiRlVOQ1RJT04iLCJFcnJvciIsInNlbGYiLCJjYWNoZSIsImJpbmQiLCJwdXNoIiwiY2xlYW4iLCJmb3JFYWNoIiwibmFtZSIsInVuZGVmaW5lZCIsImVycm9yIiwiY2hlY2siLCJjYWxsYmFjayIsImNhdGNoZXIiLCJwYXJhbWV0ZXIiLCJyZXN1bHQiLCJhcHBseSIsImNvbmNhdCIsInJlbGVhc2UiLCJjbGVhbmVyIiwicmVzZXQiLCJCT09MRUFOIiwicG9wIiwiZG9uZSIsImNoZWNrZXIiLCJzdHJpY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1GQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxVQUFVTixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNTyxRQUFRUCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1RLE9BQU9SLFFBQVMsTUFBVCxDQUFiOztBQUVBO0FBQ0M7QUFDQVMsTUFBTUMsU0FBTixDQUFnQkMsS0FBaEIsS0FBd0JGLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLEdBQXNCLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUM7O0FBQzVELEtBQUlDLENBQUosRUFBTUMsQ0FBTixDQUFRLElBQUcsUUFBTSxJQUFULEVBQWMsTUFBTSxJQUFJQyxTQUFKLENBQWMsNkJBQWQsQ0FBTjtBQUN0QixLQUFJQyxJQUFFQyxPQUFPLElBQVAsQ0FBTjtBQUFBLEtBQW1CQyxJQUFFRixFQUFFRyxNQUFGLEtBQVcsQ0FBaEMsQ0FBa0MsSUFBRyxjQUFZLE9BQU9SLENBQXRCLEVBQXdCLE1BQU0sSUFBSUksU0FBSixFQUFOO0FBQzFELE1BQUlLLFVBQVVELE1BQVYsR0FBaUIsQ0FBakIsS0FBcUJOLElBQUVELENBQXZCLEdBQTBCRSxJQUFFLENBQWhDLEVBQWtDSSxJQUFFSixDQUFwQyxHQUF1QztBQUFDLE1BQUlPLENBQUosQ0FBTSxJQUFHUCxLQUFLRSxDQUFSLEVBQVU7QUFBQ0ssT0FBRUwsRUFBRUYsQ0FBRixDQUFGLENBQU8sSUFBSVEsSUFBRVgsRUFBRVksSUFBRixDQUFPVixDQUFQLEVBQVNRLENBQVQsRUFBV1AsQ0FBWCxFQUFhRSxDQUFiLENBQU47QUFDaEUsT0FBRyxDQUFDTSxDQUFKLEVBQU0sT0FBTSxDQUFDLENBQVA7QUFBUztBQUFJLFNBQU0sQ0FBQyxDQUFQO0FBQVMsQ0FKNUI7QUFLRDs7QUFFQTtBQUNDO0FBQ0FkLE1BQU1DLFNBQU4sQ0FBZ0JlLElBQWhCLEtBQXVCaEIsTUFBTUMsU0FBTixDQUFnQmUsSUFBaEIsR0FBcUIsVUFBU2IsQ0FBVCxFQUFXO0FBQUM7O0FBQ3hELEtBQUcsUUFBTSxJQUFULEVBQWMsTUFBTSxJQUFJSSxTQUFKLENBQWMsa0RBQWQsQ0FBTjtBQUNkLEtBQUcsY0FBWSxPQUFPSixDQUF0QixFQUF3QixNQUFNLElBQUlJLFNBQUosRUFBTixDQUFvQixLQUFJLElBQUlGLElBQUVJLE9BQU8sSUFBUCxDQUFOLEVBQW1CTCxJQUFFQyxFQUFFTSxNQUFGLEtBQVcsQ0FBaEMsRUFDaERILElBQUVJLFVBQVVELE1BQVYsSUFBa0IsQ0FBbEIsR0FBb0JDLFVBQVUsQ0FBVixDQUFwQixHQUFpQyxLQUFLLENBRFEsRUFDTk4sSUFBRSxDQURBLEVBQ0VGLElBQUVFLENBREosRUFDTUEsR0FETjtBQUU1QyxNQUFHQSxLQUFLRCxDQUFMLElBQVFGLEVBQUVZLElBQUYsQ0FBT1AsQ0FBUCxFQUFTSCxFQUFFQyxDQUFGLENBQVQsRUFBY0EsQ0FBZCxFQUFnQkQsQ0FBaEIsQ0FBWCxFQUE4QixPQUFNLENBQUMsQ0FBUDtBQUZjLEVBRUwsT0FBTSxDQUFDLENBQVA7QUFBUyxDQUpoRDtBQUtEOztBQUVBLElBQU1ZLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjs7QUFFQSxJQUFNQyxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQUE7O0FBQ3JDOzs7Ozs7OztBQVFBLEtBQUl0QixNQUFPc0IsTUFBUCxLQUFtQixDQUFDdkIsUUFBU3VCLE1BQVQsRUFBaUJDLFFBQWpCLENBQXhCLEVBQXFEO0FBQ3BELFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJQyxPQUFPeEIsS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSXlCLDREQUNETixPQURDLEVBQ1UsRUFEVix5Q0FFREQsT0FGQyxFQUVVLEVBRlYseUNBR0gsVUFIRyxFQUdTeEIsT0FBT2dDLElBQVAsQ0FBYUYsSUFBYixHQUhULFVBQUo7O0FBTUE7Ozs7O0FBS0FDLE9BQU9QLE9BQVAsRUFBaUJTLElBQWpCLENBQXVCLFNBQVNDLEtBQVQsR0FBaUI7QUFDdkMscUNBQTRCSCxLQUE1QixFQUFvQ0ksT0FBcEMsQ0FBNkMsVUFBRUMsSUFBRixFQUFZO0FBQ3hELE9BQUlBLFFBQVEsVUFBWixFQUF3QjtBQUN2QixRQUFHO0FBQUVMLFdBQU9LLElBQVAsSUFBZ0JDLFNBQWhCO0FBQTRCLEtBQWpDLENBQWlDLE9BQU9DLEtBQVAsRUFBYyxDQUFHO0FBQ2xEO0FBQ0QsR0FKRDtBQUtBLEVBTkQ7O0FBUUE7Ozs7O0FBS0FQLE9BQU9OLE9BQVAsRUFBaUJRLElBQWpCLENBQXVCLFNBQVNNLEtBQVQsR0FBaUI7QUFDdkMsU0FBU2xDLE1BQU8wQixNQUFNUyxRQUFiLEtBQTJCVCxNQUFNUyxRQUFOLENBQWV4QyxNQUFmLEVBQTdCLElBQTJESCxLQUFNa0MsTUFBT1AsT0FBUCxDQUFOLENBQWxFO0FBQ0EsRUFGRDs7QUFJQSxLQUFJaUIsVUFBVXpDLE9BQU9nQyxJQUFQLENBQWFGLElBQWIsRUFBcUIsU0FBU1csT0FBVCxDQUFrQkQsUUFBbEIsRUFBNEI7QUFDOURULFFBQU1TLFFBQU4sR0FBaUJ4QyxPQUFPZ0MsSUFBUCxDQUFhRixJQUFiLEVBQXFCVSxRQUFyQixDQUFqQjs7QUFFQTs7Ozs7QUFLQSxNQUFJRSxZQUFZM0MsTUFBT29CLFNBQVAsQ0FBaEI7QUFDQVksUUFBTVcsU0FBTixHQUFrQkEsU0FBbEI7O0FBRUE7Ozs7Ozs7QUFRQSxNQUFJckMsTUFBT3NCLE1BQVAsS0FBbUJ2QixRQUFTdUIsTUFBVCxFQUFpQkMsUUFBakIsQ0FBdkIsRUFBb0Q7QUFDbkQsT0FBRztBQUNGOzs7OztBQUtBLFFBQUllLFNBQVNoQixPQUFPaUIsS0FBUCxDQUFjZCxJQUFkLEVBQW9CLENBQUVDLEtBQUYsRUFBVWMsTUFBVixDQUFrQkgsU0FBbEIsQ0FBcEIsQ0FBYjs7QUFFQVgsVUFBTVksTUFBTixHQUFlQSxNQUFmOztBQUVBLFdBQU9BLE1BQVA7QUFFQSxJQVpELENBWUMsT0FBT0wsS0FBUCxFQUFjO0FBQ2QsV0FBT1AsTUFBTVMsUUFBTixDQUFnQixJQUFJWCxLQUFKLDZDQUFzRFMsS0FBdEQsQ0FBaEIsQ0FBUDtBQUNBO0FBQ0Q7O0FBRUQsU0FBT1AsS0FBUDtBQUNBLEVBdENhLENBQWQ7O0FBd0NBOzs7OztBQUtBNUIsUUFBUSxPQUFSLEVBQWlCNEIsS0FBakIsRUFBd0JVLE9BQXhCOztBQUVBOzs7OztBQUtBdEMsUUFBUSxTQUFSLEVBQW1CLFNBQVMyQyxPQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUM3QyxNQUFJM0MsUUFBUzJDLE9BQVQsRUFBa0JuQixRQUFsQixDQUFKLEVBQWtDO0FBQ2pDRyxTQUFPUCxPQUFQLEVBQWlCUyxJQUFqQixDQUF1QmMsT0FBdkI7O0FBRUEsVUFBT04sT0FBUDtBQUNBOztBQUVELE1BQUk1QyxLQUFNa0MsTUFBT1AsT0FBUCxDQUFOLENBQUosRUFBOEI7QUFDN0IsVUFBT2lCLE9BQVA7QUFDQTs7QUFFRCxNQUFJTyxRQUFRL0MsT0FBUWtCLFNBQVIsRUFBbUI4QixPQUFuQixFQUE0QixLQUE1QixDQUFaO0FBQ0EsTUFBSUQsS0FBSixFQUFXO0FBQ1YsVUFBTzlDLE9BQVE2QixNQUFPUCxPQUFQLENBQVIsQ0FBUCxFQUFtQztBQUNsQ08sVUFBT1AsT0FBUCxFQUFpQjBCLEdBQWpCO0FBQ0E7O0FBRUQsVUFBT2hELE9BQVE2QixNQUFPTixPQUFQLENBQVIsQ0FBUCxFQUFtQztBQUNsQ00sVUFBT04sT0FBUCxFQUFpQnlCLEdBQWpCO0FBQ0E7QUFFRCxHQVRELE1BU0s7QUFDSm5CLFNBQU9QLE9BQVAsRUFBaUJXLE9BQWpCLENBQTBCLFVBQUVZLE9BQUYsRUFBZTtBQUFFQTtBQUFhLElBQXhEO0FBQ0E7O0FBRUQsU0FBT04sT0FBUDtBQUNBLEVBMUJELEVBMEJHQSxPQTFCSDs7QUE0QkE7Ozs7O0FBS0F0QyxRQUFRLE1BQVIsRUFBZ0IsU0FBU2dELElBQVQsQ0FBZUMsT0FBZixFQUF3QjtBQUN2QyxNQUFJaEQsUUFBU2dELE9BQVQsRUFBa0J4QixRQUFsQixDQUFKLEVBQWtDO0FBQ2pDRyxTQUFPTixPQUFQLEVBQWlCUSxJQUFqQixDQUF1Qm1CLE9BQXZCOztBQUVBLFVBQU9YLE9BQVA7QUFDQTs7QUFFRDs7Ozs7QUFLQSxNQUFJNUMsS0FBTWtDLE1BQU9OLE9BQVAsQ0FBTixDQUFKLEVBQThCO0FBQzdCLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUk0QixTQUFTcEQsT0FBUWtCLFNBQVIsRUFBbUI4QixPQUFuQixFQUE0QixLQUE1QixDQUFiO0FBQ0EsTUFBSUksTUFBSixFQUFZO0FBQ1gsVUFBT3RCLE1BQU9OLE9BQVAsRUFBaUJoQixLQUFqQixDQUF3QixVQUFFMkMsT0FBRixFQUFlO0FBQUUsV0FBT0EsU0FBUDtBQUFvQixJQUE3RCxDQUFQO0FBRUEsR0FIRCxNQUdLO0FBQ0osVUFBT3JCLE1BQU9OLE9BQVAsRUFBaUJGLElBQWpCLENBQXVCLFVBQUU2QixPQUFGLEVBQWU7QUFBRSxXQUFPQSxTQUFQO0FBQW9CLElBQTVELENBQVA7QUFDQTtBQUVELEVBeEJELEVBd0JHWCxPQXhCSDs7QUEwQkEsUUFBT0EsT0FBUDtBQUNBLENBM0pEOztBQTZKQWEsT0FBT0MsT0FBUCxHQUFpQjdCLEtBQWpCIiwiZmlsZSI6ImxldGdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibGV0Z28vbGV0Z28uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImxldGdvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGV0Z28uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsZXRnby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENvbnN0cnVjdCBhIGNhdGNoZXIgZmxvdyBwcm9jZWR1cmUuXG5cblx0XHRUaGlzIHdpbGwgcmV0dXJuIGEgY2F0Y2hlciBmdW5jdGlvbiB3aGljaCBzaG91bGRcblx0XHRcdGJlIHJldHVybmVkIHRvIGNhdGNoIGEgY2FsbGJhY2suXG5cblx0XHRUaGUgY2F0Y2hlciBjb250YWlucyBhIGNhY2hlIHdpdGggdGhlIGNhbGxiYWNrLlxuXG5cdFx0VGhlIGNhdGNoZXIgcmV0dXJucyB0aGUgY2FjaGUgYnkgZGVmYXVsdC5cblxuXHRcdFRoZSBjYWNoZSBjb250YWlucyB0aGUgcmVzdWx0IGFuZCBjYWxsYmFjay5cblxuXHRcdFBhc3NpbmcgYSBjdXN0b20gbWV0aG9kIHRvIGxldGdvIGV4ZWN1dGVzIHRoZSBtZXRob2QgYWZ0ZXIgY29uc3VtaW5nIHRoZSBjYWxsYmFja1xuXHRcdFx0YW5kIGFmdGVyIGV4ZWN1dGluZyB0aGUgY2F0Y2hlciBmdW5jdGlvbi4gVGhpcyB3aWxsIHByb3ZpZGUgZm9yIGEgbW9yZVxuXHRcdFx0c3BlY2lmaWMgZmxvdyBvZiBwcm9jZWR1cmVzLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGZsb3cgb2YgdGhlIHByb2NlZHVyZS4gVGhlIG1ldGhvZFxuXHRcdFx0aXMgZXhlY3V0ZWQgb25jZSBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlIHNhdmVkIGZvcmV2ZXIuXG5cblx0XHRBbiBpbnRlcm5hbCBjbGVhbmluZyBtZWNoYW5pc20gYWxsb3dzIHlvdSB0byBjbGVhbiB1cCB0aGUgY2FjaGUgZGF0YS5cblxuXHRcdFRoZSByZXN1bHQgb2YgdGhlIGN1c3RvbSBtZXRob2Qgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGNhY2hlIGlmIGl0IGlzIGdpdmVuLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCIsXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG4vLzogQHN1cHBvcnQtbW9kdWxlOlxuXHQvLzogQHJlZmVyZW5jZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZXZlcnlcblx0QXJyYXkucHJvdG90eXBlLmV2ZXJ5fHwoQXJyYXkucHJvdG90eXBlLmV2ZXJ5PWZ1bmN0aW9uKHIsdCl7XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBlLG47aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkXCIpO1xuXHR2YXIgbz1PYmplY3QodGhpcyksaT1vLmxlbmd0aD4+PjA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yO1xuXHRmb3IoYXJndW1lbnRzLmxlbmd0aD4xJiYoZT10KSxuPTA7aT5uOyl7dmFyIGY7aWYobiBpbiBvKXtmPW9bbl07dmFyIHk9ci5jYWxsKGUsZixuLG8pO1xuXHRpZigheSlyZXR1cm4hMX1uKyt9cmV0dXJuITB9KTtcbi8vOiBAZW5kLXN1cHBvcnQtbW9kdWxlXG5cbi8vOiBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lXG5cdEFycmF5LnByb3RvdHlwZS5zb21lfHwoQXJyYXkucHJvdG90eXBlLnNvbWU9ZnVuY3Rpb24ocil7XCJ1c2Ugc3RyaWN0XCI7XG5cdGlmKG51bGw9PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5zb21lIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yO2Zvcih2YXIgZT1PYmplY3QodGhpcyksdD1lLmxlbmd0aD4+PjAsXG5cdG89YXJndW1lbnRzLmxlbmd0aD49Mj9hcmd1bWVudHNbMV06dm9pZCAwLG49MDt0Pm47bisrKVxuXHRpZihuIGluIGUmJnIuY2FsbChvLGVbbl0sbixlKSlyZXR1cm4hMDtyZXR1cm4hMX0pO1xuLy86IEBlbmQtc3VwcG9ydC1tb2R1bGVcblxuY29uc3QgQ0xFQU5FUiA9IFN5bWJvbCggXCJjbGVhbmVyXCIgKTtcbmNvbnN0IENIRUNLRVIgPSBTeW1ib2woIFwiY2hlY2tlclwiICk7XG5cbmNvbnN0IGxldGdvID0gZnVuY3Rpb24gbGV0Z28oIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgY2FjaGUgPSB7XG5cdFx0WyBDSEVDS0VSIF06IFsgXSxcblx0XHRbIENMRUFORVIgXTogWyBdLFxuXHRcdFwiY2FsbGJhY2tcIjogY2FsbGVkLmJpbmQoIHNlbGYgKSggKVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBjbGVhbmVyLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRjYWNoZVsgQ0xFQU5FUiBdLnB1c2goIGZ1bmN0aW9uIGNsZWFuKCApe1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBjYWNoZSApLmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdGlmKCBuYW1lICE9IFwiY2FsbGJhY2tcIiApe1xuXHRcdFx0XHR0cnl7IGNhY2hlWyBuYW1lIF0gPSB1bmRlZmluZWQ7IH1jYXRjaCggZXJyb3IgKXsgfVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBjaGVja2VyIGlmIGV4ZWN1dGlvbiBoYXMgZmluaXNoZWQuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggZnVuY3Rpb24gY2hlY2soICl7XG5cdFx0cmV0dXJuICggdHJ1bHkoIGNhY2hlLmNhbGxiYWNrICkgJiYgY2FjaGUuY2FsbGJhY2suY2FsbGVkKCApICkgfHwgYXJpZCggY2FjaGVbIENMRUFORVIgXSApO1xuXHR9ICk7XG5cblx0bGV0IGNhdGNoZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBmdW5jdGlvbiBjYXRjaGVyKCBjYWxsYmFjayApe1xuXHRcdGNhY2hlLmNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggY2FsbGJhY2sgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmxlIHVzYWdlIG9mIHRoZSBwYXNzZWQgcGFyYW1ldGVycyBhcyBpbml0aWFsIHZhbHVlcy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0bGV0IHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMgKTtcblx0XHRjYWNoZS5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRJZiB0aGUgbWV0aG9kIGlzIGdpdmVuLCBpdCB3aWxsIGV4ZWN1dGUgdGhlIG1ldGhvZFxuXHRcdFx0XHRcdGFmdGVyIHRoZSBjYXRjaGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC5cblxuXHRcdFx0XHRUaGlzIHdpbGwgcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBjYWNoZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiBwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHREb24ndCBjaGFuZ2UgdGhpcyBzdHJ1Y3R1cmUsIGNhY2hlIHNob3VsZCBjb21lIGZpcnN0LlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gbWV0aG9kLmFwcGx5KCBzZWxmLCBbIGNhY2hlIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRcdGNhY2hlLnJlc3VsdCA9IHJlc3VsdDtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHJldHVybiBjYWNoZS5jYWxsYmFjayggbmV3IEVycm9yKCBgZXJyb3IgZXhlY3V0aW5nIGNhdGNoZXIgY3VzdG9tIG1ldGhvZCwgJHsgZXJyb3IgfWAgKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjYWNoZTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgaGVhcnQgb2YgdGhlIGNhdGNoZXItZmxvdyBwcm9jZWR1cmUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJjYWNoZVwiLCBjYWNoZSwgY2F0Y2hlciApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgdG8gcHJldmVudCBpbnRlcm5hbCBtZW1vcnkgbGVha3MuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoIGNsZWFuZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY2xlYW5lciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0Y2FjaGVbIENMRUFORVIgXS5wdXNoKCBjbGVhbmVyICk7XG5cblx0XHRcdHJldHVybiBjYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmKCBhcmlkKCBjYWNoZVsgQ0xFQU5FUiBdICkgKXtcblx0XHRcdHJldHVybiBjYXRjaGVyO1xuXHRcdH1cblxuXHRcdGxldCByZXNldCA9IGRlcGhlciggYXJndW1lbnRzLCBCT09MRUFOLCBmYWxzZSApO1xuXHRcdGlmKCByZXNldCApe1xuXHRcdFx0d2hpbGUoIGZpbGxlZCggY2FjaGVbIENMRUFORVIgXSApICl7XG5cdFx0XHRcdGNhY2hlWyBDTEVBTkVSIF0ucG9wKCApKCApO1xuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSggZmlsbGVkKCBjYWNoZVsgQ0hFQ0tFUiBdICkgKXtcblx0XHRcdFx0Y2FjaGVbIENIRUNLRVIgXS5wb3AoICk7XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdGNhY2hlWyBDTEVBTkVSIF0uZm9yRWFjaCggKCBjbGVhbmVyICkgPT4geyBjbGVhbmVyKCApOyB9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhdGNoZXI7XG5cdH0sIGNhdGNoZXIgKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcmVnaXN0ZXIgY2hlY2tlciBhbmQgY2hlY2sgaWYgdGhlIGNhdGNoZXIgaXMgYWxyZWFkeSBkb25lLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRoYXJkZW4oIFwiZG9uZVwiLCBmdW5jdGlvbiBkb25lKCBjaGVja2VyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNoZWNrZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggY2hlY2tlciApO1xuXG5cdFx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRJZiB0aGUgY2hlY2tlcnMgYXJlIGVtcHR5IGl0IG1lYW5zIHRoZSBjYXRjaGVyIGhhcyBiZWVuIHJlc2V0LlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggYXJpZCggY2FjaGVbIENIRUNLRVIgXSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgc3RyaWN0ID0gZGVwaGVyKCBhcmd1bWVudHMsIEJPT0xFQU4sIGZhbHNlICk7XG5cdFx0aWYoIHN0cmljdCApe1xuXHRcdFx0cmV0dXJuIGNhY2hlWyBDSEVDS0VSIF0uZXZlcnkoICggY2hlY2tlciApID0+IHsgcmV0dXJuIGNoZWNrZXIoICk7IH0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGNhY2hlWyBDSEVDS0VSIF0uc29tZSggKCBjaGVja2VyICkgPT4geyByZXR1cm4gY2hlY2tlciggKTsgfSApO1xuXHRcdH1cblxuXHR9LCBjYXRjaGVyICk7XG5cblx0cmV0dXJuIGNhdGNoZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxldGdvO1xuIl19
