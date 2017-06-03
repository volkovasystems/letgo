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
              			"filled": "filled",
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
var filled = require("filled");
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

		if (!(result instanceof Catcher) && filled(this[CALLBACK])) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImNhbGxlZCIsImRpYXRvbSIsImVkbyIsImV4ZWNkIiwiZmFsenkiLCJmaWxsZWQiLCJoZXJlZGl0byIsImtlaW4iLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJDYXRjaGVyIiwiZXZlbnQiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJkb25lIiwicmVsZWFzZSIsInJlY29yZCIsInJlc3VsdCIsInBhc3MiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJhcHBseSIsImVtaXQiLCJjb25jYXQiLCJzdG9wIiwiZmx1c2giLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiZ2V0IiwibGFzdGx5IiwiY2FsbGJhY2siLCJvbmNlIiwibWVyZ2UiLCJwdXNoIiwibmV4dCIsImVycm9yIiwic3BsaWNlIiwicG9wIiwiY2FsbCIsImlzc3VlIiwidW5kZWZpbmVkIiwiZmxvdyIsInNlcnZlciIsInByb2Nlc3MiLCJuZXh0VGljayIsImxhdGVyIiwic2VsZiIsImNsaWVudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3RhY2siLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib24iLCJ0aGVuIiwiZGVmZXIiLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0VBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxNQUFNTCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1NLFFBQVFOLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTU8sUUFBUVAsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUSxTQUFTUixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1TLFdBQVdULFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1VLE9BQU9WLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTVcsVUFBVVgsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTVksT0FBT1osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNYSxPQUFPYixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1jLFNBQVNkLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWUsVUFBVWYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTWdCLFdBQVdoQixRQUFTLFVBQVQsQ0FBakI7QUFDQSxJQUFNaUIsUUFBUWpCLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTWtCLE9BQU9sQixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNbUIsUUFBUSxzQkFBUSxPQUFSLENBQWQ7QUFDQSxJQUFNQyxXQUFXLHNCQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU1DLFFBQVEsc0JBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTUMsV0FBVyxzQkFBUSxVQUFSLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsVUFBVSxTQUFTQSxPQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN6Qzs7Ozs7Ozs7QUFRQSxLQUFJVixNQUFPVSxNQUFQLEtBQW1CLENBQUNoQixRQUFTZ0IsTUFBVCxFQUFpQkMsUUFBakIsQ0FBeEIsRUFBcUQ7QUFDcEQsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlDLFVBQVVaLEtBQU0sSUFBTixDQUFkOztBQUVBLEtBQUlELE1BQU9VLE1BQVAsQ0FBSixFQUFxQjtBQUNwQkEsV0FBU3hCLE9BQU80QixJQUFQLENBQWFELE9BQWIsRUFBd0JILE1BQXhCLENBQVQ7QUFDQTs7QUFFRCxLQUFJSyxVQUFVNUIsT0FBUSxTQUFSLENBQWQ7O0FBRUE7Ozs7O0FBS0EsS0FBSTZCLFFBQVE1QixJQUFJMEIsSUFBSixDQUFVRCxPQUFWLEtBQVo7O0FBRUFoQixRQUFRa0IsT0FBUjtBQUNFRSxPQURGLENBQ1VaLEtBRFYsRUFDaUJXLEtBRGpCO0FBRUVDLE9BRkYsQ0FFVWYsS0FGVixFQUVpQixFQUZqQjtBQUdFZ0IsVUFIRixDQUdhLE1BSGIsRUFHcUIsU0FBU0MsSUFBVCxHQUFnQjtBQUNuQyxNQUFJLENBQUMxQixLQUFNYSxRQUFOLEVBQWdCLElBQWhCLENBQUwsRUFBNkI7QUFDNUIsVUFBTyxLQUFQO0FBQ0E7O0FBRUQsU0FBTyxLQUFNQSxRQUFOLEVBQWlCYSxJQUFqQixFQUFQO0FBQ0EsRUFURjtBQVVFRCxVQVZGLENBVWEsU0FWYixFQVV3QixTQUFTRSxPQUFULEdBQW1CO0FBQ3pDLE1BQUksQ0FBQzNCLEtBQU1hLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBTCxFQUE2QjtBQUM1QixTQUFNLElBQUlNLEtBQUosQ0FBVyxpQ0FBWCxDQUFOO0FBQ0E7O0FBRUQsU0FBTyxLQUFNTixRQUFOLEVBQWlCYyxPQUFqQixFQUFQO0FBQ0EsRUFoQkY7QUFpQkVGLFVBakJGLENBaUJhLFFBakJiLEVBaUJ1QixTQUFTRyxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUM5Qzs7Ozs7Ozs7QUFRQSxNQUFJLENBQUM3QixLQUFNYSxRQUFOLEVBQWdCLElBQWhCLENBQUwsRUFBNkI7QUFDNUIsU0FBTSxJQUFJTSxLQUFKLENBQVcsMENBQVgsQ0FBTjtBQUNBOztBQUVELFNBQU8sS0FBTU4sUUFBTixFQUFpQmUsTUFBakIsQ0FBeUJDLE1BQXpCLENBQVA7QUFDQSxFQS9CRjtBQWdDRUosVUFoQ0YsQ0FnQ2EsTUFoQ2IsRUFnQ3FCLFNBQVNLLElBQVQsQ0FBZUMsU0FBZixFQUEwQjtBQUM3Qzs7Ozs7Ozs7QUFRQUEsY0FBWTdCLEtBQU04QixTQUFOLENBQVo7O0FBRUEsTUFBSWhDLEtBQU1hLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBSixFQUE0QjtBQUMzQixVQUFPLEtBQU1BLFFBQU4sRUFBaUJpQixJQUFqQixDQUFzQkcsS0FBdEIsQ0FBNkIsS0FBTXBCLFFBQU4sQ0FBN0IsRUFBK0NrQixTQUEvQyxDQUFQO0FBQ0E7O0FBRUQsT0FBS0csSUFBTCxDQUFVRCxLQUFWLENBQWlCYixPQUFqQixFQUEwQixDQUFFLGNBQUYsRUFBbUJlLE1BQW5CLENBQTJCSixTQUEzQixDQUExQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQWxERjtBQW1ERU4sVUFuREYsQ0FtRGEsTUFuRGIsRUFtRHFCLFNBQVNXLElBQVQsR0FBZ0I7QUFDbkMsTUFBSXBDLEtBQU1hLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBSixFQUE0QjtBQUMzQixRQUFLYyxPQUFMO0FBQ0E7O0FBRUQsT0FBS08sSUFBTCxDQUFXLFNBQVg7QUFDQSxPQUFLRyxLQUFMOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBNURGO0FBNkRFWixVQTdERixDQTZEYSxLQTdEYixFQTZEb0IsU0FBU2EsR0FBVCxDQUFjQyxRQUFkLEVBQXdCQyxLQUF4QixFQUErQjtBQUNqRDs7Ozs7Ozs7Ozs7OztBQWFBLE1BQUkzQyxNQUFPMEMsUUFBUCxLQUFxQixDQUFDdEMsUUFBU3NDLFFBQVQsRUFBbUJFLFNBQVNDLE1BQVQsR0FBa0JDLE1BQXJDLENBQTFCLEVBQXlFO0FBQ3hFLFNBQU0sSUFBSXhCLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsT0FBTVYsS0FBTixFQUFlOEIsUUFBZixJQUE0QkMsS0FBNUI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFsRkY7QUFtRkVmLFVBbkZGLENBbUZhLEtBbkZiLEVBbUZvQixTQUFTbUIsR0FBVCxDQUFjTCxRQUFkLEVBQXdCO0FBQzFDOzs7Ozs7Ozs7Ozs7QUFZQSxNQUFJMUMsTUFBTzBDLFFBQVAsS0FBcUIsQ0FBQ3RDLFFBQVNzQyxRQUFULEVBQW1CRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFyQyxDQUExQixFQUF5RTtBQUN4RSxTQUFNLElBQUl4QixLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELFNBQU8sS0FBTVYsS0FBTixFQUFlOEIsUUFBZixDQUFQO0FBQ0EsRUFyR0Y7QUFzR0VkLFVBdEdGLENBc0dhLFFBdEdiLEVBc0d1QixTQUFTb0IsTUFBVCxDQUFpQkMsUUFBakIsRUFBMkI7QUFDaEQ7Ozs7Ozs7O0FBUUEsTUFBSWpELE1BQU9pRCxRQUFQLEtBQXFCLENBQUM3QyxRQUFTNkMsUUFBVCxFQUFtQjVCLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFNBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxPQUFLNEIsSUFBTCxDQUFXLFFBQVgsRUFBcUJELFFBQXJCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBdEhGO0FBdUhFRSxNQXZIRixDQXVIU3pCLEtBdkhUOztBQXlIQTs7Ozs7QUFLQSxLQUFJMEIsT0FBTyxTQUFTQSxJQUFULENBQWVILFFBQWYsRUFBeUI7QUFDbkM7Ozs7Ozs7O0FBUUEsTUFBSWpELE1BQU9pRCxRQUFQLEtBQXFCLENBQUM3QyxRQUFTNkMsUUFBVCxFQUFtQjVCLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFNBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxPQUFNVCxRQUFOLEVBQWlCdUMsSUFBakIsQ0FBdUJ6RCxNQUFNNkIsSUFBTixDQUFZRCxPQUFaLEVBQXVCMEIsUUFBdkIsQ0FBdkI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFoQkQ7O0FBa0JBLEtBQUlJLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxLQUFmLEVBQXNCdEIsTUFBdEIsRUFBOEJFLFNBQTlCLEVBQXlDO0FBQ25EOzs7Ozs7Ozs7QUFTQSxNQUFNb0IsaUJBQWlCaEMsS0FBbkIsSUFBOEJsQixRQUFTLEtBQU1VLEtBQU4sQ0FBVCxFQUF3Qk8sUUFBeEIsQ0FBbEMsRUFBc0U7QUFDckUsUUFBTVAsS0FBTixFQUFld0MsS0FBZjtBQUNBOztBQUVELE1BQUlMLFdBQVcsS0FBTXBDLFFBQU4sRUFBaUIwQyxNQUFqQixDQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUFnQ0MsR0FBaEMsRUFBZjs7QUFFQSxNQUFJeEQsTUFBT2lELFFBQVAsQ0FBSixFQUF1QjtBQUN0QixRQUFLWixJQUFMLENBQVcsUUFBWDs7QUFFQSxVQUFPTCxNQUFQO0FBQ0E7O0FBRUQsTUFBRztBQUNGOzs7Ozs7QUFNQSxPQUFJeEMsS0FBTTJDLFNBQU4sQ0FBSixFQUF1QjtBQUN0QkgsYUFBU2lCLFNBQVNRLElBQVQsQ0FBZWxDLE9BQWYsQ0FBVDs7QUFFQWlCLFVBQU1oQixJQUFOLENBQVksSUFBWjs7QUFFQSxXQUFPUSxNQUFQOztBQUVBLElBUEQsTUFPSztBQUNKRSxnQkFBWTVCLEtBQU02QixTQUFOLEVBQWlCLENBQWpCLENBQVo7O0FBRUFILGFBQVNpQixTQUFTYixLQUFULENBQWdCYixPQUFoQixFQUF5QixDQUFFK0IsS0FBRixFQUFTdEIsTUFBVCxFQUFrQk0sTUFBbEIsQ0FBMEJKLFNBQTFCLENBQXpCLENBQVQ7QUFDQTs7QUFFRCxHQXBCRCxDQW9CQyxPQUFPd0IsS0FBUCxFQUFjO0FBQ2RKLFdBQVFJLEtBQVI7O0FBRUExQixZQUFTMkIsU0FBVDtBQUNBOztBQUVELE1BQUkzQixrQkFBa0JWLEtBQXRCLEVBQTZCO0FBQzVCZ0MsV0FBUXRCLE1BQVI7O0FBRUFBLFlBQVMyQixTQUFUO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBUUEsTUFBSSxFQUFHM0Isa0JBQWtCUCxPQUFyQixLQUFrQ3hCLE9BQVEsS0FBTVksUUFBTixDQUFSLENBQXRDLEVBQWtFO0FBQ2pFd0MsUUFBS2pCLEtBQUwsQ0FBWSxJQUFaLEVBQWtCLENBQUVrQixLQUFGLEVBQVN0QixNQUFULEVBQWtCTSxNQUFsQixDQUEwQkosU0FBMUIsQ0FBbEI7QUFDQTs7QUFFRCxTQUFPRixNQUFQO0FBQ0EsRUFuRUQ7O0FBcUVBLEtBQUk0QixPQUFPLFNBQVNBLElBQVQsQ0FBZTFCLFNBQWYsRUFBMEI7QUFDcEM7Ozs7Ozs7O0FBUUFBLGNBQVk3QixLQUFNOEIsU0FBTixDQUFaOztBQUVBLE9BQUtNLEdBQUwsQ0FBVSxXQUFWLEVBQXVCUCxTQUF2Qjs7QUFFQSxNQUFJbEMsTUFBT29CLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFHO0FBQ0YsT0FBSTFCLEtBQUttRSxNQUFULEVBQWlCO0FBQ2hCQyxZQUFRQyxRQUFSLENBQWtCLFNBQVNDLEtBQVQsR0FBaUI7QUFDNUJDLFNBRDRCLEdBQ2UsSUFEZixDQUM1QkEsSUFENEIsQ0FDdEIxQyxPQURzQixHQUNlLElBRGYsQ0FDdEJBLE9BRHNCLENBQ2JXLFNBRGEsR0FDZSxJQURmLENBQ2JBLFNBRGEsQ0FDRmQsTUFERSxHQUNlLElBRGYsQ0FDRkEsTUFERSxDQUNNaUMsSUFETixHQUNlLElBRGYsQ0FDTUEsSUFETjs7QUFHbENZLFVBQUtsQyxNQUFMLENBQWFYLE9BQU9nQixLQUFQLENBQWNiLE9BQWQsRUFBdUI7QUFDbkM1QixXQUFNNkIsSUFBTixDQUFZeUMsSUFBWixFQUFvQlosSUFBcEIsQ0FEbUM7QUFFbENmLFdBRmtDLENBRTFCSixTQUYwQixDQUF2QixDQUFiOztBQUlBLEtBUGlCLENBT2hCVixJQVBnQixDQU9WO0FBQ1AsYUFBUSxJQUREO0FBRVAsZ0JBQVdELE9BRko7QUFHUCxrQkFBYVcsU0FITjtBQUlQLGVBQVVkLE1BSkg7QUFLUCxhQUFRaUMsSUFMRCxFQVBVLENBQWxCOzs7QUFlQSxJQWhCRCxNQWdCTSxJQUFJM0QsS0FBS3dFLE1BQVQsRUFBaUI7QUFDdEIsUUFBSUMsVUFBVUMsV0FBWSxTQUFTSixLQUFULEdBQWlCO0FBQ3BDQyxTQURvQyxHQUNPLElBRFAsQ0FDcENBLElBRG9DLENBQzlCMUMsT0FEOEIsR0FDTyxJQURQLENBQzlCQSxPQUQ4QixDQUNyQlcsU0FEcUIsR0FDTyxJQURQLENBQ3JCQSxTQURxQixDQUNWZCxNQURVLEdBQ08sSUFEUCxDQUNWQSxNQURVLENBQ0ZpQyxJQURFLEdBQ08sSUFEUCxDQUNGQSxJQURFOztBQUcxQ1ksVUFBS2xDLE1BQUwsQ0FBYVgsT0FBT2dCLEtBQVAsQ0FBY2IsT0FBZCxFQUF1QjtBQUNuQzVCLFdBQU02QixJQUFOLENBQVl5QyxJQUFaLEVBQW9CWixJQUFwQixDQURtQztBQUVsQ2YsV0FGa0MsQ0FFMUJKLFNBRjBCLENBQXZCLENBQWI7O0FBSUFtQyxrQkFBY0YsT0FBZDs7QUFFQSxLQVR5QixDQVN4QjNDLElBVHdCLENBU2xCO0FBQ1AsYUFBUSxJQUREO0FBRVAsZ0JBQVdELE9BRko7QUFHUCxrQkFBYVcsU0FITjtBQUlQLGVBQVVkLE1BSkg7QUFLUCxhQUFRaUMsSUFMRCxFQVRrQixDQUFaLENBQWQ7O0FBZ0JBOztBQUVELFVBQU8sSUFBUDs7QUFFQSxHQXRDRCxDQXNDQyxPQUFPQyxLQUFQLEVBQWM7QUFDZCxTQUFNLElBQUloQyxLQUFKLDBCQUFtQ2dDLE1BQU1nQixLQUF6QyxDQUFOO0FBQ0E7QUFDRCxFQTFERDs7QUE0REEsS0FBSTlCLFFBQVEsU0FBU0EsS0FBVCxHQUFpQjtBQUM1QixTQUFPLEtBQU0zQixRQUFOLEVBQWlCMEQsTUFBeEIsR0FBaUMsS0FBTTFELFFBQU4sRUFBaUIyQyxHQUFqQixHQUFqQzs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQUpEOztBQU1BL0IsU0FBUStDLFNBQVIsQ0FBa0JDLFVBQWxCLEdBQStCLFNBQVNBLFVBQVQsQ0FBcUJ4QixRQUFyQixFQUErQmYsU0FBL0IsRUFBMEM7QUFDeEU7Ozs7Ozs7OztBQVNBLE1BQUlsQyxNQUFPaUQsUUFBUCxLQUFxQixDQUFDN0MsUUFBUzZDLFFBQVQsRUFBbUI1QixRQUFuQixDQUExQixFQUF5RDtBQUN4RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRURZLGNBQVk1QixLQUFNNkIsU0FBTixDQUFaOztBQUVBLE1BQUk4QixPQUFPeEMsUUFBU1QsUUFBVCxJQUFzQixJQUFqQzs7QUFFQSxPQUFNSCxRQUFOLElBQW1CLEVBQW5COztBQUVBLE9BQU1ELEtBQU4sSUFBZ0JhLFFBQVNiLEtBQVQsQ0FBaEI7O0FBRUEsTUFBRztBQUNGLFFBQUt1QyxLQUFMLENBQVkxQixRQUFTVixLQUFULENBQVo7O0FBRUFxQyxRQUFLNUIsSUFBTCxDQUFXLElBQVgsRUFBbUJ5QixRQUFuQjs7QUFFQVcsUUFBS3hCLEtBQUwsQ0FBWSxJQUFaLEVBQWtCRixTQUFsQjs7QUFFQSxRQUFLd0MsRUFBTCxDQUFTLGNBQVQsRUFBeUIsU0FBU3pDLElBQVQsR0FBZ0I7QUFDeENnQyxTQUFLaEMsSUFBTCxDQUFVRyxLQUFWLENBQWlCNkIsSUFBakIsRUFBdUI1RCxLQUFNOEIsU0FBTixDQUF2QjtBQUNBLElBRkQ7O0FBSUEsUUFBS2EsTUFBTCxDQUFhLFNBQVNBLE1BQVQsR0FBa0I7QUFDOUJpQixTQUFLMUIsSUFBTDtBQUNBLElBRkQ7O0FBSUEsVUFBTyxJQUFQOztBQUVBLEdBakJELENBaUJDLE9BQU9lLEtBQVAsRUFBYztBQUNkRCxRQUFLN0IsSUFBTCxDQUFXLElBQVgsRUFBbUIsSUFBSUYsS0FBSixzQkFBK0JZLFNBQS9CLFVBQStDb0IsTUFBTWdCLEtBQXJELENBQW5COztBQUVBLEdBcEJELFNBb0JRO0FBQ1AsVUFBTyxLQUFLRyxVQUFaO0FBQ0E7QUFDRCxFQTdDRDs7QUErQ0FoRCxTQUFRK0MsU0FBUixDQUFrQjNDLElBQWxCLEdBQXlCLFNBQVNBLElBQVQsR0FBZ0I7QUFDeEMsTUFBSW5CLE1BQU9VLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixVQUFPNUIsS0FBTSxLQUFNcUIsUUFBTixDQUFOLEtBQTRCZCxNQUFPcUIsTUFBUCxDQUFuQzs7QUFFQSxHQUhELE1BR0s7QUFDSixVQUFPNUIsS0FBTSxLQUFNcUIsUUFBTixDQUFOLENBQVA7QUFDQTtBQUNELEVBUEQ7O0FBU0FZLFNBQVErQyxTQUFSLENBQWtCRyxJQUFsQixHQUF5QixTQUFTQSxJQUFULENBQWUxQixRQUFmLEVBQXlCO0FBQ2pEOzs7Ozs7OztBQVFBLE1BQUlqRCxNQUFPaUQsUUFBUCxLQUFxQixDQUFDN0MsUUFBUzZDLFFBQVQsRUFBbUI1QixRQUFuQixDQUExQixFQUF5RDtBQUN4RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQ4QixPQUFLNUIsSUFBTCxDQUFXLElBQVgsRUFBbUJ5QixRQUFuQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQWhCRDs7QUFrQkF4QixTQUFRK0MsU0FBUixDQUFrQnZDLElBQWxCLEdBQXlCLFNBQVNBLElBQVQsQ0FBZUMsU0FBZixFQUEwQjtBQUNsRDs7Ozs7Ozs7QUFRQW1CLE9BQUtqQixLQUFMLENBQVksSUFBWixFQUFrQi9CLEtBQU04QixTQUFOLENBQWxCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBWkQ7O0FBY0FWLFNBQVErQyxTQUFSLENBQWtCSSxLQUFsQixHQUEwQixTQUFTQSxLQUFULENBQWdCQyxPQUFoQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDMUQ7Ozs7Ozs7OztBQVNBLE1BQUkzRSxLQUFNVyxLQUFOLEVBQWEsSUFBYixDQUFKLEVBQXlCO0FBQ3hCLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUlkLE1BQU82RSxPQUFQLEtBQW9CLENBQUN6RSxRQUFTeUUsT0FBVCxFQUFrQnhELFFBQWxCLENBQXpCLEVBQXVEO0FBQ3RELFNBQU0sSUFBSUMsS0FBSixDQUFXLHVCQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJd0QsV0FBVyxJQUFmLEVBQXFCO0FBQ3BCLE9BQUliLE9BQU8sSUFBWDs7QUFFQSxRQUFNbkQsS0FBTixJQUFnQmxCLE9BQU80QixJQUFQLENBQWFELE9BQWIsRUFBd0IsU0FBU3dELFFBQVQsQ0FBbUJ6QixLQUFuQixFQUEwQjtBQUNqRXVCLFlBQVFwQixJQUFSLENBQWMsSUFBZCxFQUFvQkgsS0FBcEI7O0FBRUFkLFVBQU1oQixJQUFOLENBQVl5QyxJQUFaOztBQUVBLFdBQU8sSUFBUDtBQUNBLElBTmUsQ0FBaEI7O0FBUUEsR0FYRCxNQVdLO0FBQ0osUUFBTW5ELEtBQU4sSUFBZ0JsQixPQUFPNEIsSUFBUCxDQUFhRCxPQUFiLEVBQXdCc0QsT0FBeEIsQ0FBaEI7QUFDQTs7QUFFRCxTQUFPLElBQVA7QUFDQSxFQWxDRDs7QUFvQ0FwRCxTQUFRK0MsU0FBUixDQUFrQnpDLE1BQWxCLEdBQTJCLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ25EOzs7Ozs7OztBQVFBLE9BQU1mLE1BQU4sSUFBaUJlLE1BQWpCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBWkQ7O0FBY0FQLFNBQVErQyxTQUFSLENBQWtCMUMsT0FBbEIsR0FBNEIsU0FBU0EsT0FBVCxHQUFtQjtBQUM5Q1UsUUFBTWhCLElBQU4sQ0FBWSxJQUFaOztBQUVBLFNBQU8sS0FBTVgsUUFBTixDQUFQO0FBQ0EsU0FBTyxLQUFNQyxLQUFOLENBQVA7O0FBRUEsTUFBSWtCLFNBQVMsS0FBTWYsTUFBTixDQUFiO0FBQ0EsU0FBTyxLQUFNQSxNQUFOLENBQVA7O0FBRUEsU0FBT2UsTUFBUDtBQUNBLEVBVkQ7O0FBWUFQLFNBQVErQyxTQUFSLENBQWtCakMsSUFBbEIsR0FBeUIsU0FBU0EsSUFBVCxHQUFnQjtBQUN4QyxPQUFLVCxPQUFMOztBQUVBLE9BQUtPLElBQUwsQ0FBVyxTQUFYOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBTkQ7O0FBUUFaLFNBQVErQyxTQUFSLENBQWtCeEMsTUFBbEIsR0FBMkIsU0FBU0EsTUFBVCxHQUFrQjtBQUM1QyxTQUFPLEtBQU1mLE1BQU4sQ0FBUDtBQUNBLEVBRkQ7O0FBSUFRLFNBQVErQyxTQUFSLENBQWtCL0IsR0FBbEIsR0FBd0IsU0FBU0EsR0FBVCxDQUFjQyxRQUFkLEVBQXdCQyxLQUF4QixFQUErQjtBQUN0RDs7Ozs7Ozs7Ozs7OztBQWFBLE1BQUkzQyxNQUFPMEMsUUFBUCxLQUFxQixDQUFDdEMsUUFBU3NDLFFBQVQsRUFBbUJFLFNBQVNDLE1BQVQsR0FBa0JDLE1BQXJDLENBQTFCLEVBQXlFO0FBQ3hFLFNBQU0sSUFBSXhCLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsT0FBTVYsS0FBTixFQUFlOEIsUUFBZixJQUE0QkMsS0FBNUI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFyQkQ7O0FBdUJBbEIsU0FBUStDLFNBQVIsQ0FBa0J6QixHQUFsQixHQUF3QixTQUFTQSxHQUFULENBQWNMLFFBQWQsRUFBd0I7QUFDL0M7Ozs7Ozs7Ozs7OztBQVlBLE1BQUkxQyxNQUFPMEMsUUFBUCxLQUFxQixDQUFDdEMsUUFBU3NDLFFBQVQsRUFBbUJFLFNBQVNDLE1BQVQsR0FBa0JDLE1BQXJDLENBQTFCLEVBQXlFO0FBQ3hFLFNBQU0sSUFBSXhCLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsU0FBTyxLQUFNVixLQUFOLEVBQWU4QixRQUFmLENBQVA7QUFDQSxFQWxCRDs7QUFvQkFqQixTQUFRK0MsU0FBUixDQUFrQnhCLE1BQWxCLEdBQTJCLFNBQVNBLE1BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCO0FBQ3JEOzs7Ozs7OztBQVFBLE1BQUlqRCxNQUFPaUQsUUFBUCxLQUFxQixDQUFDN0MsUUFBUzZDLFFBQVQsRUFBbUI1QixRQUFuQixDQUExQixFQUF5RDtBQUN4RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsT0FBSzRCLElBQUwsQ0FBVyxRQUFYLEVBQXFCRCxRQUFyQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQWhCRDs7QUFrQkF4QixTQUFRK0MsU0FBUixDQUFrQlEsT0FBbEIsR0FBNEIsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QyxTQUFPLEtBQUtoRCxNQUFMLEVBQVA7QUFDQSxFQUZEOztBQUlBUCxTQUFRK0MsU0FBUixDQUFrQlMsUUFBbEIsR0FBNkIsU0FBU0EsUUFBVCxHQUFvQjtBQUNoRCxTQUFPekUsUUFBUyxLQUFLd0IsTUFBTCxFQUFULENBQVA7QUFDQSxFQUZEOztBQUlBUCxXQUFVdkIsU0FBVXVCLE9BQVYsRUFBbUIzQixJQUFJMEIsSUFBSixDQUFVRCxPQUFWLEdBQW5CLENBQVY7O0FBRUFFLFdBQVVoQixTQUFVZ0IsT0FBVixFQUFtQixPQUFuQixDQUFWOztBQUVBLFFBQU9BLE9BQVA7QUFDQSxDQS9oQkQ7O0FBaWlCQXlELE9BQU9DLE9BQVAsR0FBaUJoRSxPQUFqQiIsImZpbGUiOiJjYXRjaGVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXRnby9jYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2F0Y2hlci5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV0Z29cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xldGdvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibGV0Z28tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2Vcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2F0Y2hlciBjbGFzcyBmYWN0b3J5IGZvciBoYW5kbGluZyBjYXRjaGVyLWZsb3cgcHJvY2VkdXJlLlxuXG5cdFx0TGF0ZXIgbWV0aG9kIHdpbGwgYmUgZXhlY3V0ZWQgb25jZSwgYW5kIGFsbCBjYWxsYmFja3Mgd2lsbCBiZSBleGVjdXRlZCBvbmNlLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJiYWNrZFwiOiBcImJhY2tkXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZWRvXCI6IFwiZWRvXCIsXG5cdFx0XHRcImV4ZWNkXCI6IFwiZXhlY2RcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJzdGF0aXNcIjogXCJzdGF0aXNcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJhY2tkID0gcmVxdWlyZSggXCJiYWNrZFwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZG8gPSByZXF1aXJlKCBcImVkb1wiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHN0YXRpcyA9IHJlcXVpcmUoIFwic3RhdGlzXCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgQ0FDSEUgPSBTeW1ib2woIFwiY2FjaGVcIiApO1xuY29uc3QgQ0FMTEJBQ0sgPSBTeW1ib2woIFwiY2FsbGJhY2tcIiApO1xuY29uc3QgREVGRVIgPSBTeW1ib2woIFwiZGVmZXJcIiApO1xuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSU5TVEFOQ0UgPSBTeW1ib2woIFwiaW5zdGFuY2VcIiApO1xuY29uc3QgUkVTVUxUID0gU3ltYm9sKCBcInJlc3VsdFwiICk7XG5jb25zdCBTVE9QUEVEID0gU3ltYm9sKCBcInN0b3BwZWRcIiApO1xuXG5jb25zdCBjYXRjaGVyID0gZnVuY3Rpb24gY2F0Y2hlciggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGxldCBjb250ZXh0ID0gemVsZiggdGhpcyApO1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgKXtcblx0XHRtZXRob2QgPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBtZXRob2QgKTtcblx0fVxuXG5cdGxldCBDYXRjaGVyID0gZGlhdG9tKCBcIkNhdGNoZXJcIiApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0V2Ugc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgRXZlbnQgaGVyZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IGV2ZW50ID0gZWRvLmJpbmQoIGNvbnRleHQgKSggKSggKTtcblxuXHRzdGF0aXMoIENhdGNoZXIgKVxuXHRcdC5hdHRhY2goIEVWRU5ULCBldmVudCApXG5cdFx0LmF0dGFjaCggQ0FDSEUsIHsgfSApXG5cdFx0LmltcGxlbWVudCggXCJkb25lXCIsIGZ1bmN0aW9uIGRvbmUoICl7XG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5kb25lKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVsZWFzZVwiLCBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHRcdFx0aWYoICFrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcmVsZWFzZSBpbmFjdGl2ZSBjYXRjaGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucmVsZWFzZSggKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlY29yZFwiLCBmdW5jdGlvbiByZWNvcmQoIHJlc3VsdCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWNvcmQgcmVzdWx0IG9uIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWNvcmQoIHJlc3VsdCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicGFzc1wiLCBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyOnJlcXVpcmVkXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucGFzcy5hcHBseSggdGhpc1sgSU5TVEFOQ0UgXSwgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdC5hcHBseSggY29udGV4dCwgWyBcInBhc3M6Y2F0Y2hlclwiIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInN0b3BcIiwgZnVuY3Rpb24gc3RvcCggKXtcblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRoaXMucmVsZWFzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdFx0dGhpcy5mbHVzaCggKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJzZXRcIiwgZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImdldFwiLCBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsYXN0bHlcIiwgZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbmNlKCBcImxhc3RseVwiLCBjYWxsYmFjayApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQubWVyZ2UoIGV2ZW50ICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGVzZSBtZXRob2RzIHNob3VsZCBub3QgYmUgYWNjZXNzaWJsZSBvdXRzaWRlIHRocm91Z2ggdGhlIGNhdGNoZXIuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGxldCBwdXNoID0gZnVuY3Rpb24gcHVzaCggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGxldCBuZXh0ID0gZnVuY3Rpb24gbmV4dCggZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlcnJvclwiOiBFcnJvcixcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblx0XHRpZiggKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICkgJiYgcHJvdHlwZSggdGhpc1sgREVGRVIgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhpc1sgREVGRVIgXSggZXJyb3IgKTtcblx0XHR9XG5cblx0XHRsZXQgY2FsbGJhY2sgPSB0aGlzWyBDQUxMQkFDSyBdLnNwbGljZSggMCwgMSApLnBvcCggKTtcblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSApe1xuXHRcdFx0dGhpcy5lbWl0KCBcImxhc3RseVwiICk7XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBtZXRob2QgaW50ZW50aW9uYWxseSBjYWxscyB0aGUgY2FsbGJhY2sgd2l0aG91dCBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0XHR0aGVuIGl0IGhhbHRzIHRoZSBjaGFpbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoIGFyaWQoIGFyZ3VtZW50cyApICl7XG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoIGNvbnRleHQgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMiApO1xuXG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KCBjb250ZXh0LCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goIGlzc3VlICl7XG5cdFx0XHRlcnJvciA9IGlzc3VlO1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYoIHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRlcnJvciA9IHJlc3VsdDtcblxuXHRcdFx0cmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbGJhY2sgaXMgcGFzc2VkIG9uIHRoZSBuZXh0IGNhbGxiYWNrLlxuXG5cdFx0XHRcdElmIHRoZSBjYWxsYmFjayBlbmNvdW50ZXJzIGFuIGVycm9yLCBpdCBpcyB1cCBmb3IgdGhlIG5leHQgY2FsbGJhY2tcblx0XHRcdFx0XHR0byBjb250aW51ZSB0aGUgY2hhaW4gb3IgaGFsdHMgdGhlIGNoYWluLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggISggcmVzdWx0IGluc3RhbmNlb2YgQ2F0Y2hlciApICYmIGZpbGxlZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRuZXh0LmFwcGx5KCB0aGlzLCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRsZXQgZmxvdyA9IGZ1bmN0aW9uIGZsb3coIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLnNldCggXCJwYXJhbWV0ZXJcIiwgcGFyYW1ldGVyICk7XG5cblx0XHRpZiggZmFsenkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuXHRcdFx0XHR9LmJpbmQoIHtcblx0XHRcdFx0XHRcInNlbGZcIjogdGhpcyxcblx0XHRcdFx0XHRcImNvbnRleHRcIjogY29udGV4dCxcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFx0XHRcdFwibmV4dFwiOiBuZXh0XG5cdFx0XHRcdH0gKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggYGZhaWxlZCBmbG93IG1ldGhvZCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IGZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0d2hpbGUoIHRoaXNbIENBTExCQUNLIF0ubGVuZ3RoICkgdGhpc1sgQ0FMTEJBQ0sgXS5wb3AoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggY2FsbGJhY2ssIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0bGV0IHNlbGYgPSBDYXRjaGVyWyBJTlNUQU5DRSBdID0gdGhpcztcblxuXHRcdHRoaXNbIENBTExCQUNLIF0gPSBbIF07XG5cblx0XHR0aGlzWyBDQUNIRSBdID0gQ2F0Y2hlclsgQ0FDSEUgXTtcblxuXHRcdHRyeXtcblx0XHRcdHRoaXMubWVyZ2UoIENhdGNoZXJbIEVWRU5UIF0gKTtcblxuXHRcdFx0cHVzaC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0XHRcdGZsb3cuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXG5cdFx0XHR0aGlzLm9uKCBcInBhc3M6Y2F0Y2hlclwiLCBmdW5jdGlvbiBwYXNzKCApe1xuXHRcdFx0XHRzZWxmLnBhc3MuYXBwbHkoIHNlbGYsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHRoaXMubGFzdGx5KCBmdW5jdGlvbiBsYXN0bHkoICl7XG5cdFx0XHRcdHNlbGYuc3RvcCggKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRuZXh0LmJpbmQoIHRoaXMgKSggbmV3IEVycm9yKCBgZmFpbGVkIGNhdGNoZXIsICR7IHBhcmFtZXRlciB9LCAkeyBlcnJvci5zdGFjayB9YCApICk7XG5cblx0XHR9ZmluYWxseXtcblx0XHRcdGRlbGV0ZSB0aGlzLmluaXRpYWxpemU7XG5cdFx0fVxuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbiBkb25lKCApe1xuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiBhcmlkKCB0aGlzWyBDQUxMQkFDSyBdICkgJiYgZXhlY2QoIG1ldGhvZCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gdGhlbiggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0cHVzaC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRuZXh0LmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiBkZWZlciggaGFuZGxlciwgc3RyaWN0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInN0cmljdFwiOiBcImJvb2xlYW5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZigga2VpbiggREVGRVIsIHRoaXMgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlZmVyIGhhbmRsZXJcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBzdHJpY3QgPT09IHRydWUgKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGZ1bmN0aW9uIGRlbGVnYXRlKCBlcnJvciApe1xuXHRcdFx0XHRoYW5kbGVyLmNhbGwoIHRoaXMsIGVycm9yICk7XG5cblx0XHRcdFx0Zmx1c2guYmluZCggc2VsZiApKCApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggaGFuZGxlciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlY29yZCA9IGZ1bmN0aW9uIHJlY29yZCggcmVzdWx0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHRoaXNbIFJFU1VMVCBdID0gcmVzdWx0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdFx0Zmx1c2guYmluZCggdGhpcyApKCApO1xuXG5cdFx0ZGVsZXRlIHRoaXNbIENBTExCQUNLIF07XG5cdFx0ZGVsZXRlIHRoaXNbIERFRkVSIF07XG5cblx0XHRsZXQgcmVzdWx0ID0gdGhpc1sgUkVTVUxUIF07XG5cdFx0ZGVsZXRlIHRoaXNbIFJFU1VMVCBdO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCggKXtcblx0XHR0aGlzLnJlbGVhc2UoICk7XG5cblx0XHR0aGlzLmVtaXQoIFwicmVsZWFzZVwiICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFJFU1VMVCBdO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUubGFzdGx5ID0gZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpcy5yZXN1bHQoICk7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gc3RyaW5nZSggdGhpcy5yZXN1bHQoICkgKTtcblx0fTtcblxuXHRDYXRjaGVyID0gaGVyZWRpdG8oIENhdGNoZXIsIGVkby5iaW5kKCBjb250ZXh0ICkoICkgKTtcblxuXHRDYXRjaGVyID0gc3ltYmlvdGUoIENhdGNoZXIsIFwiRXZlbnRcIiApO1xuXG5cdHJldHVybiBDYXRjaGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYXRjaGVyO1xuIl19
//# sourceMappingURL=catcher.support.js.map
