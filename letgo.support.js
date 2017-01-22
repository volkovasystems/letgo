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
		return truly(cache.callback) && cache.callback.called() || cache[CLEANER].length === 0;
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

		return cache[CHECKER].every(function (checker) {
			return checker();
		});
	}, catcher);

	return catcher;
};

module.exports = letgo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLmpzIl0sIm5hbWVzIjpbImNhbGxlZCIsInJlcXVpcmUiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ2b3VuZCIsInplbGYiLCJBcnJheSIsInByb3RvdHlwZSIsImV2ZXJ5IiwiciIsInQiLCJlIiwibiIsIlR5cGVFcnJvciIsIm8iLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwiZiIsInkiLCJjYWxsIiwiQ0xFQU5FUiIsIkNIRUNLRVIiLCJsZXRnbyIsIm1ldGhvZCIsIkZVTkNUSU9OIiwiRXJyb3IiLCJzZWxmIiwiY2FjaGUiLCJiaW5kIiwicHVzaCIsImNsZWFuIiwiZm9yRWFjaCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJlcnJvciIsImNoZWNrIiwiY2FsbGJhY2siLCJjYXRjaGVyIiwicmVzdWx0IiwicmVsZWFzZSIsImNsZWFuZXIiLCJwb3AiLCJkb25lIiwiY2hlY2tlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjs7QUFFQTtBQUNDO0FBQ0FNLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLEtBQXdCRixNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixHQUFzQixVQUFTQyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUM1RCxLQUFJQyxDQUFKLEVBQU1DLENBQU4sQ0FBUSxJQUFHLFFB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QXpCYSxDQUFkOztBQTJCQTs7Ozs7QUFLQTVCLFFBQVEsT0FBUixFQUFpQjRCLEtBQWpCLEVBQXdCVSxPQUF4Qjs7QUFFQTs7Ozs7QUFLQXRDLFFBQVEsU0FBUixFQUFtQixTQUFTd0MsT0FBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDN0MsTUFBSXhDLFFBQVN3QyxPQUFULEVBQWtCaEIsUUFBbEIsQ0FBSixFQUFrQztBQUNqQ0csU0FBT1AsT0FBUCxFQUFpQlMsSUFBakIsQ0FBdUJXLE9BQXZCOztBQUVBLFVBQU9ILE9BQVA7QUFDQTs7QUFFRCxTQUFPVixNQUFPUCxPQUFQLEVBQWlCTCxNQUF4QixFQUFnQztBQUMvQlksU0FBT1AsT0FBUCxFQUFpQnFCLEdBQWpCO0FBQ0E7O0FBRUQsU0FBT0osT0FBUDtBQUNBLEVBWkQsRUFZR0EsT0FaSDs7QUFjQTs7Ozs7QUFLQXRDLFFBQVEsTUFBUixFQUFnQixTQUFTMkMsSUFBVCxDQUFlQyxPQUFmLEVBQXdCO0FBQ3ZDLE1BQUkzQyxRQUFTMkMsT0FBVCxFQUFrQm5CLFFBQWxCLENBQUosRUFBa0M7QUFDakNHLFNBQU9OLE9BQVAsRUFBaUJRLElBQWpCLENBQXVCYyxPQUF2Qjs7QUFFQSxVQUFPTixPQUFQO0FBQ0E7O0FBRUQsU0FBT1YsTUFBT04sT0FBUCxFQUFpQmYsS0FBakIsQ0FBd0IsVUFBRXFDLE9BQUYsRUFBZTtBQUFFLFVBQU9BLFNBQVA7QUFBb0IsR0FBN0QsQ0FBUDtBQUNBLEVBUkQsRUFRR04sT0FSSDs7QUFVQSxRQUFPQSxPQUFQO0FBQ0EsQ0FqSEQ7O0FBbUhBTyxPQUFPQyxPQUFQLEdBQWlCdkIsS0FBakIiLCJmaWxlIjoibGV0Z28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV0Z29cIixcblx0XHRcdFwicGF0aFwiOiBcImxldGdvL2xldGdvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJsZXRnby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGV0Z28uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsZXRnby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENvbnN0cnVjdCBhIGNhdGNoZXIgZmxvdyBwcm9jZWR1cmUuXG5cblx0XHRUaGlzIHdpbGwgcmV0dXJuIGEgY2F0Y2hlciBmdW5jdGlvbiB3aGljaCBzaG91bGRcblx0XHRcdGJlIHJldHVybmVkIHRvIGNhdGNoIGEgY2FsbGJhY2suXG5cblx0XHRUaGUgY2F0Y2hlciBjb250YWlucyBhIGNhY2hlIHdpdGggdGhlIGNhbGxiYWNrLlxuXG5cdFx0VGhlIGNhdGNoZXIgcmV0dXJucyB0aGUgY2FjaGUgYnkgZGVmYXVsdC5cblxuXHRcdFRoZSBjYWNoZSBjb250YWlucyB0aGUgcmVzdWx0IGFuZCBjYWxsYmFjay5cblxuXHRcdFBhc3NpbmcgYSBjdXN0b20gbWV0aG9kIHRvIGxldGdvIGV4ZWN1dGVzIHRoZSBtZXRob2QgYWZ0ZXIgY29uc3VtaW5nIHRoZSBjYWxsYmFja1xuXHRcdFx0YW5kIGFmdGVyIGV4ZWN1dGluZyB0aGUgY2F0Y2hlciBmdW5jdGlvbi4gVGhpcyB3aWxsIHByb3ZpZGUgZm9yIGEgbW9yZVxuXHRcdFx0c3BlY2lmaWMgZmxvdyBvZiBwcm9jZWR1cmVzLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGZsb3cgb2YgdGhlIHByb2NlZHVyZS4gVGhlIG1ldGhvZFxuXHRcdFx0aXMgZXhlY3V0ZWQgb25jZSBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlIHNhdmVkIGZvcmV2ZXIuXG5cblx0XHRBbiBpbnRlcm5hbCBjbGVhbmluZyBtZWNoYW5pc20gYWxsb3dzIHlvdSB0byBjbGVhbiB1cCB0aGUgY2FjaGUgZGF0YS5cblxuXHRcdFRoZSByZXN1bHQgb2YgdGhlIGN1c3RvbSBtZXRob2Qgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGNhY2hlIGlmIGl0IGlzIGdpdmVuLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwidm91bmRcIjogXCJ2b3VuZFwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiLFxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB2b3VuZCA9IHJlcXVpcmUoIFwidm91bmRcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbi8vOiBAc3VwcG9ydC1tb2R1bGU6XG5cdC8vOiBAcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9ldmVyeVxuXHRBcnJheS5wcm90b3R5cGUuZXZlcnl8fChBcnJheS5wcm90b3R5cGUuZXZlcnk9ZnVuY3Rpb24ocix0KXtcInVzZSBzdHJpY3RcIjtcblx0dmFyIGUsbjtpZihudWxsPT10aGlzKXRocm93IG5ldyBUeXBlRXJyb3IoXCJ0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWRcIik7XG5cdHZhciBvPU9iamVjdCh0aGlzKSxpPW8ubGVuZ3RoPj4+MDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3I7XG5cdGZvcihhcmd1bWVudHMubGVuZ3RoPjEmJihlPXQpLG49MDtpPm47KXt2YXIgZjtpZihuIGluIG8pe2Y9b1tuXTt2YXIgeT1yLmNhbGwoZSxmLG4sbyk7XG5cdGlmKCF5KXJldHVybiExfW4rK31yZXR1cm4hMH0pO1xuLy86IEBlbmQtc3VwcG9ydC1tb2R1bGVcblxuY29uc3QgQ0xFQU5FUiA9IFN5bWJvbCggXCJjbGVhbmVyXCIgKTtcbmNvbnN0IENIRUNLRVIgPSBTeW1ib2woIFwiY2hlY2tlclwiICk7XG5cbmNvbnN0IGxldGdvID0gZnVuY3Rpb24gbGV0Z28oIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgY2FjaGUgPSB7XG5cdFx0WyBDSEVDS0VSIF06IFsgXSxcblx0XHRbIENMRUFORVIgXTogWyBdLFxuXHRcdFwiY2FsbGJhY2tcIjogY2FsbGVkLmJpbmQoIHNlbGYgKSggKVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBjbGVhbmVyLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRjYWNoZVsgQ0xFQU5FUiBdLnB1c2goIGZ1bmN0aW9uIGNsZWFuKCApe1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBjYWNoZSApLmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdGlmKCBuYW1lICE9IFwiY2FsbGJhY2tcIiApe1xuXHRcdFx0XHR0cnl7IGNhY2hlWyBuYW1lIF0gPSB1bmRlZmluZWQ7IH1jYXRjaCggZXJyb3IgKXsgfVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBjaGVja2VyIGlmIGV4ZWN1dGlvbiBoYXMgZmluaXNoZWQuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggZnVuY3Rpb24gY2hlY2soICl7XG5cdFx0cmV0dXJuICggdHJ1bHkoIGNhY2hlLmNhbGxiYWNrICkgJiYgY2FjaGUuY2FsbGJhY2suY2FsbGVkKCApICkgfHxcblx0XHRcdGNhY2hlWyBDTEVBTkVSIF0ubGVuZ3RoID09PSAwO1xuXHR9ICk7XG5cblx0bGV0IGNhdGNoZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBmdW5jdGlvbiBjYXRjaGVyKCBjYWxsYmFjayApe1xuXHRcdGNhY2hlLmNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggY2FsbGJhY2sgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHRoZSBtZXRob2QgaXMgZ2l2ZW4sIGl0IHdpbGwgZXhlY3V0ZSB0aGUgbWV0aG9kXG5cdFx0XHRcdFx0YWZ0ZXIgdGhlIGNhdGNoZXIgZnVuY3Rpb24gaXMgY2FsbGVkLlxuXG5cdFx0XHRcdFRoaXMgd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGluc3RlYWQgb2YgdGhlIGNhY2hlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIHByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdm91bmQoIG1ldGhvZCwgc2VsZiApKCBjYWNoZSApO1xuXG5cdFx0XHRcdGNhY2hlLnJlc3VsdCA9IHJlc3VsdDtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHJldHVybiBjYWNoZS5jYWxsYmFjayggbmV3IEVycm9yKCBgZXJyb3IgZXhlY3V0aW5nIGNhdGNoZXIgY3VzdG9tIG1ldGhvZCwgJHsgZXJyb3IgfWAgKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjYWNoZTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgaGVhcnQgb2YgdGhlIGNhdGNoZXItZmxvdyBwcm9jZWR1cmUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJjYWNoZVwiLCBjYWNoZSwgY2F0Y2hlciApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgdG8gcHJldmVudCBpbnRlcm5hbCBtZW1vcnkgbGVha3MuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoIGNsZWFuZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY2xlYW5lciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0Y2FjaGVbIENMRUFORVIgXS5wdXNoKCBjbGVhbmVyICk7XG5cblx0XHRcdHJldHVybiBjYXRjaGVyO1xuXHRcdH1cblxuXHRcdHdoaWxlKCBjYWNoZVsgQ0xFQU5FUiBdLmxlbmd0aCApe1xuXHRcdFx0Y2FjaGVbIENMRUFORVIgXS5wb3AoICkoICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhdGNoZXI7XG5cdH0sIGNhdGNoZXIgKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcmVnaXN0ZXIgY2hlY2tlciBhbmQgY2hlY2sgaWYgdGhlIGNhdGNoZXIgaXMgYWxyZWFkeSBkb25lLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRoYXJkZW4oIFwiZG9uZVwiLCBmdW5jdGlvbiBkb25lKCBjaGVja2VyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNoZWNrZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggY2hlY2tlciApO1xuXG5cdFx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGVbIENIRUNLRVIgXS5ldmVyeSggKCBjaGVja2VyICkgPT4geyByZXR1cm4gY2hlY2tlciggKTsgfSApO1xuXHR9LCBjYXRjaGVyICk7XG5cblx0cmV0dXJuIGNhdGNoZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxldGdvO1xuIl19
