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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldGdvLnN1cHBvcnQuanMiXSwibmFtZXMiOlsicHJvdHlwZSIsInJlcXVpcmUiLCJ0cnVseSIsInplbGYiLCJjYXRjaGVyIiwibGV0Z28iLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiYmluZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7Ozs7QUFJQTtBQUNBLElBQU1HLFVBQVVILFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7QUFFQSxJQUFNSSxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3JDOzs7Ozs7OztBQVFBLEtBQUlKLE1BQU9JLE1BQVAsS0FBbUIsQ0FBQ04sUUFBU00sTUFBVCxFQUFpQkMsUUFBakIsQ0FBeEIsRUFBcUQ7QUFDcEQsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELFFBQU9KLFFBQVFLLElBQVIsQ0FBY04sS0FBTSxJQUFOLENBQWQsRUFBOEJHLE1BQTlCLENBQVA7QUFDQSxDQWREOztBQWdCQUksT0FBT0MsT0FBUCxHQUFpQk4sS0FBakIiLCJmaWxlIjoibGV0Z28uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibGV0Z28vbGV0Z28ubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJsZXRnby5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV0Z29cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q29uc3RydWN0IGEgY2F0Y2hlciBmbG93IHByb2NlZHVyZS5cblxuXHRcdFRoaXMgd2lsbCByZXR1cm4gYSBjYXRjaGVyIGZ1bmN0aW9uIHdoaWNoIHNob3VsZFxuXHRcdFx0YmUgcmV0dXJuZWQgdG8gY2F0Y2ggYSBjYWxsYmFjay5cblxuXHRcdFBhc3NpbmcgYSBjdXN0b20gbWV0aG9kIHRvIGxldGdvIGV4ZWN1dGVzIHRoZSBtZXRob2QgYWZ0ZXIgY29uc3VtaW5nIHRoZSBjYWxsYmFja1xuXHRcdFx0YW5kIGFmdGVyIGV4ZWN1dGluZyB0aGUgY2F0Y2hlciBmdW5jdGlvbi4gVGhpcyB3aWxsIHByb3ZpZGUgZm9yIGEgbW9yZVxuXHRcdFx0c3BlY2lmaWMgZmxvdyBvZiBwcm9jZWR1cmVzLlxuXG5cdFx0UGFzc2luZyBhIGN1c3RvbSBtZXRob2Qgd2lsbCBjaGFuZ2UgdGhlIGZsb3cgb2YgdGhlIHByb2NlZHVyZS4gVGhlIG1ldGhvZFxuXHRcdFx0aXMgZXhlY3V0ZWQgb25jZSBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlIHNhdmVkIGZvcmV2ZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIixcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGNhdGNoZXIgPSByZXF1aXJlKCBcIi4vY2F0Y2hlci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBsZXRnbyA9IGZ1bmN0aW9uIGxldGdvKCBtZXRob2QgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJtZXRob2RcIjogXCJmdW5jdGlvblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFwcm90eXBlKCBtZXRob2QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtZXRob2RcIiApO1xuXHR9XG5cblx0cmV0dXJuIGNhdGNoZXIuYmluZCggemVsZiggdGhpcyApICkoIG1ldGhvZCApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXRnbztcbiJdfQ==
//# sourceMappingURL=letgo.support.js.map
