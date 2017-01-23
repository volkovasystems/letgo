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
			"vound": "vound",
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
var vound = require("vound");
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
				var result = vound(method, self)(parameter.concat(cache));

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

		if (arid(cache[CHECKER])) {
			return catcher;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYnVkZ2UiLCJjYWxsZWQiLCJkZXBoZXIiLCJmaWxsZWQiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ2b3VuZCIsInplbGYiLCJBcnJheSIsInByb3RvdHlwZSIsImV2ZXJ5IiwiciIsInQiLCJlIiwibiIsIlR5cGVFcnJvciIsIm8iLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwiZiIsInkiLCJjYWxsIiwiQ0xFQU5FUiIsIkNIRUNLRVIiLCJsZXRnbyIsIm1ldGhvZCIsIkZVTkNUSU9OIiwiRXJyb3IiLCJzZWxmIiwiY2FjaGUiLCJiaW5kIiwicHVzaCIsImNsZWFuIiwiZm9yRWFjaCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJlcnJvciIsImNoZWNrIiwiY2FsbGJhY2siLCJjYXRjaGVyIiwicGFyYW1ldGVyIiwicmVzdWx0IiwiY29uY2F0IiwicmVsZWFzZSIsImNsZWFuZXIiLCJyZXNldCIsIkJPT0xFQU4iLCJwb3AiLCJkb25lIiwiY2hlY2tlciIsInN0cmljdCIsInNvbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxVQUFVTixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNTyxRQUFRUCxRQUFTLE9BQVQs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U0FBT1AsT0FBUCxFQUFpQlcsT0FBakIsQ0FBMEIsVUFBRVcsT0FBRixFQUFlO0FBQUVBO0FBQWEsSUFBeEQ7QUFDQTs7QUFFRCxTQUFPTCxPQUFQO0FBQ0EsRUExQkQsRUEwQkdBLE9BMUJIOztBQTRCQTs7Ozs7QUFLQXRDLFFBQVEsTUFBUixFQUFnQixTQUFTK0MsSUFBVCxDQUFlQyxPQUFmLEVBQXdCO0FBQ3ZDLE1BQUkvQyxRQUFTK0MsT0FBVCxFQUFrQnZCLFFBQWxCLENBQUosRUFBa0M7QUFDakNHLFNBQU9OLE9BQVAsRUFBaUJRLElBQWpCLENBQXVCa0IsT0FBdkI7O0FBRUEsVUFBT1YsT0FBUDtBQUNBOztBQUVELE1BQUk1QyxLQUFNa0MsTUFBT04sT0FBUCxDQUFOLENBQUosRUFBOEI7QUFDN0IsVUFBT2dCLE9BQVA7QUFDQTs7QUFFRCxNQUFJVyxTQUFTbkQsT0FBUW1CLFNBQVIsRUFBbUI0QixPQUFuQixFQUE0QixLQUE1QixDQUFiO0FBQ0EsTUFBSUksTUFBSixFQUFZO0FBQ1gsVUFBT3JCLE1BQU9OLE9BQVAsRUFBaUJmLEtBQWpCLENBQXdCLFVBQUV5QyxPQUFGLEVBQWU7QUFBRSxXQUFPQSxTQUFQO0FBQW9CLElBQTdELENBQVA7QUFFQSxHQUhELE1BR0s7QUFDSixVQUFPcEIsTUFBT04sT0FBUCxFQUFpQjRCLElBQWpCLENBQXVCLFVBQUVGLE9BQUYsRUFBZTtBQUFFLFdBQU9BLFNBQVA7QUFBb0IsSUFBNUQsQ0FBUDtBQUNBO0FBRUQsRUFuQkQsRUFtQkdWLE9BbkJIOztBQXFCQSxRQUFPQSxPQUFQO0FBQ0EsQ0FqSkQ7O0FBbUpBYSxPQUFPQyxPQUFQLEdBQWlCN0IsS0FBakIiLCJmaWxlIjoibGV0Z28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV0Z29cIixcblx0XHRcdFwicGF0aFwiOiBcImxldGdvL2xldGdvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJsZXRnby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGV0Z28uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsZXRnby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENvbnN0cnVjdCBhIGNhdGNoZXIgZmxvdyBwcm9jZWR1cmUuXG5cblx0XHRUaGlzIHdpbGwgcmV0dXJuIGEgY2F0Y2hlciBmdW5jdGlvbiB3aGljaCBzaG91bGRcblx0XHRcdGJlIHJldHVybmVkIHRvIGNhdGNoIGEgY2FsbGJhY2suXG5cblx0XHRUaGUgY2F0Y2hlciBjb250YWlucyBhIGNhY2hlIHdpdGggdGhlIGNhbGxiYWNrLlxuXG5cdFx0VGhlIGNhdGNoZXIgcmV0dXJucyB0aGUgY2FjaGUgYnkgZGVmYXVsdC5cblxuXHRcdFRoZSBjYWNoZSBjb250YWlucyB0aGUgcmVzdWx0IGFuZCBjYWxsYmFjay5cblxuXHRcdFBhc3NpbmcgYSBjdXN0b20gbWV0aG9kIHRvIGxldGdvIGV4ZWN1dGVzIHRoZSBtZXRob2QgYWZ0ZXIgY29uc3VtaW5nIHRoZSBjYWxsYmFja1xuXHRcdFx0YW5kIGFmdGVyIGV4ZWN1dGluZyB0aGUgY2F0Y2hlciBmdW5jdGlvbi4gVGhpcyB3aWxsIHByb3ZpZGUgZm9yIGEgbW9yZVxuXHRcdFx0c3BlY2lmaWMgZmxvdyBvZiBwcm9jZWR1cmVzLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGZsb3cgb2YgdGhlIHByb2NlZHVyZS4gVGhlIG1ldGhvZFxuXHRcdFx0aXMgZXhlY3V0ZWQgb25jZSBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlIHNhdmVkIGZvcmV2ZXIuXG5cblx0XHRBbiBpbnRlcm5hbCBjbGVhbmluZyBtZWNoYW5pc20gYWxsb3dzIHlvdSB0byBjbGVhbiB1cCB0aGUgY2FjaGUgZGF0YS5cblxuXHRcdFRoZSByZXN1bHQgb2YgdGhlIGN1c3RvbSBtZXRob2Qgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGNhY2hlIGlmIGl0IGlzIGdpdmVuLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkZXBoZXJcIjogXCJkZXBoZXJcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInZvdW5kXCI6IFwidm91bmRcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3Qgdm91bmQgPSByZXF1aXJlKCBcInZvdW5kXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG4vLzogQHN1cHBvcnQtbW9kdWxlOlxuXHQvLzogQHJlZmVyZW5jZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZXZlcnlcblx0QXJyYXkucHJvdG90eXBlLmV2ZXJ5fHwoQXJyYXkucHJvdG90eXBlLmV2ZXJ5PWZ1bmN0aW9uKHIsdCl7XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBlLG47aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkXCIpO1xuXHR2YXIgbz1PYmplY3QodGhpcyksaT1vLmxlbmd0aD4+PjA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yO1xuXHRmb3IoYXJndW1lbnRzLmxlbmd0aD4xJiYoZT10KSxuPTA7aT5uOyl7dmFyIGY7aWYobiBpbiBvKXtmPW9bbl07dmFyIHk9ci5jYWxsKGUsZixuLG8pO1xuXHRpZigheSlyZXR1cm4hMX1uKyt9cmV0dXJuITB9KTtcbi8vOiBAZW5kLXN1cHBvcnQtbW9kdWxlXG5cbmNvbnN0IENMRUFORVIgPSBTeW1ib2woIFwiY2xlYW5lclwiICk7XG5jb25zdCBDSEVDS0VSID0gU3ltYm9sKCBcImNoZWNrZXJcIiApO1xuXG5jb25zdCBsZXRnbyA9IGZ1bmN0aW9uIGxldGdvKCBtZXRob2QgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2RcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2RcIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IGNhY2hlID0ge1xuXHRcdFsgQ0hFQ0tFUiBdOiBbIF0sXG5cdFx0WyBDTEVBTkVSIF06IFsgXSxcblx0XHRcImNhbGxiYWNrXCI6IGNhbGxlZC5iaW5kKCBzZWxmICkoIClcblx0fTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgaXMgdGhlIGRlZmF1bHQgY2xlYW5lci5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0Y2FjaGVbIENMRUFORVIgXS5wdXNoKCBmdW5jdGlvbiBjbGVhbiggKXtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggY2FjaGUgKS5mb3JFYWNoKCAoIG5hbWUgKSA9PiB7XG5cdFx0XHRpZiggbmFtZSAhPSBcImNhbGxiYWNrXCIgKXtcblx0XHRcdFx0dHJ5eyBjYWNoZVsgbmFtZSBdID0gdW5kZWZpbmVkOyB9Y2F0Y2goIGVycm9yICl7IH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgaXMgdGhlIGRlZmF1bHQgY2hlY2tlciBpZiBleGVjdXRpb24gaGFzIGZpbmlzaGVkLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRjYWNoZVsgQ0hFQ0tFUiBdLnB1c2goIGZ1bmN0aW9uIGNoZWNrKCApe1xuXHRcdHJldHVybiAoIHRydWx5KCBjYWNoZS5jYWxsYmFjayApICYmIGNhY2hlLmNhbGxiYWNrLmNhbGxlZCggKSApIHx8IGFyaWQoIGNhY2hlWyBDTEVBTkVSIF0gKTtcblx0fSApO1xuXG5cdGxldCBjYXRjaGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggZnVuY3Rpb24gY2F0Y2hlciggY2FsbGJhY2sgKXtcblx0XHRjYWNoZS5jYWxsYmFjayA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGNhbGxiYWNrICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJsZSB1c2FnZSBvZiB0aGUgcGFzc2VkIHBhcmFtZXRlcnMgYXMgaW5pdGlhbCB2YWx1ZXMuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGxldCBwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cdFx0Y2FjaGUucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0SWYgdGhlIG1ldGhvZCBpcyBnaXZlbiwgaXQgd2lsbCBleGVjdXRlIHRoZSBtZXRob2Rcblx0XHRcdFx0XHRhZnRlciB0aGUgY2F0Y2hlciBmdW5jdGlvbiBpcyBjYWxsZWQuXG5cblx0XHRcdFx0VGhpcyB3aWxsIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBtZXRob2QgaW5zdGVhZCBvZiB0aGUgY2FjaGUuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGxldCByZXN1bHQgPSB2b3VuZCggbWV0aG9kLCBzZWxmICkoIHBhcmFtZXRlci5jb25jYXQoIGNhY2hlICkgKTtcblxuXHRcdFx0XHRjYWNoZS5yZXN1bHQgPSByZXN1bHQ7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHRyZXR1cm4gY2FjaGUuY2FsbGJhY2soIG5ldyBFcnJvciggYGVycm9yIGV4ZWN1dGluZyBjYXRjaGVyIGN1c3RvbSBtZXRob2QsICR7IGVycm9yIH1gICkgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGU7XG5cdH0gKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgaXMgdGhlIGhlYXJ0IG9mIHRoZSBjYXRjaGVyLWZsb3cgcHJvY2VkdXJlLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRoYXJkZW4oIFwiY2FjaGVcIiwgY2FjaGUsIGNhdGNoZXIgKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgbWV0aG9kIGlzIHByb3ZpZGVkIHRvIHByZXZlbnQgaW50ZXJuYWwgbWVtb3J5IGxlYWtzLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRoYXJkZW4oIFwicmVsZWFzZVwiLCBmdW5jdGlvbiByZWxlYXNlKCBjbGVhbmVyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNsZWFuZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdGNhY2hlWyBDTEVBTkVSIF0ucHVzaCggY2xlYW5lciApO1xuXG5cdFx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0XHR9XG5cblx0XHRpZiggYXJpZCggY2FjaGVbIENMRUFORVIgXSApICl7XG5cdFx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0XHR9XG5cblx0XHRsZXQgcmVzZXQgPSBkZXBoZXIoIGFyZ3VtZW50cywgQk9PTEVBTiwgZmFsc2UgKTtcblx0XHRpZiggcmVzZXQgKXtcblx0XHRcdHdoaWxlKCBmaWxsZWQoIGNhY2hlWyBDTEVBTkVSIF0gKSApe1xuXHRcdFx0XHRjYWNoZVsgQ0xFQU5FUiBdLnBvcCggKSggKTtcblx0XHRcdH1cblxuXHRcdFx0d2hpbGUoIGZpbGxlZCggY2FjaGVbIENIRUNLRVIgXSApICl7XG5cdFx0XHRcdGNhY2hlWyBDSEVDS0VSIF0ucG9wKCApO1xuXHRcdFx0fVxuXG5cdFx0fWVsc2V7XG5cdFx0XHRjYWNoZVsgQ0xFQU5FUiBdLmZvckVhY2goICggY2xlYW5lciApID0+IHsgY2xlYW5lciggKTsgfSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBjYXRjaGVyO1xuXHR9LCBjYXRjaGVyICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHJlZ2lzdGVyIGNoZWNrZXIgYW5kIGNoZWNrIGlmIHRoZSBjYXRjaGVyIGlzIGFscmVhZHkgZG9uZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0aGFyZGVuKCBcImRvbmVcIiwgZnVuY3Rpb24gZG9uZSggY2hlY2tlciApe1xuXHRcdGlmKCBwcm90eXBlKCBjaGVja2VyLCBGVU5DVElPTiApICl7XG5cdFx0XHRjYWNoZVsgQ0hFQ0tFUiBdLnB1c2goIGNoZWNrZXIgKTtcblxuXHRcdFx0cmV0dXJuIGNhdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYoIGFyaWQoIGNhY2hlWyBDSEVDS0VSIF0gKSApe1xuXHRcdFx0cmV0dXJuIGNhdGNoZXI7XG5cdFx0fVxuXG5cdFx0bGV0IHN0cmljdCA9IGRlcGhlciggYXJndW1lbnRzLCBCT09MRUFOLCBmYWxzZSApO1xuXHRcdGlmKCBzdHJpY3QgKXtcblx0XHRcdHJldHVybiBjYWNoZVsgQ0hFQ0tFUiBdLmV2ZXJ5KCAoIGNoZWNrZXIgKSA9PiB7IHJldHVybiBjaGVja2VyKCApOyB9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBjYWNoZVsgQ0hFQ0tFUiBdLnNvbWUoICggY2hlY2tlciApID0+IHsgcmV0dXJuIGNoZWNrZXIoICk7IH0gKTtcblx0XHR9XG5cblx0fSwgY2F0Y2hlciApO1xuXG5cdHJldHVybiBjYXRjaGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXRnbztcbiJdfQ==
