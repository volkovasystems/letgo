"use strict";

/*;
              	@submodule-license:
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
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "letgo",
              			"path": "letgo/catcher.module.js",
              			"file": "catcher.module.js",
              			"module": "letgo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/letgo.git",
              			"test": "letgo-test.js",
              			"global": false
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Catcher class factory for handling catcher-flow procedure.
              
              		Later method will be executed once, and all callbacks will be executed once.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"asea": "asea",
              			"backd": "backd",
              			"called": "called",
              			"diatom": "diatom",
              			"edo": "edo",
              			"execd": "execd",
              			"falzy": "falzy",
              			"heredito": "heredito",
              			"kein": "kein",
              			"protype": "protype",
              			"raze": "raze",
              			"shft": "shft",
              			"statis": "statis",
              			"stringe": "stringe",
              			"symbiote": "symbiote",
              			"truly": "truly",
              			"zelf": "zelf"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var asea = require("asea");
var backd = require("backd");
var called = require("called");
var diatom = require("diatom");
var edo = require("edo");
var execd = require("execd");
var falzy = require("falzy");
var heredito = require("heredito");
var kein = require("kein");
var protype = require("protype");
var raze = require("raze");
var shft = require("shft");
var statis = require("statis");
var stringe = require("stringe");
var symbiote = require("symbiote");
var truly = require("truly");
var zelf = require("zelf");

var CACHE = (0, _symbol2.default)("cache");
var CALLBACK = (0, _symbol2.default)("callback");
var DEFER = (0, _symbol2.default)("defer");
var EVENT = (0, _symbol2.default)("event");
var INSTANCE = (0, _symbol2.default)("instance");
var RESULT = (0, _symbol2.default)("result");
var STOPPED = (0, _symbol2.default)("stopped");

var catcher = function catcher(method) {
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

	var context = zelf(this);

	if (truly(method)) {
		method = called.bind(context)(method);
	}

	var Catcher = diatom("Catcher");

	/*;
                                  	@note:
                                  		We should create an instance of the Event here.
                                  	@end-note
                                  */
	var event = edo.bind(context)()();

	statis(Catcher).
	attach(EVENT, event).
	attach(CACHE, {}).
	implement("done", function done() {
		if (!kein(INSTANCE, this)) {
			return false;
		}

		return this[INSTANCE].done();
	}).
	implement("release", function release() {
		if (!kein(INSTANCE, this)) {
			throw new Error("cannot release inactive catcher");
		}

		return this[INSTANCE].release();
	}).
	implement("record", function record(result) {
		/*;
                                              	@meta-configuration:
                                              		{
                                              			"result:required": "*"
                                              		}
                                              	@end-meta-configuration
                                              */

		if (!kein(INSTANCE, this)) {
			throw new Error("cannot record result on inactive catcher");
		}

		return this[INSTANCE].record(result);
	}).
	implement("pass", function pass(parameter) {
		/*;
                                             	@meta-configuration:
                                             		{
                                             			"parameter:required": "..."
                                             		}
                                             	@end-meta-configuration
                                             */

		parameter = raze(arguments);

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].pass.apply(this[INSTANCE], parameter);
		}

		this.emit.apply(context, ["pass:catcher"].concat(parameter));

		return this;
	}).
	implement("stop", function stop() {
		if (kein(INSTANCE, this)) {
			this.release();
		}

		this.emit("release");
		this.flush();

		return this;
	}).
	implement("set", function set(property, value) {
		/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"property:required": [
                                                 				"number",
                                                 				"string",
                                                 				"symbol"
                                                 			],
                                                 			"value": "*"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

		if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
			throw new Error("invalid property");
		}

		this[CACHE][property] = value;

		return this;
	}).
	implement("get", function get(property) {
		/*;
                                          	@meta-configuration:
                                          		{
                                          			"property:required": [
                                          				"number",
                                          				"string",
                                          				"symbol"
                                          			]
                                          		}
                                          	@end-meta-configuration
                                          */

		if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
			throw new Error("invalid property");
		}

		return this[CACHE][property];
	}).
	implement("lastly", function lastly(callback) {
		/*;
                                                	@meta-configuration:
                                                		{
                                                			"callback:required": "function"
                                                		}
                                                	@end-meta-configuration
                                                */

		if (falzy(callback) || !protype(callback, FUNCTION)) {
			throw new Error("invalid callback");
		}

		this.once("lastly", callback);

		return this;
	}).
	merge(event);

	/*;
               	@note:
               		These methods should not be accessible outside through the catcher.
               	@end-note
               */
	var push = function push(callback) {
		/*;
                                     	@meta-configuration:
                                     		{
                                     			"callback": "function"
                                     		}
                                     	@end-meta-configuration
                                     */

		if (falzy(callback) || !protype(callback, FUNCTION)) {
			throw new Error("invalid callback");
		}

		this[CALLBACK].push(backd.bind(context)(callback));

		return this;
	};

	var next = function next(error, result, parameter) {
		/*;
                                                     	@meta-configuration:
                                                     		{
                                                     			"error": Error,
                                                     			"result:required": "*",
                                                     			"parameter": "..."
                                                     		}
                                                     	@end-meta-configuration
                                                     */
		if (error instanceof Error && protype(this[DEFER], FUNCTION)) {
			this[DEFER](error);
		}

		var callback = this[CALLBACK].splice(0, 1).pop();

		if (falzy(callback)) {
			this.emit("lastly");

			return result;
		}

		try {
			/*;
       	@note:
       		If the method intentionally calls the callback without parameters
       			then it halts the chain.
       	@end-note
       */
			if (arid(arguments)) {
				result = callback.call(context);

				flush.bind(this)();

				return result;

			} else {
				parameter = shft(arguments, 2);

				result = callback.apply(context, [error, result].concat(parameter));
			}

		} catch (issue) {
			error = issue;

			result = undefined;
		}

		if (result instanceof Error) {
			error = result;

			result = undefined;
		}

		/*;
    	@note:
    		The result of the last callback is passed on the next callback.
    			If the callback encounters an error, it is up for the next callback
    			to continue the chain or halts the chain.
    	@end-note
    */

		if (!(result instanceof Catcher)) {
			next.apply(this, [error, result].concat(parameter));
		}

		return result;
	};

	var flow = function flow(parameter) {
		/*;
                                      	@meta-configuration:
                                      		{
                                      			"parameter": "..."
                                      		}
                                      	@end-meta-configuration
                                      */

		parameter = raze(arguments);

		this.set("parameter", parameter);

		if (falzy(method)) {
			return this;
		}

		try {
			if (asea.server) {
				process.nextTick(function later() {var
					self = this.self,context = this.context,parameter = this.parameter,method = this.method,next = this.next;

					self.record(method.apply(context, [
					backd.bind(self)(next)].
					concat(parameter)));

				}.bind({
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"next": next }));


			} else if (asea.client) {
				var timeout = setTimeout(function later() {var
					self = this.self,context = this.context,parameter = this.parameter,method = this.method,next = this.next;

					self.record(method.apply(context, [
					backd.bind(self)(next)].
					concat(parameter)));

					clearTimeout(timeout);

				}.bind({
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"next": next }));

			}

			return this;

		} catch (error) {
			throw new Error("failed flow method, " + error.stack);
		}
	};

	var flush = function flush() {
		while (this[CALLBACK].length) {this[CALLBACK].pop();}

		return this;
	};

	Catcher.prototype.initialize = function initialize(callback, parameter) {
		/*;
                                                                          	@meta-configuration:
                                                                          		{
                                                                          			"callback:required": "function",
                                                                          			"parameter": "..."
                                                                          		}
                                                                          	@end-meta-configuration
                                                                          */

		if (falzy(callback) || !protype(callback, FUNCTION)) {
			throw new Error("invalid callback");
		}

		parameter = shft(arguments);

		var self = Catcher[INSTANCE] = this;

		this[CALLBACK] = [];

		this[CACHE] = Catcher[CACHE];

		try {
			this.merge(Catcher[EVENT]);

			push.bind(this)(callback);

			flow.apply(this, parameter);

			this.on("pass:catcher", function pass() {
				self.pass.apply(self, raze(arguments));
			});

			this.lastly(function lastly() {
				self.stop();
			});

			return this;

		} catch (error) {
			next.bind(this)(new Error("failed catcher, " + parameter + ", " + error.stack));

		} finally {
			delete this.initialize;
		}
	};

	Catcher.prototype.done = function done() {
		if (truly(method)) {
			return arid(this[CALLBACK]) && execd(method);

		} else {
			return arid(this[CALLBACK]);
		}
	};

	Catcher.prototype.then = function then(callback) {
		/*;
                                                   	@meta-configuration:
                                                   		{
                                                   			"callback:required": "function"
                                                   		}
                                                   	@end-meta-configuration
                                                   */

		if (falzy(callback) || !protype(callback, FUNCTION)) {
			throw new Error("invalid callback");
		}

		push.bind(this)(callback);

		return this;
	};

	Catcher.prototype.pass = function pass(parameter) {
		/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"parameter": "..."
                                                    		}
                                                    	@end-meta-configuration
                                                    */

		next.apply(this, raze(arguments));

		return this;
	};

	Catcher.prototype.defer = function defer(handler, strict) {
		/*;
                                                            	@meta-configuration:
                                                            		{
                                                            			"handler:required": "function",
                                                            			"strict": "boolean"
                                                            		}
                                                            	@end-meta-configuration
                                                            */

		if (kein(DEFER, this)) {
			return this;
		}

		if (falzy(handler) || !protype(handler, FUNCTION)) {
			throw new Error("invalid defer handler");
		}

		if (strict === true) {
			var self = this;

			this[DEFER] = called.bind(context)(function delegate(error) {
				handler.call(this, error);

				flush.bind(self)();

				return this;
			});

		} else {
			this[DEFER] = called.bind(context)(handler);
		}

		return this;
	};

	Catcher.prototype.record = function record(result) {
		/*;
                                                     	@meta-configuration:
                                                     		{
                                                     			"result:required": "*",
                                                     		}
                                                     	@end-meta-configuration
                                                     */

		this[RESULT] = result;

		return this;
	};

	Catcher.prototype.release = function release() {
		flush.bind(this)();

		delete this[CALLBACK];
		delete this[DEFER];

		var result = this[RESULT];
		delete this[RESULT];

		return result;
	};

	Catcher.prototype.stop = function stop() {
		this.release();

		this.emit("release");

		return this;
	};

	Catcher.prototype.result = function result() {
		return this[RESULT];
	};

	Catcher.prototype.set = function set(property, value) {
		/*;
                                                        	@meta-configuration:
                                                        		{
                                                        			"property:required": [
                                                        				"number",
                                                        				"string",
                                                        				"symbol"
                                                        			],
                                                        			"value": "*"
                                                        		}
                                                        	@end-meta-configuration
                                                        */

		if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
			throw new Error("invalid property");
		}

		this[CACHE][property] = value;

		return this;
	};

	Catcher.prototype.get = function get(property) {
		/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"property:required": [
                                                 				"number",
                                                 				"string",
                                                 				"symbol"
                                                 			]
                                                 		}
                                                 	@end-meta-configuration
                                                 */

		if (falzy(property) || !protype(property, NUMBER + STRING + SYMBOL)) {
			throw new Error("invalid property");
		}

		return this[CACHE][property];
	};

	Catcher.prototype.lastly = function lastly(callback) {
		/*;
                                                       	@meta-configuration:
                                                       		{
                                                       			"callback:required": "function"
                                                       		}
                                                       	@end-meta-configuration
                                                       */

		if (falzy(callback) || !protype(callback, FUNCTION)) {
			throw new Error("invalid callback");
		}

		this.once("lastly", callback);

		return this;
	};

	Catcher.prototype.valueOf = function valueOf() {
		return this.result();
	};

	Catcher.prototype.toString = function toString() {
		return stringe(this.result());
	};

	Catcher = heredito(Catcher, edo.bind(context)());

	Catcher = symbiote(Catcher, "Event");

	return Catcher;
};

