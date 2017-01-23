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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYnVkZ2UiLCJjYWxsZWQiLCJkZXBoZXIiLCJmaWxsZWQiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ6ZWxmIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJldmVyeSIsInIiLCJ0IiwiZSIsIm4iLCJUeXBlRXJyb3IiLCJvIiwiT2JqZWN0IiwiaSIsImxlbmd0aCIsImFyZ3VtZW50cyIsImYiLCJ5IiwiY2FsbCIsInNvbWUiLCJDTEVBTkVSIiwiQ0hFQ0tFUiIsImxldGdvIiwibWV0aG9kIiwiRlVOQ1RJT04iLCJFcnJvciIsInNlbGYiLCJjYWNoZSIsImJpbmQiLCJwdXNoIiwiY2xlYW4iLCJmb3JFYWNoIiwibmFtZSIsInVuZGVmaW5lZCIsImVycm9yIiwiY2hlY2siLCJjYWxsYmFjayIsImNhdGNoZXIiLCJwYXJhbWV0ZXIiLCJyZXN1bHQiLCJhcHBseSIsImNvbmNhdCIsInJlbGVhc2UiLCJjbGVhbmVyIiwicmVzZXQiLCJCT09MRUFOIiwicG9wIiwiZG9uZSIsImNoZWNrZXIiLCJzdHJpY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0ZBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxTQUFTRixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLFVBQVVOLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxD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QUFDN0IsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSTRCLFNBQVNwRCxPQUFRa0IsU0FBUixFQUFtQjhCLE9BQW5CLEVBQTRCLEtBQTVCLENBQWI7QUFDQSxNQUFJSSxNQUFKLEVBQVk7QUFDWCxVQUFPdEIsTUFBT04sT0FBUCxFQUFpQmhCLEtBQWpCLENBQXdCLFVBQUUyQyxPQUFGLEVBQWU7QUFBRSxXQUFPQSxTQUFQO0FBQW9CLElBQTdELENBQVA7QUFFQSxHQUhELE1BR0s7QUFDSixVQUFPckIsTUFBT04sT0FBUCxFQUFpQkYsSUFBakIsQ0FBdUIsVUFBRTZCLE9BQUYsRUFBZTtBQUFFLFdBQU9BLFNBQVA7QUFBb0IsSUFBNUQsQ0FBUDtBQUNBO0FBRUQsRUF4QkQsRUF3QkdYLE9BeEJIOztBQTBCQSxRQUFPQSxPQUFQO0FBQ0EsQ0EzSkQ7O0FBNkpBYSxPQUFPQyxPQUFQLEdBQWlCN0IsS0FBakIiLCJmaWxlIjoibGV0Z28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV0Z29cIixcblx0XHRcdFwicGF0aFwiOiBcImxldGdvL2xldGdvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJsZXRnby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGV0Z28uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsZXRnby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENvbnN0cnVjdCBhIGNhdGNoZXIgZmxvdyBwcm9jZWR1cmUuXG5cblx0XHRUaGlzIHdpbGwgcmV0dXJuIGEgY2F0Y2hlciBmdW5jdGlvbiB3aGljaCBzaG91bGRcblx0XHRcdGJlIHJldHVybmVkIHRvIGNhdGNoIGEgY2FsbGJhY2suXG5cblx0XHRUaGUgY2F0Y2hlciBjb250YWlucyBhIGNhY2hlIHdpdGggdGhlIGNhbGxiYWNrLlxuXG5cdFx0VGhlIGNhdGNoZXIgcmV0dXJucyB0aGUgY2FjaGUgYnkgZGVmYXVsdC5cblxuXHRcdFRoZSBjYWNoZSBjb250YWlucyB0aGUgcmVzdWx0IGFuZCBjYWxsYmFjay5cblxuXHRcdFBhc3NpbmcgYSBjdXN0b20gbWV0aG9kIHRvIGxldGdvIGV4ZWN1dGVzIHRoZSBtZXRob2QgYWZ0ZXIgY29uc3VtaW5nIHRoZSBjYWxsYmFja1xuXHRcdFx0YW5kIGFmdGVyIGV4ZWN1dGluZyB0aGUgY2F0Y2hlciBmdW5jdGlvbi4gVGhpcyB3aWxsIHByb3ZpZGUgZm9yIGEgbW9yZVxuXHRcdFx0c3BlY2lmaWMgZmxvdyBvZiBwcm9jZWR1cmVzLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGZsb3cgb2YgdGhlIHByb2NlZHVyZS4gVGhlIG1ldGhvZFxuXHRcdFx0aXMgZXhlY3V0ZWQgb25jZSBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlIHNhdmVkIGZvcmV2ZXIuXG5cblx0XHRBbiBpbnRlcm5hbCBjbGVhbmluZyBtZWNoYW5pc20gYWxsb3dzIHlvdSB0byBjbGVhbiB1cCB0aGUgY2FjaGUgZGF0YS5cblxuXHRcdFRoZSByZXN1bHQgb2YgdGhlIGN1c3RvbSBtZXRob2Qgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGNhY2hlIGlmIGl0IGlzIGdpdmVuLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCIsXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG4vLzogQHN1cHBvcnQtbW9kdWxlOlxuXHQvLzogQHJlZmVyZW5jZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZXZlcnlcblx0QXJyYXkucHJvdG90eXBlLmV2ZXJ5fHwoQXJyYXkucHJvdG90eXBlLmV2ZXJ5PWZ1bmN0aW9uKHIsdCl7XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBlLG47aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkXCIpO1xuXHR2YXIgbz1PYmplY3QodGhpcyksaT1vLmxlbmd0aD4+PjA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yO1xuXHRmb3IoYXJndW1lbnRzLmxlbmd0aD4xJiYoZT10KSxuPTA7aT5uOyl7dmFyIGY7aWYobiBpbiBvKXtmPW9bbl07dmFyIHk9ci5jYWxsKGUsZixuLG8pO1xuXHRpZigheSlyZXR1cm4hMX1uKyt9cmV0dXJuITB9KTtcbi8vOiBAZW5kLXN1cHBvcnQtbW9kdWxlXG5cbi8vOiBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lXG5cdEFycmF5LnByb3RvdHlwZS5zb21lfHwoQXJyYXkucHJvdG90eXBlLnNvbWU9ZnVuY3Rpb24ocil7XCJ1c2Ugc3RyaWN0XCI7XG5cdGlmKG51bGw9PXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFycmF5LnByb3RvdHlwZS5zb21lIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZFwiKTtcblx0aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yO2Zvcih2YXIgZT1PYmplY3QodGhpcyksdD1lLmxlbmd0aD4+PjAsXG5cdG89YXJndW1lbnRzLmxlbmd0aD49Mj9hcmd1bWVudHNbMV06dm9pZCAwLG49MDt0Pm47bisrKVxuXHRpZihuIGluIGUmJnIuY2FsbChvLGVbbl0sbixlKSlyZXR1cm4hMDtyZXR1cm4hMX0pO1xuLy86IEBlbmQtc3VwcG9ydC1tb2R1bGVcblxuY29uc3QgQ0xFQU5FUiA9IFN5bWJvbCggXCJjbGVhbmVyXCIgKTtcbmNvbnN0IENIRUNLRVIgPSBTeW1ib2woIFwiY2hlY2tlclwiICk7XG5cbmNvbnN0IGxldGdvID0gZnVuY3Rpb24gbGV0Z28oIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgY2FjaGUgPSB7XG5cdFx0WyBDSEVDS0VSIF06IFsgXSxcblx0XHRbIENMRUFORVIgXTogWyBdLFxuXHRcdFwiY2FsbGJhY2tcIjogY2FsbGVkLmJpbmQoIHNlbGYgKSggKVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBjbGVhbmVyLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRjYWNoZVsgQ0xFQU5FUiBdLnB1c2goIGZ1bmN0aW9uIGNsZWFuKCApe1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBjYWNoZSApLmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdGlmKCBuYW1lICE9IFwiY2FsbGJhY2tcIiApe1xuXHRcdFx0XHR0cnl7IGNhY2hlWyBuYW1lIF0gPSB1bmRlZmluZWQ7IH1jYXRjaCggZXJyb3IgKXsgfVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBjaGVja2VyIGlmIGV4ZWN1dGlvbiBoYXMgZmluaXNoZWQuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggZnVuY3Rpb24gY2hlY2soICl7XG5cdFx0cmV0dXJuICggdHJ1bHkoIGNhY2hlLmNhbGxiYWNrICkgJiYgY2FjaGUuY2FsbGJhY2suY2FsbGVkKCApICkgfHwgYXJpZCggY2FjaGVbIENMRUFORVIgXSApO1xuXHR9ICk7XG5cblx0bGV0IGNhdGNoZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBmdW5jdGlvbiBjYXRjaGVyKCBjYWxsYmFjayApe1xuXHRcdGNhY2hlLmNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggY2FsbGJhY2sgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmxlIHVzYWdlIG9mIHRoZSBwYXNzZWQgcGFyYW1ldGVycyBhcyBpbml0aWFsIHZhbHVlcy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0bGV0IHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMgKTtcblx0XHRjYWNoZS5wYXJhbWV0ZXIgPSBwYXJhbWV0ZXI7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRJZiB0aGUgbWV0aG9kIGlzIGdpdmVuLCBpdCB3aWxsIGV4ZWN1dGUgdGhlIG1ldGhvZFxuXHRcdFx0XHRcdGFmdGVyIHRoZSBjYXRjaGVyIGZ1bmN0aW9uIGlzIGNhbGxlZC5cblxuXHRcdFx0XHRUaGlzIHdpbGwgcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBjYWNoZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiBwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHREb24ndCBjaGFuZ2UgdGhpcyBzdHJ1Y3R1cmUsIGNhY2hlIHNob3VsZCBjb21lIGZpcnN0LlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gbWV0aG9kLmFwcGx5KCBzZWxmLCBbIGNhY2hlIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRcdGNhY2hlLnJlc3VsdCA9IHJlc3VsdDtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHJldHVybiBjYWNoZS5jYWxsYmFjayggbmV3IEVycm9yKCBgZXJyb3IgZXhlY3V0aW5nIGNhdGNoZXIgY3VzdG9tIG1ldGhvZCwgJHsgZXJyb3IgfWAgKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjYWNoZTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgaGVhcnQgb2YgdGhlIGNhdGNoZXItZmxvdyBwcm9jZWR1cmUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJjYWNoZVwiLCBjYWNoZSwgY2F0Y2hlciApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgdG8gcHJldmVudCBpbnRlcm5hbCBtZW1vcnkgbGVha3MuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoIGNsZWFuZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY2xlYW5lciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0Y2FjaGVbIENMRUFORVIgXS5wdXNoKCBjbGVhbmVyICk7XG5cblx0XHRcdHJldHVybiBjYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmKCBhcmlkKCBjYWNoZVsgQ0xFQU5FUiBdICkgKXtcblx0XHRcdHJldHVybiBjYXRjaGVyO1xuXHRcdH1cblxuXHRcdGxldCByZXNldCA9IGRlcGhlciggYXJndW1lbnRzLCBCT09MRUFOLCBmYWxzZSApO1xuXHRcdGlmKCByZXNldCApe1xuXHRcdFx0d2hpbGUoIGZpbGxlZCggY2FjaGVbIENMRUFORVIgXSApICl7XG5cdFx0XHRcdGNhY2hlWyBDTEVBTkVSIF0ucG9wKCApKCApO1xuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSggZmlsbGVkKCBjYWNoZVsgQ0hFQ0tFUiBdICkgKXtcblx0XHRcdFx0Y2FjaGVbIENIRUNLRVIgXS5wb3AoICk7XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdGNhY2hlWyBDTEVBTkVSIF0uZm9yRWFjaCggKCBjbGVhbmVyICkgPT4geyBjbGVhbmVyKCApOyB9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhdGNoZXI7XG5cdH0sIGNhdGNoZXIgKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcmVnaXN0ZXIgY2hlY2tlciBhbmQgY2hlY2sgaWYgdGhlIGNhdGNoZXIgaXMgYWxyZWFkeSBkb25lLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRoYXJkZW4oIFwiZG9uZVwiLCBmdW5jdGlvbiBkb25lKCBjaGVja2VyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNoZWNrZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggY2hlY2tlciApO1xuXG5cdFx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRJZiB0aGUgY2hlY2tlcnMgYXJlIGVtcHR5IGl0IG1lYW5zIHRoZSBjYXRjaGVyIGhhcyBiZWVuIHJlc2V0LlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggYXJpZCggY2FjaGVbIENIRUNLRVIgXSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgc3RyaWN0ID0gZGVwaGVyKCBhcmd1bWVudHMsIEJPT0xFQU4sIGZhbHNlICk7XG5cdFx0aWYoIHN0cmljdCApe1xuXHRcdFx0cmV0dXJuIGNhY2hlWyBDSEVDS0VSIF0uZXZlcnkoICggY2hlY2tlciApID0+IHsgcmV0dXJuIGNoZWNrZXIoICk7IH0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGNhY2hlWyBDSEVDS0VSIF0uc29tZSggKCBjaGVja2VyICkgPT4geyByZXR1cm4gY2hlY2tlciggKTsgfSApO1xuXHRcdH1cblxuXHR9LCBjYXRjaGVyICk7XG5cblx0cmV0dXJuIGNhdGNoZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxldGdvO1xuIl19
