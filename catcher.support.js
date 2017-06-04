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
              			"wichis": "wichis",
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
var wichis = require("wichis");
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
	attach(CALLBACK, []).
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
	implement("push", function push(callback) {
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

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].push(callback);
		}

		this[CALLBACK].push(backd.bind(context)(callback));

		return this;
	}).
	implement("then", function then(callback) {
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

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].then(callback);
		}

		this[CALLBACK].push(backd.bind(context)(callback));

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
			this.set("result", result);

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

				this.set("result", result);

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

		this.set("result", result);

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


			} else {
				throw new Error("cannot determine platform, platform not supported");
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

		parameter = shft(arguments);

		var self = Catcher[INSTANCE] = this;

		this[CALLBACK] = wichis(Catcher[CALLBACK], []);

		this[CACHE] = Catcher[CACHE];

		try {
			this.merge(Catcher[EVENT]);

			if (protype(callback, FUNCTION)) {
				push.bind(this)(callback);
			}

			if (truly(method) && !execd(method)) {
				flow.apply(this, parameter);
			}

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

	Catcher.prototype.push = function push(callback) {
		/*;
                                                   	@meta-configuration:
                                                   		{
                                                   			"callback": "function"
                                                   		}
                                                   	@end-meta-configuration
                                                   */

		if (!kein(CALLBACK, this)) {
			throw new Error("catcher has been released, cannot push callback");
		}

		if (filled(this[CALLBACK])) {
			throw new Error("push callback once, cannot push callback again");
		}

		if (falzy(callback) || !protype(callback, FUNCTION)) {
			throw new Error("invalid callback");
		}

		push.bind(this)(callback);

		return this;
	};

	Catcher.prototype.then = function then(callback) {
		/*;
                                                   	@meta-configuration:
                                                   		{
                                                   			"callback:required": "function"
                                                   		}
                                                   	@end-meta-configuration
                                                   */

		if (!kein(CALLBACK, this)) {
			throw new Error("catcher has been released, cannot push callback");
		}

		if (falzy(method)) {
			throw new Error("empty later method, cannot follow with callback");
		}

		if (execd(method)) {
			throw new Error("later method executed, cannot follow with callback");
		}

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

		parameter = raze(arguments);

		/*;
                               	@note:
                               		Flow the method if not yet called.
                               			It is the developer responsibility to push a callback
                               			before passing flow.
                               	@end-note
                               */

		if (truly(method) && !execd(method)) {
			return flow.apply(this, parameter);
		}

		next.apply(this, parameter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImNhbGxlZCIsImRpYXRvbSIsImVkbyIsImV4ZWNkIiwiZmFsenkiLCJmaWxsZWQiLCJoZXJlZGl0byIsImtlaW4iLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsIndpY2hpcyIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJDYXRjaGVyIiwiZXZlbnQiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJkb25lIiwicmVsZWFzZSIsInJlY29yZCIsInJlc3VsdCIsInBhc3MiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJhcHBseSIsImVtaXQiLCJjb25jYXQiLCJzdG9wIiwiZmx1c2giLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiZ2V0IiwibGFzdGx5IiwiY2FsbGJhY2siLCJvbmNlIiwicHVzaCIsInRoZW4iLCJtZXJnZSIsIm5leHQiLCJlcnJvciIsInNwbGljZSIsInBvcCIsImNhbGwiLCJpc3N1ZSIsInVuZGVmaW5lZCIsImZsb3ciLCJzZXJ2ZXIiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJsYXRlciIsInNlbGYiLCJjbGllbnQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInN0YWNrIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsIm9uIiwiZGVmZXIiLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFB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bUI1QixRQUFuQixDQUExQixFQUF5RDtBQUN4RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsT0FBSzRCLElBQUwsQ0FBVyxRQUFYLEVBQXFCRCxRQUFyQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQWhCRDs7QUFrQkF4QixTQUFRZ0QsU0FBUixDQUFrQk8sT0FBbEIsR0FBNEIsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QyxTQUFPLEtBQUtoRCxNQUFMLEVBQVA7QUFDQSxFQUZEOztBQUlBUCxTQUFRZ0QsU0FBUixDQUFrQlEsUUFBbEIsR0FBNkIsU0FBU0EsUUFBVCxHQUFvQjtBQUNoRCxTQUFPMUUsUUFBUyxLQUFLeUIsTUFBTCxFQUFULENBQVA7QUFDQSxFQUZEOztBQUlBUCxXQUFVeEIsU0FBVXdCLE9BQVYsRUFBbUI1QixJQUFJMkIsSUFBSixDQUFVRCxPQUFWLEdBQW5CLENBQVY7O0FBRUFFLFdBQVVqQixTQUFVaUIsT0FBVixFQUFtQixPQUFuQixDQUFWOztBQUVBLFFBQU9BLE9BQVA7QUFDQSxDQXZvQkQ7O0FBeW9CQXlELE9BQU9DLE9BQVAsR0FBaUJoRSxPQUFqQiIsImZpbGUiOiJjYXRjaGVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXRnby9jYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2F0Y2hlci5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV0Z29cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xldGdvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibGV0Z28tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2Vcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2F0Y2hlciBjbGFzcyBmYWN0b3J5IGZvciBoYW5kbGluZyBjYXRjaGVyLWZsb3cgcHJvY2VkdXJlLlxuXG5cdFx0TGF0ZXIgbWV0aG9kIHdpbGwgYmUgZXhlY3V0ZWQgb25jZSwgYW5kIGFsbCBjYWxsYmFja3Mgd2lsbCBiZSBleGVjdXRlZCBvbmNlLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJiYWNrZFwiOiBcImJhY2tkXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZWRvXCI6IFwiZWRvXCIsXG5cdFx0XHRcImV4ZWNkXCI6IFwiZXhlY2RcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJzdGF0aXNcIjogXCJzdGF0aXNcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcIndpY2hpc1wiOiBcIndpY2hpc1wiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBiYWNrZCA9IHJlcXVpcmUoIFwiYmFja2RcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZWRvID0gcmVxdWlyZSggXCJlZG9cIiApO1xuY29uc3QgZXhlY2QgPSByZXF1aXJlKCBcImV4ZWNkXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCBzdGF0aXMgPSByZXF1aXJlKCBcInN0YXRpc1wiICk7XG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3Qgd2ljaGlzID0gcmVxdWlyZSggXCJ3aWNoaXNcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IENBQ0hFID0gU3ltYm9sKCBcImNhY2hlXCIgKTtcbmNvbnN0IENBTExCQUNLID0gU3ltYm9sKCBcImNhbGxiYWNrXCIgKTtcbmNvbnN0IERFRkVSID0gU3ltYm9sKCBcImRlZmVyXCIgKTtcbmNvbnN0IEVWRU5UID0gU3ltYm9sKCBcImV2ZW50XCIgKTtcbmNvbnN0IElOU1RBTkNFID0gU3ltYm9sKCBcImluc3RhbmNlXCIgKTtcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xuY29uc3QgU1RPUFBFRCA9IFN5bWJvbCggXCJzdG9wcGVkXCIgKTtcblxuY29uc3QgY2F0Y2hlciA9IGZ1bmN0aW9uIGNhdGNoZXIoIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgY29udGV4dCA9IHplbGYoIHRoaXMgKTtcblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0bWV0aG9kID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggbWV0aG9kICk7XG5cdH1cblxuXHRsZXQgQ2F0Y2hlciA9IGRpYXRvbSggXCJDYXRjaGVyXCIgKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFdlIHNob3VsZCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIEV2ZW50IGhlcmUuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGxldCBldmVudCA9IGVkby5iaW5kKCBjb250ZXh0ICkoICkoICk7XG5cblx0c3RhdGlzKCBDYXRjaGVyIClcblx0XHQuYXR0YWNoKCBFVkVOVCwgZXZlbnQgKVxuXHRcdC5hdHRhY2goIENBQ0hFLCB7IH0gKVxuXHRcdC5hdHRhY2goIENBTExCQUNLLCBbIF0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZG9uZVwiLCBmdW5jdGlvbiBkb25lKCApe1xuXHRcdFx0aWYoICFrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0uZG9uZSggKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlbGVhc2VcIiwgZnVuY3Rpb24gcmVsZWFzZSggKXtcblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHJlbGVhc2UgaW5hY3RpdmUgY2F0Y2hlclwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnJlbGVhc2UoICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJyZWNvcmRcIiwgZnVuY3Rpb24gcmVjb3JkKCByZXN1bHQgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICFrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcmVjb3JkIHJlc3VsdCBvbiBpbmFjdGl2ZSBjYXRjaGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucmVjb3JkKCByZXN1bHQgKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInBhc3NcIiwgZnVuY3Rpb24gcGFzcyggcGFyYW1ldGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBcIi4uLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnBhc3MuYXBwbHkoIHRoaXNbIElOU1RBTkNFIF0sIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVtaXQuYXBwbHkoIGNvbnRleHQsIFsgXCJwYXNzOmNhdGNoZXJcIiBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJzdG9wXCIsIGZ1bmN0aW9uIHN0b3AoICl7XG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aGlzLnJlbGVhc2UoICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdCggXCJyZWxlYXNlXCIgKTtcblx0XHRcdHRoaXMuZmx1c2goICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwic2V0XCIsIGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJnZXRcIiwgZnVuY3Rpb24gZ2V0KCBwcm9wZXJ0eSApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwibGFzdGx5XCIsIGZ1bmN0aW9uIGxhc3RseSggY2FsbGJhY2sgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub25jZSggXCJsYXN0bHlcIiwgY2FsbGJhY2sgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJwdXNoXCIsIGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5wdXNoKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInRoZW5cIiwgZnVuY3Rpb24gdGhlbiggY2FsbGJhY2sgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnRoZW4oIGNhbGxiYWNrICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIENBTExCQUNLIF0ucHVzaCggYmFja2QuYmluZCggY29udGV4dCApKCBjYWxsYmFjayApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5tZXJnZSggZXZlbnQgKTtcblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhY2Nlc3NpYmxlIG91dHNpZGUgdGhyb3VnaCB0aGUgY2F0Y2hlci5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IHB1c2ggPSBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0bGV0IG5leHQgPSBmdW5jdGlvbiBuZXh0KCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXHRcdGlmKCAoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKSAmJiBwcm90eXBlKCB0aGlzWyBERUZFUiBdLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aGlzWyBERUZFUiBdKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdGxldCBjYWxsYmFjayA9IHRoaXNbIENBTExCQUNLIF0uc3BsaWNlKCAwLCAxICkucG9wKCApO1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApICl7XG5cdFx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHRcdHRoaXMuZW1pdCggXCJsYXN0bHlcIiApO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB0aGUgbWV0aG9kIGludGVudGlvbmFsbHkgY2FsbHMgdGhlIGNhbGxiYWNrIHdpdGhvdXQgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdFx0dGhlbiBpdCBoYWx0cyB0aGUgY2hhaW4uXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCBhcmlkKCBhcmd1bWVudHMgKSApe1xuXHRcdFx0XHRyZXN1bHQgPSBjYWxsYmFjay5jYWxsKCBjb250ZXh0ICk7XG5cblx0XHRcdFx0Zmx1c2guYmluZCggdGhpcyApKCApO1xuXG5cdFx0XHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzLCAyICk7XG5cblx0XHRcdFx0cmVzdWx0ID0gY2FsbGJhY2suYXBwbHkoIGNvbnRleHQsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHRcdH1cblxuXHRcdH1jYXRjaCggaXNzdWUgKXtcblx0XHRcdGVycm9yID0gaXNzdWU7XG5cblx0XHRcdHJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiggcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdGVycm9yID0gcmVzdWx0O1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0VGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBjYWxsYmFjayBpcyBwYXNzZWQgb24gdGhlIG5leHQgY2FsbGJhY2suXG5cblx0XHRcdFx0SWYgdGhlIGNhbGxiYWNrIGVuY291bnRlcnMgYW4gZXJyb3IsIGl0IGlzIHVwIGZvciB0aGUgbmV4dCBjYWxsYmFja1xuXHRcdFx0XHRcdHRvIGNvbnRpbnVlIHRoZSBjaGFpbiBvciBoYWx0cyB0aGUgY2hhaW4uXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCAhKCByZXN1bHQgaW5zdGFuY2VvZiBDYXRjaGVyICkgJiYgZmlsbGVkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdG5leHQuYXBwbHkoIHRoaXMsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGxldCBmbG93ID0gZnVuY3Rpb24gZmxvdyggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc2V0KCBcInBhcmFtZXRlclwiLCBwYXJhbWV0ZXIgKTtcblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRwcm9jZXNzLm5leHRUaWNrKCBmdW5jdGlvbiBsYXRlciggKXtcblx0XHRcdFx0XHRsZXQgeyBzZWxmLCBjb250ZXh0LCBwYXJhbWV0ZXIsIG1ldGhvZCwgbmV4dCB9ID0gdGhpcztcblxuXHRcdFx0XHRcdHNlbGYucmVjb3JkKCBtZXRob2QuYXBwbHkoIGNvbnRleHQsIFtcblx0XHRcdFx0XHRcdGJhY2tkLmJpbmQoIHNlbGYgKSggbmV4dCApXG5cdFx0XHRcdFx0XS5jb25jYXQoIHBhcmFtZXRlciApICkgKTtcblxuXHRcdFx0XHR9LmJpbmQoIHtcblx0XHRcdFx0XHRcInNlbGZcIjogdGhpcyxcblx0XHRcdFx0XHRcImNvbnRleHRcIjogY29udGV4dCxcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFx0XHRcdFwibmV4dFwiOiBuZXh0XG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiBsYXRlciggKXtcblx0XHRcdFx0XHRsZXQgeyBzZWxmLCBjb250ZXh0LCBwYXJhbWV0ZXIsIG1ldGhvZCwgbmV4dCB9ID0gdGhpcztcblxuXHRcdFx0XHRcdHNlbGYucmVjb3JkKCBtZXRob2QuYXBwbHkoIGNvbnRleHQsIFtcblx0XHRcdFx0XHRcdGJhY2tkLmJpbmQoIHNlbGYgKSggbmV4dCApXG5cdFx0XHRcdFx0XS5jb25jYXQoIHBhcmFtZXRlciApICkgKTtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXG5cdFx0XHRcdH0uYmluZCgge1xuXHRcdFx0XHRcdFwic2VsZlwiOiB0aGlzLFxuXHRcdFx0XHRcdFwiY29udGV4dFwiOiBjb250ZXh0LFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IHBhcmFtZXRlcixcblx0XHRcdFx0XHRcIm1ldGhvZFwiOiBtZXRob2QsXG5cdFx0XHRcdFx0XCJuZXh0XCI6IG5leHRcblx0XHRcdFx0fSApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgZmFpbGVkIGZsb3cgbWV0aG9kLCAkeyBlcnJvci5zdGFjayB9YCApO1xuXHRcdH1cblx0fTtcblxuXHRsZXQgZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCggKXtcblx0XHR3aGlsZSggdGhpc1sgQ0FMTEJBQ0sgXS5sZW5ndGggKSB0aGlzWyBDQUxMQkFDSyBdLnBvcCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCBjYWxsYmFjaywgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGxldCBzZWxmID0gQ2F0Y2hlclsgSU5TVEFOQ0UgXSA9IHRoaXM7XG5cblx0XHR0aGlzWyBDQUxMQkFDSyBdID0gd2ljaGlzKCBDYXRjaGVyWyBDQUxMQkFDSyBdLCBbIF0gKTtcblxuXHRcdHRoaXNbIENBQ0hFIF0gPSBDYXRjaGVyWyBDQUNIRSBdO1xuXG5cdFx0dHJ5e1xuXHRcdFx0dGhpcy5tZXJnZSggQ2F0Y2hlclsgRVZFTlQgXSApO1xuXG5cdFx0XHRpZiggcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0cHVzaC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIWV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0XHRmbG93LmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbiggXCJwYXNzOmNhdGNoZXJcIiwgZnVuY3Rpb24gcGFzcyggKXtcblx0XHRcdFx0c2VsZi5wYXNzLmFwcGx5KCBzZWxmLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHR0aGlzLmxhc3RseSggZnVuY3Rpb24gbGFzdGx5KCApe1xuXHRcdFx0XHRzZWxmLnN0b3AoICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0bmV4dC5iaW5kKCB0aGlzICkoIG5ldyBFcnJvciggYGZhaWxlZCBjYXRjaGVyLCAkeyBwYXJhbWV0ZXIgfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0fWZpbmFsbHl7XG5cdFx0XHRkZWxldGUgdGhpcy5pbml0aWFsaXplO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gZG9uZSggKXtcblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICYmIGV4ZWNkKCBtZXRob2QgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiB0aGVuKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCAha2VpbiggQ0FMTEJBQ0ssIHRoaXMgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhdGNoZXIgaGFzIGJlZW4gcmVsZWFzZWQsIGNhbm5vdCBwdXNoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJsYXRlciBtZXRob2QgZXhlY3V0ZWQsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uIHBhc3MoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRGbG93IHRoZSBtZXRob2QgaWYgbm90IHlldCBjYWxsZWQuXG5cblx0XHRcdFx0SXQgaXMgdGhlIGRldmVsb3BlciByZXNwb25zaWJpbGl0eSB0byBwdXNoIGEgY2FsbGJhY2tcblx0XHRcdFx0XHRiZWZvcmUgcGFzc2luZyBmbG93LlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiBmbG93LmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblx0XHR9XG5cblx0XHRuZXh0LmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmRlZmVyID0gZnVuY3Rpb24gZGVmZXIoIGhhbmRsZXIsIHN0cmljdCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJzdHJpY3RcIjogXCJib29sZWFuXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGtlaW4oIERFRkVSLCB0aGlzICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBkZWZlciBoYW5kbGVyXCIgKTtcblx0XHR9XG5cblx0XHRpZiggc3RyaWN0ID09PSB0cnVlICl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBmdW5jdGlvbiBkZWxlZ2F0ZSggZXJyb3IgKXtcblx0XHRcdFx0aGFuZGxlci5jYWxsKCB0aGlzLCBlcnJvciApO1xuXG5cdFx0XHRcdGZsdXNoLmJpbmQoIHNlbGYgKSggKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGhhbmRsZXIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZWNvcmQgPSBmdW5jdGlvbiByZWNvcmQoIHJlc3VsdCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHR0aGlzWyBSRVNVTFQgXSA9IHJlc3VsdDtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHRcdGZsdXNoLmJpbmQoIHRoaXMgKSggKTtcblxuXHRcdGRlbGV0ZSB0aGlzWyBDQUxMQkFDSyBdO1xuXHRcdGRlbGV0ZSB0aGlzWyBERUZFUiBdO1xuXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXNbIFJFU1VMVCBdO1xuXHRcdGRlbGV0ZSB0aGlzWyBSRVNVTFQgXTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoICl7XG5cdFx0dGhpcy5yZWxlYXNlKCApO1xuXG5cdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCApe1xuXHRcdHJldHVybiB0aGlzWyBSRVNVTFQgXTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCBwcm9wZXJ0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmxhc3RseSA9IGZ1bmN0aW9uIGxhc3RseSggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbmNlKCBcImxhc3RseVwiLCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXMucmVzdWx0KCApO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHN0cmluZ2UoIHRoaXMucmVzdWx0KCApICk7XG5cdH07XG5cblx0Q2F0Y2hlciA9IGhlcmVkaXRvKCBDYXRjaGVyLCBlZG8uYmluZCggY29udGV4dCApKCApICk7XG5cblx0Q2F0Y2hlciA9IHN5bWJpb3RlKCBDYXRjaGVyLCBcIkV2ZW50XCIgKTtcblxuXHRyZXR1cm4gQ2F0Y2hlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2F0Y2hlcjtcbiJdfQ==
//# sourceMappingURL=catcher.support.js.map