module.exports = catcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImNhbGxlZCIsImRpYXRvbSIsImVkbyIsImV4ZWNkIiwiZmFsenkiLCJoZXJlZGl0byIsImtlaW4iLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJDYXRjaGVyIiwiZXZlbnQiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJkb25lIiwicmVsZWFzZSIsInJlY29yZCIsInJlc3VsdCIsInBhc3MiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJhcHBseSIsImVtaXQiLCJjb25jYXQiLCJzdG9wIiwiZmx1c2giLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiZ2V0IiwibGFzdGx5IiwiY2FsbGJhY2siLCJvbmNlIiwibWVyZ2UiLCJwdXNoIiwibmV4dCIsImVycm9yIiwic3BsaWNlIiwicG9wIiwiY2FsbCIsImlzc3VlIiwidW5kZWZpbmVkIiwiZmxvdyIsInNlcnZlciIsInByb2Nlc3MiLCJuZXh0VGljayIsImxhdGVyIiwic2VsZiIsImNsaWVudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3RhY2siLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib24iLCJ0aGVuIiwiZGVmZXIiLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7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QVIsQ0FBa0JTLFFBQWxCLEdBQTZCLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEQsU0FBT3pFLFFBQVMsS0FBS3dCLE1BQUwsRUFBVCxDQUFQO0FBQ0EsRUFGRDs7QUFJQVAsV0FBVXZCLFNBQVV1QixPQUFWLEVBQW1CMUIsSUFBSXlCLElBQUosQ0FBVUQsT0FBVixHQUFuQixDQUFWOztBQUVBRSxXQUFVaEIsU0FBVWdCLE9BQVYsRUFBbUIsT0FBbkIsQ0FBVjs7QUFFQSxRQUFPQSxPQUFQO0FBQ0EsQ0EvaEJEOztBQWlpQkF5RCxPQUFPQyxPQUFQLEdBQWlCaEUsT0FBakIiLCJmaWxlIjoiY2F0Y2hlci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibGV0Z28vY2F0Y2hlci5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImNhdGNoZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENhdGNoZXIgY2xhc3MgZmFjdG9yeSBmb3IgaGFuZGxpbmcgY2F0Y2hlci1mbG93IHByb2NlZHVyZS5cblxuXHRcdExhdGVyIG1ldGhvZCB3aWxsIGJlIGV4ZWN1dGVkIG9uY2UsIGFuZCBhbGwgY2FsbGJhY2tzIHdpbGwgYmUgZXhlY3V0ZWQgb25jZS5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYmFja2RcIjogXCJiYWNrZFwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImVkb1wiOiBcImVkb1wiLFxuXHRcdFx0XCJleGVjZFwiOiBcImV4ZWNkXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJzdGF0aXNcIjogXCJzdGF0aXNcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJhY2tkID0gcmVxdWlyZSggXCJiYWNrZFwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZG8gPSByZXF1aXJlKCBcImVkb1wiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHN0YXRpcyA9IHJlcXVpcmUoIFwic3RhdGlzXCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgQ0FDSEUgPSBTeW1ib2woIFwiY2FjaGVcIiApO1xuY29uc3QgQ0FMTEJBQ0sgPSBTeW1ib2woIFwiY2FsbGJhY2tcIiApO1xuY29uc3QgREVGRVIgPSBTeW1ib2woIFwiZGVmZXJcIiApO1xuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSU5TVEFOQ0UgPSBTeW1ib2woIFwiaW5zdGFuY2VcIiApO1xuY29uc3QgUkVTVUxUID0gU3ltYm9sKCBcInJlc3VsdFwiICk7XG5jb25zdCBTVE9QUEVEID0gU3ltYm9sKCBcInN0b3BwZWRcIiApO1xuXG5jb25zdCBjYXRjaGVyID0gZnVuY3Rpb24gY2F0Y2hlciggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGxldCBjb250ZXh0ID0gemVsZiggdGhpcyApO1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgKXtcblx0XHRtZXRob2QgPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBtZXRob2QgKTtcblx0fVxuXG5cdGxldCBDYXRjaGVyID0gZGlhdG9tKCBcIkNhdGNoZXJcIiApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0V2Ugc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgRXZlbnQgaGVyZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IGV2ZW50ID0gZWRvLmJpbmQoIGNvbnRleHQgKSggKSggKTtcblxuXHRzdGF0aXMoIENhdGNoZXIgKVxuXHRcdC5hdHRhY2goIEVWRU5ULCBldmVudCApXG5cdFx0LmF0dGFjaCggQ0FDSEUsIHsgfSApXG5cdFx0LmltcGxlbWVudCggXCJkb25lXCIsIGZ1bmN0aW9uIGRvbmUoICl7XG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5kb25lKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVsZWFzZVwiLCBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHRcdFx0aWYoICFrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcmVsZWFzZSBpbmFjdGl2ZSBjYXRjaGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucmVsZWFzZSggKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlY29yZFwiLCBmdW5jdGlvbiByZWNvcmQoIHJlc3VsdCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWNvcmQgcmVzdWx0IG9uIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWNvcmQoIHJlc3VsdCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicGFzc1wiLCBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyOnJlcXVpcmVkXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucGFzcy5hcHBseSggdGhpc1sgSU5TVEFOQ0UgXSwgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdC5hcHBseSggY29udGV4dCwgWyBcInBhc3M6Y2F0Y2hlclwiIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInN0b3BcIiwgZnVuY3Rpb24gc3RvcCggKXtcblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRoaXMucmVsZWFzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdFx0dGhpcy5mbHVzaCggKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJzZXRcIiwgZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImdldFwiLCBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsYXN0bHlcIiwgZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbmNlKCBcImxhc3RseVwiLCBjYWxsYmFjayApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQubWVyZ2UoIGV2ZW50ICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGVzZSBtZXRob2RzIHNob3VsZCBub3QgYmUgYWNjZXNzaWJsZSBvdXRzaWRlIHRocm91Z2ggdGhlIGNhdGNoZXIuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGxldCBwdXNoID0gZnVuY3Rpb24gcHVzaCggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGxldCBuZXh0ID0gZnVuY3Rpb24gbmV4dCggZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlcnJvclwiOiBFcnJvcixcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblx0XHRpZiggKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICkgJiYgcHJvdHlwZSggdGhpc1sgREVGRVIgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhpc1sgREVGRVIgXSggZXJyb3IgKTtcblx0XHR9XG5cblx0XHRsZXQgY2FsbGJhY2sgPSB0aGlzWyBDQUxMQkFDSyBdLnNwbGljZSggMCwgMSApLnBvcCggKTtcblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSApe1xuXHRcdFx0dGhpcy5lbWl0KCBcImxhc3RseVwiICk7XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBtZXRob2QgaW50ZW50aW9uYWxseSBjYWxscyB0aGUgY2FsbGJhY2sgd2l0aG91dCBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0XHR0aGVuIGl0IGhhbHRzIHRoZSBjaGFpbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoIGFyaWQoIGFyZ3VtZW50cyApICl7XG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoIGNvbnRleHQgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMiApO1xuXG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KCBjb250ZXh0LCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goIGlzc3VlICl7XG5cdFx0XHRlcnJvciA9IGlzc3VlO1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYoIHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRlcnJvciA9IHJlc3VsdDtcblxuXHRcdFx0cmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbGJhY2sgaXMgcGFzc2VkIG9uIHRoZSBuZXh0IGNhbGxiYWNrLlxuXG5cdFx0XHRcdElmIHRoZSBjYWxsYmFjayBlbmNvdW50ZXJzIGFuIGVycm9yLCBpdCBpcyB1cCBmb3IgdGhlIG5leHQgY2FsbGJhY2tcblx0XHRcdFx0XHR0byBjb250aW51ZSB0aGUgY2hhaW4gb3IgaGFsdHMgdGhlIGNoYWluLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggISggcmVzdWx0IGluc3RhbmNlb2YgQ2F0Y2hlciApICl7XG5cdFx0XHRuZXh0LmFwcGx5KCB0aGlzLCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRsZXQgZmxvdyA9IGZ1bmN0aW9uIGZsb3coIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLnNldCggXCJwYXJhbWV0ZXJcIiwgcGFyYW1ldGVyICk7XG5cblx0XHRpZiggZmFsenkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuXHRcdFx0XHR9LmJpbmQoIHtcblx0XHRcdFx0XHRcInNlbGZcIjogdGhpcyxcblx0XHRcdFx0XHRcImNvbnRleHRcIjogY29udGV4dCxcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFx0XHRcdFwibmV4dFwiOiBuZXh0XG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggYGZhaWxlZCBmbG93IG1ldGhvZCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IGZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0d2hpbGUoIHRoaXNbIENBTExCQUNLIF0ubGVuZ3RoICkgdGhpc1sgQ0FMTEJBQ0sgXS5wb3AoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggY2FsbGJhY2ssIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0bGV0IHNlbGYgPSBDYXRjaGVyWyBJTlNUQU5DRSBdID0gdGhpcztcblxuXHRcdHRoaXNbIENBTExCQUNLIF0gPSBbIF07XG5cblx0XHR0aGlzWyBDQUNIRSBdID0gQ2F0Y2hlclsgQ0FDSEUgXTtcblxuXHRcdHRyeXtcblx0XHRcdHRoaXMubWVyZ2UoIENhdGNoZXJbIEVWRU5UIF0gKTtcblxuXHRcdFx0cHVzaC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0XHRcdGZsb3cuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXG5cdFx0XHR0aGlzLm9uKCBcInBhc3M6Y2F0Y2hlclwiLCBmdW5jdGlvbiBwYXNzKCApe1xuXHRcdFx0XHRzZWxmLnBhc3MuYXBwbHkoIHNlbGYsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHRoaXMubGFzdGx5KCBmdW5jdGlvbiBsYXN0bHkoICl7XG5cdFx0XHRcdHNlbGYuc3RvcCggKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRuZXh0LmJpbmQoIHRoaXMgKSggbmV3IEVycm9yKCBgZmFpbGVkIGNhdGNoZXIsICR7IHBhcmFtZXRlciB9LCAkeyBlcnJvci5zdGFjayB9YCApICk7XG5cblx0XHR9ZmluYWxseXtcblx0XHRcdGRlbGV0ZSB0aGlzLmluaXRpYWxpemU7XG5cdFx0fVxuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbiBkb25lKCApe1xuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiBhcmlkKCB0aGlzWyBDQUxMQkFDSyBdICkgJiYgZXhlY2QoIG1ldGhvZCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gdGhlbiggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0cHVzaC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRuZXh0LmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiBkZWZlciggaGFuZGxlciwgc3RyaWN0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInN0cmljdFwiOiBcImJvb2xlYW5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZigga2VpbiggREVGRVIsIHRoaXMgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlZmVyIGhhbmRsZXJcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBzdHJpY3QgPT09IHRydWUgKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGZ1bmN0aW9uIGRlbGVnYXRlKCBlcnJvciApe1xuXHRcdFx0XHRoYW5kbGVyLmNhbGwoIHRoaXMsIGVycm9yICk7XG5cblx0XHRcdFx0Zmx1c2guYmluZCggc2VsZiApKCApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggaGFuZGxlciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlY29yZCA9IGZ1bmN0aW9uIHJlY29yZCggcmVzdWx0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXNbIFJFU1VMVCBdID0gcmVzdWx0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdFx0Zmx1c2guYmluZCggdGhpcyApKCApO1xuXG5cdFx0ZGVsZXRlIHRoaXNbIENBTExCQUNLIF07XG5cdFx0ZGVsZXRlIHRoaXNbIERFRkVSIF07XG5cblx0XHRsZXQgcmVzdWx0ID0gdGhpc1sgUkVTVUxUIF07XG5cdFx0ZGVsZXRlIHRoaXNbIFJFU1VMVCBdO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCggKXtcblx0XHR0aGlzLnJlbGVhc2UoICk7XG5cblx0XHR0aGlzLmVtaXQoIFwicmVsZWFzZVwiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFJFU1VMVCBdO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUubGFzdGx5ID0gZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpcy5yZXN1bHQoICk7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gc3RyaW5nZSggdGhpcy5yZXN1bHQoICkgKTtcblx0fTtcblxuXHRDYXRjaGVyID0gaGVyZWRpdG8oIENhdGNoZXIsIGVkby5iaW5kKCBjb250ZXh0ICkoICkgKTtcblxuXHRDYXRjaGVyID0gc3ltYmlvdGUoIENhdGNoZXIsIFwiRXZlbnRcIiApO1xuXG5cdHJldHVybiBDYXRjaGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYXRjaGVyO1xuIl19
//# sourceMappingURL=catcher.support.js.map
