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
			try {
				cache[name] = undefined;
			} catch (error) {}
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
	});

	return catcher;
};

module.exports = letgo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLmpzIl0sIm5hbWVzIjpbImNhbGxlZCIsInJlcXVpcmUiLCJoYXJkZW4iLCJwcm90eXBlIiwidHJ1bHkiLCJ2b3VuZCIsInplbGYiLCJBcnJheSIsInByb3RvdHlwZSIsImV2ZXJ5IiwiciIsInQiLCJlIiwibiIsIlR5cGVFcnJvciIsIm8iLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwiZiIsInkiLCJjYWxsIiwiQ0xFQU5FUiIsIkNIRUNLRVIiLCJsZXRnbyIsIm1ldGhvZCIsIkZVTkNUSU9OIiwiRXJyb3IiLCJzZWxmIiwiY2FjaGUiLCJiaW5kIiwicHVzaCIsImNsZWFuIiwiZm9yRWFjaCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJlcnJvciIsImNoZWNrIiwiY2FsbGJhY2siLCJjYXRjaGVyIiwicmVzdWx0IiwicmVsZWFzZSIsImNsZWFuZXIiLCJwb3AiLCJkb25lIiwiY2hlY2tlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjs7QUFFQTtBQUNDO0FBQ0FNLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLEtBQXdCRixNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixHQUFzQixVQUFTQyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUM1RCxLQUFJQyxDQUFKLEVBQU1DLENBQU4sQ0FBUSxJQUFHLFFB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T0FBUixFQUFpQjRCLEtBQWpCLEVBQXdCVSxPQUF4Qjs7QUFFQTs7Ozs7QUFLQXRDLFFBQVEsU0FBUixFQUFtQixTQUFTd0MsT0FBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDN0MsTUFBSXhDLFFBQVN3QyxPQUFULEVBQWtCaEIsUUFBbEIsQ0FBSixFQUFrQztBQUNqQ0csU0FBT1AsT0FBUCxFQUFpQlMsSUFBakIsQ0FBdUJXLE9BQXZCOztBQUVBLFVBQU9ILE9BQVA7QUFDQTs7QUFFRCxTQUFPVixNQUFPUCxPQUFQLEVBQWlCTCxNQUF4QixFQUFnQztBQUMvQlksU0FBT1AsT0FBUCxFQUFpQnFCLEdBQWpCO0FBQ0E7O0FBRUQsU0FBT0osT0FBUDtBQUNBLEVBWkQsRUFZR0EsT0FaSDs7QUFjQTs7Ozs7QUFLQXRDLFFBQVEsTUFBUixFQUFnQixTQUFTMkMsSUFBVCxDQUFlQyxPQUFmLEVBQXdCO0FBQ3ZDLE1BQUkzQyxRQUFTMkMsT0FBVCxFQUFrQm5CLFFBQWxCLENBQUosRUFBa0M7QUFDakNHLFNBQU9OLE9BQVAsRUFBaUJRLElBQWpCLENBQXVCYyxPQUF2Qjs7QUFFQSxVQUFPTixPQUFQO0FBQ0E7O0FBRUQsU0FBT1YsTUFBT04sT0FBUCxFQUFpQmYsS0FBakIsQ0FBd0IsVUFBRXFDLE9BQUYsRUFBZTtBQUFFLFVBQU9BLFNBQVA7QUFBb0IsR0FBN0QsQ0FBUDtBQUNBLEVBUkQ7O0FBVUEsUUFBT04sT0FBUDtBQUNBLENBL0dEOztBQWlIQU8sT0FBT0MsT0FBUCxHQUFpQnZCLEtBQWpCIiwiZmlsZSI6ImxldGdvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXRnby9sZXRnby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibGV0Z28uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV0Z29cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xldGdvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibGV0Z28tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDb25zdHJ1Y3QgYSBjYXRjaGVyIGZsb3cgcHJvY2VkdXJlLlxuXG5cdFx0VGhpcyB3aWxsIHJldHVybiBhIGNhdGNoZXIgZnVuY3Rpb24gd2hpY2ggc2hvdWxkXG5cdFx0XHRiZSByZXR1cm5lZCB0byBjYXRjaCBhIGNhbGxiYWNrLlxuXG5cdFx0VGhlIGNhdGNoZXIgY29udGFpbnMgYSBjYWNoZSB3aXRoIHRoZSBjYWxsYmFjay5cblxuXHRcdFRoZSBjYXRjaGVyIHJldHVybnMgdGhlIGNhY2hlIGJ5IGRlZmF1bHQuXG5cblx0XHRUaGUgY2FjaGUgY29udGFpbnMgdGhlIHJlc3VsdCBhbmQgY2FsbGJhY2suXG5cblx0XHRQYXNzaW5nIGEgY3VzdG9tIG1ldGhvZCB0byBsZXRnbyBleGVjdXRlcyB0aGUgbWV0aG9kIGFmdGVyIGNvbnN1bWluZyB0aGUgY2FsbGJhY2tcblx0XHRcdGFuZCBhZnRlciBleGVjdXRpbmcgdGhlIGNhdGNoZXIgZnVuY3Rpb24uIFRoaXMgd2lsbCBwcm92aWRlIGZvciBhIG1vcmVcblx0XHRcdHNwZWNpZmljIGZsb3cgb2YgcHJvY2VkdXJlcy5cblxuXHRcdFBhc3NpbmcgYSBjdXN0b20gbWV0aG9kIHdpbGwgY2hhbmdlIHRoZSBmbG93IG9mIHRoZSBwcm9jZWR1cmUuIFRoZSBtZXRob2Rcblx0XHRcdGlzIGV4ZWN1dGVkIG9uY2UgYW5kIHRoZSByZXN1bHQgd2lsbCBiZSBzYXZlZCBmb3JldmVyLlxuXG5cdFx0QW4gaW50ZXJuYWwgY2xlYW5pbmcgbWVjaGFuaXNtIGFsbG93cyB5b3UgdG8gY2xlYW4gdXAgdGhlIGNhY2hlIGRhdGEuXG5cblx0XHRUaGUgcmVzdWx0IG9mIHRoZSBjdXN0b20gbWV0aG9kIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBjYWNoZSBpZiBpdCBpcyBnaXZlbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInZvdW5kXCI6IFwidm91bmRcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3Qgdm91bmQgPSByZXF1aXJlKCBcInZvdW5kXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG4vLzogQHN1cHBvcnQtbW9kdWxlOlxuXHQvLzogQHJlZmVyZW5jZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZXZlcnlcblx0QXJyYXkucHJvdG90eXBlLmV2ZXJ5fHwoQXJyYXkucHJvdG90eXBlLmV2ZXJ5PWZ1bmN0aW9uKHIsdCl7XCJ1c2Ugc3RyaWN0XCI7XG5cdHZhciBlLG47aWYobnVsbD09dGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhpcyBpcyBudWxsIG9yIG5vdCBkZWZpbmVkXCIpO1xuXHR2YXIgbz1PYmplY3QodGhpcyksaT1vLmxlbmd0aD4+PjA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yO1xuXHRmb3IoYXJndW1lbnRzLmxlbmd0aD4xJiYoZT10KSxuPTA7aT5uOyl7dmFyIGY7aWYobiBpbiBvKXtmPW9bbl07dmFyIHk9ci5jYWxsKGUsZixuLG8pO1xuXHRpZigheSlyZXR1cm4hMX1uKyt9cmV0dXJuITB9KTtcbi8vOiBAZW5kLXN1cHBvcnQtbW9kdWxlXG5cbmNvbnN0IENMRUFORVIgPSBTeW1ib2woIFwiY2xlYW5lclwiICk7XG5jb25zdCBDSEVDS0VSID0gU3ltYm9sKCBcImNoZWNrZXJcIiApO1xuXG5jb25zdCBsZXRnbyA9IGZ1bmN0aW9uIGxldGdvKCBtZXRob2QgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2RcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2RcIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IGNhY2hlID0ge1xuXHRcdFsgQ0hFQ0tFUiBdOiBbIF0sXG5cdFx0WyBDTEVBTkVSIF06IFsgXSxcblx0XHRcImNhbGxiYWNrXCI6IGNhbGxlZC5iaW5kKCBzZWxmICkoIClcblx0fTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgaXMgdGhlIGRlZmF1bHQgY2xlYW5lci5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0Y2FjaGVbIENMRUFORVIgXS5wdXNoKCBmdW5jdGlvbiBjbGVhbiggKXtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggY2FjaGUgKS5mb3JFYWNoKCAoIG5hbWUgKSA9PiB7XG5cdFx0XHR0cnl7IGNhY2hlWyBuYW1lIF0gPSB1bmRlZmluZWQ7IH1jYXRjaCggZXJyb3IgKXsgfVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgZGVmYXVsdCBjaGVja2VyIGlmIGV4ZWN1dGlvbiBoYXMgZmluaXNoZWQuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggZnVuY3Rpb24gY2hlY2soICl7XG5cdFx0cmV0dXJuICggdHJ1bHkoIGNhY2hlLmNhbGxiYWNrICkgJiYgY2FjaGUuY2FsbGJhY2suY2FsbGVkKCApICkgfHxcblx0XHRcdGNhY2hlWyBDTEVBTkVSIF0ubGVuZ3RoID09PSAwO1xuXHR9ICk7XG5cblx0bGV0IGNhdGNoZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBmdW5jdGlvbiBjYXRjaGVyKCBjYWxsYmFjayApe1xuXHRcdGNhY2hlLmNhbGxiYWNrID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggY2FsbGJhY2sgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdElmIHRoZSBtZXRob2QgaXMgZ2l2ZW4sIGl0IHdpbGwgZXhlY3V0ZSB0aGUgbWV0aG9kXG5cdFx0XHRcdFx0YWZ0ZXIgdGhlIGNhdGNoZXIgZnVuY3Rpb24gaXMgY2FsbGVkLlxuXG5cdFx0XHRcdFRoaXMgd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWV0aG9kIGluc3RlYWQgb2YgdGhlIGNhY2hlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIHByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdm91bmQoIG1ldGhvZCwgc2VsZiApKCBjYWNoZSApO1xuXG5cdFx0XHRcdGNhY2hlLnJlc3VsdCA9IHJlc3VsdDtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHJldHVybiBjYWNoZS5jYWxsYmFjayggbmV3IEVycm9yKCBgZXJyb3IgZXhlY3V0aW5nIGNhdGNoZXIgY3VzdG9tIG1ldGhvZCwgJHsgZXJyb3IgfWAgKSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjYWNoZTtcblx0fSApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBpcyB0aGUgaGVhcnQgb2YgdGhlIGNhdGNoZXItZmxvdyBwcm9jZWR1cmUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJjYWNoZVwiLCBjYWNoZSwgY2F0Y2hlciApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgdG8gcHJldmVudCBpbnRlcm5hbCBtZW1vcnkgbGVha3MuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGhhcmRlbiggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoIGNsZWFuZXIgKXtcblx0XHRpZiggcHJvdHlwZSggY2xlYW5lciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0Y2FjaGVbIENMRUFORVIgXS5wdXNoKCBjbGVhbmVyICk7XG5cblx0XHRcdHJldHVybiBjYXRjaGVyO1xuXHRcdH1cblxuXHRcdHdoaWxlKCBjYWNoZVsgQ0xFQU5FUiBdLmxlbmd0aCApe1xuXHRcdFx0Y2FjaGVbIENMRUFORVIgXS5wb3AoICkoICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhdGNoZXI7XG5cdH0sIGNhdGNoZXIgKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcmVnaXN0ZXIgY2hlY2tlciBhbmQgY2hlY2sgaWYgdGhlIGNhdGNoZXIgaXMgYWxyZWFkeSBkb25lLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRoYXJkZW4oIFwiZG9uZVwiLCBmdW5jdGlvbiBkb25lKCBjaGVja2VyICl7XG5cdFx0aWYoIHByb3R5cGUoIGNoZWNrZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdGNhY2hlWyBDSEVDS0VSIF0ucHVzaCggY2hlY2tlciApO1xuXG5cdFx0XHRyZXR1cm4gY2F0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2FjaGVbIENIRUNLRVIgXS5ldmVyeSggKCBjaGVja2VyICkgPT4geyByZXR1cm4gY2hlY2tlciggKTsgfSApO1xuXHR9ICk7XG5cblx0cmV0dXJuIGNhdGNoZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxldGdvO1xuIl19
