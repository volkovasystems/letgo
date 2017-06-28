"use strict"; /*;
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
              			"path": "letgo/letgo.module.js",
              			"file": "letgo.module.js",
              			"module": "letgo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/letgo.git",
              			"test": "letgo-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Construct a catcher flow procedure.
              
              		This will return a catcher function which should
              			be returned to catch a callback.
              
              		Passing a custom method to letgo executes the method after consuming the callback
              			and after executing the catcher function. This will provide for a more
              			specific flow of procedures.
              
              		Passing a custom method will change the flow of the procedure. The method
              			is executed once and the result will be saved forever.
              	@end-module-documentation
              
              	@include:
              		{
              			"protype": "protype",
              			"truly": "truly",
              			"zelf": "zelf",
              		}
              	@end-include
              */

var protype = require("protype");
var truly = require("truly");
var zelf = require("zelf");



//: @client:
var catcher = require("./catcher.support.js");
//: @end-client

var letgo = function letgo(method) {
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

	return catcher.bind(zelf(this))(method);
};

module.exports = letgo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLnN1cHBvcnQuanMiXSwibmFtZXMiOlsicHJvdHlwZSIsInJlcXVpcmUiLCJ0cnVseSIsInplbGYiLCJjYXRjaGVyIiwibGV0Z28iLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOzs7O0FBSUE7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLHNCQUFULENBQWhCO0FBQ0E7O0FBRUEsSUFBTUksUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUNyQzs7Ozs7Ozs7QUFRQSxLQUFJSixNQUFPSSxNQUFQLEtBQW1CLENBQUNOLFFBQVNNLE1BQVQsRUFBaUJDLFFBQWpCLENBQXhCLEVBQXFEO0FBQ3BELFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPSixRQUFRSyxJQUFSLENBQWNOLEtBQU0sSUFBTixDQUFkLEVBQThCRyxNQUE5QixDQUFQO0FBQ0EsQ0FkRDs7QUFnQkFJLE9BQU9DLE9BQVAsR0FBaUJOLEtBQWpCIiwiZmlsZSI6ImxldGdvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV0Z29cIixcblx0XHRcdFwicGF0aFwiOiBcImxldGdvL2xldGdvLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibGV0Z28ubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q29uc3RydWN0IGEgY2F0Y2hlciBmbG93IHByb2NlZHVyZS5cblxuXHRcdFRoaXMgd2lsbCByZXR1cm4gYSBjYXRjaGVyIGZ1bmN0aW9uIHdoaWNoIHNob3VsZFxuXHRcdFx0YmUgcmV0dXJuZWQgdG8gY2F0Y2ggYSBjYWxsYmFjay5cblxuXHRcdFBhc3NpbmcgYSBjdXN0b20gbWV0aG9kIHRvIGxldGdvIGV4ZWN1dGVzIHRoZSBtZXRob2QgYWZ0ZXIgY29uc3VtaW5nIHRoZSBjYWxsYmFja1xuXHRcdFx0YW5kIGFmdGVyIGV4ZWN1dGluZyB0aGUgY2F0Y2hlciBmdW5jdGlvbi4gVGhpcyB3aWxsIHByb3ZpZGUgZm9yIGEgbW9yZVxuXHRcdFx0c3BlY2lmaWMgZmxvdyBvZiBwcm9jZWR1cmVzLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGZsb3cgb2YgdGhlIHByb2NlZHVyZS4gVGhlIG1ldGhvZFxuXHRcdFx0aXMgZXhlY3V0ZWQgb25jZSBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlIHNhdmVkIGZvcmV2ZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGNhdGNoZXIgPSByZXF1aXJlKCBcIi4vY2F0Y2hlci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBsZXRnbyA9IGZ1bmN0aW9uIGxldGdvKCBtZXRob2QgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2RcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2RcIiApO1xuXHR9XG5cblx0cmV0dXJuIGNhdGNoZXIuYmluZCggemVsZiggdGhpcyApICkoIG1ldGhvZCApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXRnbztcbiJdfQ==
//# sourceMappingURL=letgo.support.js.map
