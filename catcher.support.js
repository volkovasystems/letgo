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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
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
              			"burne": "burne",
              			"called": "called",
              			"diatom": "diatom",
              			"edo": "edo",
              			"execd": "execd",
              			"falzy": "falzy",
              			"filled": "filled",
              			"heredito": "heredito",
              			"kein": "kein",
              			"mrkd": "mrkd",
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
var burne = require("burne");
var called = require("called");
var diatom = require("diatom");
var edo = require("edo");
var execd = require("execd");
var falzy = require("falzy");
var filled = require("filled");
var heredito = require("heredito");
var kein = require("kein");
var mrkd = require("mrkd");
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

	Catcher = heredito(Catcher, edo.bind(context)());

	Catcher = symbiote(Catcher, "Event");

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
		if (mrkd(STOPPED, Catcher, true)) {
			return true;
		}

		if (!kein(INSTANCE, this)) {
			return false;
		}

		return this[INSTANCE].done();
	}).
	implement("release", function release() {
		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		parameter = raze(arguments);

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].pass.apply(this[INSTANCE], parameter);
		}

		this.emit.apply(context, ["pass:catcher"].concat(parameter));

		return this;
	}).
	implement("stop", function stop() {
		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (kein(INSTANCE, this)) {
			this.release();
		}

		this.emit("release");
		this.flush();

		burne(STOPPED, Catcher);

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (filled(this[CALLBACK])) {
			throw new Error("push callback once, cannot push callback again");
		}

		if (truly(method) && execd(method)) {
			throw new Error("later method executed, cannot follow with callback");
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (falzy(method) && arid(this[CALLBACK])) {
			throw new Error("empty later method, cannot follow with callback");
		}

		if (truly(method) && execd(method)) {
			throw new Error("later method executed, cannot follow with callback");
		}

		if (falzy(callback) || !protype(callback, FUNCTION)) {
			throw new Error("invalid callback");
		}

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].then(callback);
		}

		this[CALLBACK].push(backd.bind(context)(callback));

		return this;
	}).
	implement("defer", function defer(handler, strict) {
		/*;
                                                     	@meta-configuration:
                                                     		{
                                                     			"handler:required": "function",
                                                     			"strict": "boolean"
                                                     		}
                                                     	@end-meta-configuration
                                                     */

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (falzy(handler) || !protype(handler, FUNCTION)) {
			throw new Error("invalid defer handler");
		}

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].then(handler, strict);
		}

		if (kein(DEFER, this)) {
			return this;
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
				result = callback.call(context, error, result);

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

			if (kein(DEFER, Catcher)) {
				this.defer(Catcher[DEFER]);
			}

			this.on("pass:catcher", function pass() {
				self.pass.apply(self, raze(arguments));
			});

			this.lastly(function lastly() {
				self.stop();
			});

			return this;

		} catch (error) {
			next.bind(this)(new Error("failed catcher, " + error.stack));

		} finally {
			delete this.initialize;
		}
	};

	Catcher.prototype.done = function done() {
		if (mrkd(STOPPED, Catcher, true)) {
			return true;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (!kein(CALLBACK, this)) {
			throw new Error("catcher has been released, cannot push callback");
		}

		if (filled(this[CALLBACK])) {
			throw new Error("push callback once, cannot push callback again");
		}

		if (truly(method) && execd(method)) {
			throw new Error("later method executed, cannot push callback");
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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (!kein(CALLBACK, this)) {
			throw new Error("catcher has been released, cannot push callback");
		}

		if (falzy(method) && arid(this[CALLBACK])) {
			throw new Error("empty later method, cannot follow with callback");
		}

		if (truly(method) && execd(method)) {
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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		this[RESULT] = result;

		return this;
	};

	Catcher.prototype.release = function release() {
		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		flush.bind(this)();

		delete this[CALLBACK];
		delete this[DEFER];

		var result = this[RESULT];
		delete this[RESULT];

		return result;
	};

	Catcher.prototype.stop = function stop() {
		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		this.release();

		this.emit("release");
		Catcher.flush();

		burne(STOPPED, Catcher);

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

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

	return Catcher;
};

module.exports = catcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImJ1cm5lIiwiY2FsbGVkIiwiZGlhdG9tIiwiZWRvIiwiZXhlY2QiLCJmYWx6eSIsImZpbGxlZCIsImhlcmVkaXRvIiwia2VpbiIsIm1ya2QiLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsIndpY2hpcyIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJDYXRjaGVyIiwiZXZlbnQiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJkb25lIiwicmVsZWFzZSIsInJlY29yZCIsInJlc3VsdCIsInBhc3MiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJhcHBseSIsImVtaXQiLCJjb25jYXQiLCJzdG9wIiwiZmx1c2giLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiZ2V0IiwibGFzdGx5IiwiY2FsbGJhY2siLCJvbmNlIiwicHVzaCIsInRoZW4iLCJkZWZlciIsImhhbmRsZXIiLCJzdHJpY3QiLCJzZWxmIiwiZGVsZWdhdGUiLCJlcnJvciIsImNhbGwiLCJtZXJnZSIsIm5leHQiLCJzcGxpY2UiLCJwb3AiLCJpc3N1ZSIsInVuZGVmaW5lZCIsImZsb3ciLCJzZXJ2ZXIiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJsYXRlciIsImNsaWVudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3RhY2siLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib24iLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0s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LFNBQVFvRCxTQUFSLENBQWtCSSxRQUFsQixHQUE2QixTQUFTQSxRQUFULEdBQW9CO0FBQ2hELFNBQU8xRSxRQUFTLEtBQUt5QixNQUFMLEVBQVQsQ0FBUDtBQUNBLEVBRkQ7O0FBSUEsUUFBT1AsT0FBUDtBQUNBLENBL3hCRDs7QUFpeUJBeUQsT0FBT0MsT0FBUCxHQUFpQmhFLE9BQWpCIiwiZmlsZSI6ImNhdGNoZXIuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV0Z29cIixcblx0XHRcdFwicGF0aFwiOiBcImxldGdvL2NhdGNoZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJjYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xldGdvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibGV0Z28tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2Vcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2F0Y2hlciBjbGFzcyBmYWN0b3J5IGZvciBoYW5kbGluZyBjYXRjaGVyLWZsb3cgcHJvY2VkdXJlLlxuXG5cdFx0TGF0ZXIgbWV0aG9kIHdpbGwgYmUgZXhlY3V0ZWQgb25jZSwgYW5kIGFsbCBjYWxsYmFja3Mgd2lsbCBiZSBleGVjdXRlZCBvbmNlLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJiYWNrZFwiOiBcImJhY2tkXCIsXG5cdFx0XHRcImJ1cm5lXCI6IFwiYnVybmVcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJlZG9cIjogXCJlZG9cIixcblx0XHRcdFwiZXhlY2RcIjogXCJleGVjZFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImZpbGxlZFwiOiBcImZpbGxlZFwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInN0YXRpc1wiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwid2ljaGlzXCI6IFwid2ljaGlzXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJhY2tkID0gcmVxdWlyZSggXCJiYWNrZFwiICk7XG5jb25zdCBidXJuZSA9IHJlcXVpcmUoIFwiYnVybmVcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZWRvID0gcmVxdWlyZSggXCJlZG9cIiApO1xuY29uc3QgZXhlY2QgPSByZXF1aXJlKCBcImV4ZWNkXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHN0YXRpcyA9IHJlcXVpcmUoIFwic3RhdGlzXCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB3aWNoaXMgPSByZXF1aXJlKCBcIndpY2hpc1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgQ0FDSEUgPSBTeW1ib2woIFwiY2FjaGVcIiApO1xuY29uc3QgQ0FMTEJBQ0sgPSBTeW1ib2woIFwiY2FsbGJhY2tcIiApO1xuY29uc3QgREVGRVIgPSBTeW1ib2woIFwiZGVmZXJcIiApO1xuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSU5TVEFOQ0UgPSBTeW1ib2woIFwiaW5zdGFuY2VcIiApO1xuY29uc3QgUkVTVUxUID0gU3ltYm9sKCBcInJlc3VsdFwiICk7XG5jb25zdCBTVE9QUEVEID0gU3ltYm9sKCBcInN0b3BwZWRcIiApO1xuXG5jb25zdCBjYXRjaGVyID0gZnVuY3Rpb24gY2F0Y2hlciggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGxldCBjb250ZXh0ID0gemVsZiggdGhpcyApO1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgKXtcblx0XHRtZXRob2QgPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBtZXRob2QgKTtcblx0fVxuXG5cdGxldCBDYXRjaGVyID0gZGlhdG9tKCBcIkNhdGNoZXJcIiApO1xuXG5cdENhdGNoZXIgPSBoZXJlZGl0byggQ2F0Y2hlciwgZWRvLmJpbmQoIGNvbnRleHQgKSggKSApO1xuXG5cdENhdGNoZXIgPSBzeW1iaW90ZSggQ2F0Y2hlciwgXCJFdmVudFwiICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRXZSBzaG91bGQgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBFdmVudCBoZXJlLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRsZXQgZXZlbnQgPSBlZG8uYmluZCggY29udGV4dCApKCApKCApO1xuXG5cdHN0YXRpcyggQ2F0Y2hlciApXG5cdFx0LmF0dGFjaCggRVZFTlQsIGV2ZW50IClcblx0XHQuYXR0YWNoKCBDQUNIRSwgeyB9IClcblx0XHQuYXR0YWNoKCBDQUxMQkFDSywgWyBdIClcblx0XHQuaW1wbGVtZW50KCBcImRvbmVcIiwgZnVuY3Rpb24gZG9uZSggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLmRvbmUoICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWxlYXNlIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWxlYXNlKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVjb3JkXCIsIGZ1bmN0aW9uIHJlY29yZCggcmVzdWx0ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHJlY29yZCByZXN1bHQgb24gaW5hY3RpdmUgY2F0Y2hlclwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnJlY29yZCggcmVzdWx0ICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJwYXNzXCIsIGZ1bmN0aW9uIHBhc3MoIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXI6cmVxdWlyZWRcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5wYXNzLmFwcGx5KCB0aGlzWyBJTlNUQU5DRSBdLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0LmFwcGx5KCBjb250ZXh0LCBbIFwicGFzczpjYXRjaGVyXCIgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwic3RvcFwiLCBmdW5jdGlvbiBzdG9wKCApe1xuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhpcy5yZWxlYXNlKCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVtaXQoIFwicmVsZWFzZVwiICk7XG5cdFx0XHR0aGlzLmZsdXNoKCApO1xuXG5cdFx0XHRidXJuZSggU1RPUFBFRCwgQ2F0Y2hlciApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInNldFwiLCBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZ2V0XCIsIGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImxhc3RseVwiLCBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmlsbGVkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIGV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucHVzaCggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ0aGVuXCIsIGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggbWV0aG9kICkgJiYgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJlbXB0eSBsYXRlciBtZXRob2QsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJsYXRlciBtZXRob2QgZXhlY3V0ZWQsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS50aGVuKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImRlZmVyXCIsIGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcInN0cmljdFwiOiBcImJvb2xlYW5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlZmVyIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS50aGVuKCBoYW5kbGVyLCBzdHJpY3QgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIERFRkVSLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBzdHJpY3QgPT09IHRydWUgKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBmdW5jdGlvbiBkZWxlZ2F0ZSggZXJyb3IgKXtcblx0XHRcdFx0XHRoYW5kbGVyLmNhbGwoIHRoaXMsIGVycm9yICk7XG5cblx0XHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGhhbmRsZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0Lm1lcmdlKCBldmVudCApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgbm90IGJlIGFjY2Vzc2libGUgb3V0c2lkZSB0aHJvdWdoIHRoZSBjYXRjaGVyLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRsZXQgcHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIENBTExCQUNLIF0ucHVzaCggYmFja2QuYmluZCggY29udGV4dCApKCBjYWxsYmFjayApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRsZXQgbmV4dCA9IGZ1bmN0aW9uIG5leHQoIGVycm9yLCByZXN1bHQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXJyb3JcIjogRXJyb3IsXG5cdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cdFx0aWYoICggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApICYmIHByb3R5cGUoIHRoaXNbIERFRkVSIF0sIEZVTkNUSU9OICkgKXtcblx0XHRcdHRoaXNbIERFRkVSIF0oIGVycm9yICk7XG5cdFx0fVxuXG5cdFx0bGV0IGNhbGxiYWNrID0gdGhpc1sgQ0FMTEJBQ0sgXS5zcGxpY2UoIDAsIDEgKS5wb3AoICk7XG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgKXtcblx0XHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblxuXHRcdFx0dGhpcy5lbWl0KCBcImxhc3RseVwiICk7XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBtZXRob2QgaW50ZW50aW9uYWxseSBjYWxscyB0aGUgY2FsbGJhY2sgd2l0aG91dCBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0XHR0aGVuIGl0IGhhbHRzIHRoZSBjaGFpbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoIGFyaWQoIGFyZ3VtZW50cyApICl7XG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoIGNvbnRleHQsIGVycm9yLCByZXN1bHQgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRcdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDIgKTtcblxuXHRcdFx0XHRyZXN1bHQgPSBjYWxsYmFjay5hcHBseSggY29udGV4dCwgWyBlcnJvciwgcmVzdWx0IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXHRcdFx0fVxuXG5cdFx0fWNhdGNoKCBpc3N1ZSApe1xuXHRcdFx0ZXJyb3IgPSBpc3N1ZTtcblxuXHRcdFx0cmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmKCByZXN1bHQgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0ZXJyb3IgPSByZXN1bHQ7XG5cblx0XHRcdHJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGUgcmVzdWx0IG9mIHRoZSBsYXN0IGNhbGxiYWNrIGlzIHBhc3NlZCBvbiB0aGUgbmV4dCBjYWxsYmFjay5cblxuXHRcdFx0XHRJZiB0aGUgY2FsbGJhY2sgZW5jb3VudGVycyBhbiBlcnJvciwgaXQgaXMgdXAgZm9yIHRoZSBuZXh0IGNhbGxiYWNrXG5cdFx0XHRcdFx0dG8gY29udGludWUgdGhlIGNoYWluIG9yIGhhbHRzIHRoZSBjaGFpbi5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSAmJiBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0bmV4dC5hcHBseSggdGhpcywgWyBlcnJvciwgcmVzdWx0IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0bGV0IGZsb3cgPSBmdW5jdGlvbiBmbG93KCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0dGhpcy5zZXQoIFwicGFyYW1ldGVyXCIsIHBhcmFtZXRlciApO1xuXG5cdFx0aWYoIGZhbHp5KCBtZXRob2QgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdHByb2Nlc3MubmV4dFRpY2soIGZ1bmN0aW9uIGxhdGVyKCApe1xuXHRcdFx0XHRcdGxldCB7IHNlbGYsIGNvbnRleHQsIHBhcmFtZXRlciwgbWV0aG9kLCBuZXh0IH0gPSB0aGlzO1xuXG5cdFx0XHRcdFx0c2VsZi5yZWNvcmQoIG1ldGhvZC5hcHBseSggY29udGV4dCwgW1xuXHRcdFx0XHRcdFx0YmFja2QuYmluZCggc2VsZiApKCBuZXh0IClcblx0XHRcdFx0XHRdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0XHRcdH0uYmluZCgge1xuXHRcdFx0XHRcdFwic2VsZlwiOiB0aGlzLFxuXHRcdFx0XHRcdFwiY29udGV4dFwiOiBjb250ZXh0LFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IHBhcmFtZXRlcixcblx0XHRcdFx0XHRcIm1ldGhvZFwiOiBtZXRob2QsXG5cdFx0XHRcdFx0XCJuZXh0XCI6IG5leHRcblx0XHRcdFx0fSApICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uIGxhdGVyKCApe1xuXHRcdFx0XHRcdGxldCB7IHNlbGYsIGNvbnRleHQsIHBhcmFtZXRlciwgbWV0aG9kLCBuZXh0IH0gPSB0aGlzO1xuXG5cdFx0XHRcdFx0c2VsZi5yZWNvcmQoIG1ldGhvZC5hcHBseSggY29udGV4dCwgW1xuXHRcdFx0XHRcdFx0YmFja2QuYmluZCggc2VsZiApKCBuZXh0IClcblx0XHRcdFx0XHRdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBmYWlsZWQgZmxvdyBtZXRob2QsICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdHdoaWxlKCB0aGlzWyBDQUxMQkFDSyBdLmxlbmd0aCApIHRoaXNbIENBTExCQUNLIF0ucG9wKCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIGNhbGxiYWNrLCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0bGV0IHNlbGYgPSBDYXRjaGVyWyBJTlNUQU5DRSBdID0gdGhpcztcblxuXHRcdHRoaXNbIENBTExCQUNLIF0gPSB3aWNoaXMoIENhdGNoZXJbIENBTExCQUNLIF0sIFsgXSApO1xuXG5cdFx0dGhpc1sgQ0FDSEUgXSA9IENhdGNoZXJbIENBQ0hFIF07XG5cblx0XHR0cnl7XG5cdFx0XHR0aGlzLm1lcmdlKCBDYXRjaGVyWyBFVkVOVCBdICk7XG5cblx0XHRcdGlmKCBwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRcdGZsb3cuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggREVGRVIsIENhdGNoZXIgKSApe1xuXHRcdFx0XHR0aGlzLmRlZmVyKCBDYXRjaGVyWyBERUZFUiBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub24oIFwicGFzczpjYXRjaGVyXCIsIGZ1bmN0aW9uIHBhc3MoICl7XG5cdFx0XHRcdHNlbGYucGFzcy5hcHBseSggc2VsZiwgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0dGhpcy5sYXN0bHkoIGZ1bmN0aW9uIGxhc3RseSggKXtcblx0XHRcdFx0c2VsZi5zdG9wKCApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdG5leHQuYmluZCggdGhpcyApKCBuZXcgRXJyb3IoIGBmYWlsZWQgY2F0Y2hlciwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0fWZpbmFsbHl7XG5cdFx0XHRkZWxldGUgdGhpcy5pbml0aWFsaXplO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gZG9uZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICYmIGV4ZWNkKCBtZXRob2QgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgcHVzaCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgJiYgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0RmxvdyB0aGUgbWV0aG9kIGlmIG5vdCB5ZXQgY2FsbGVkLlxuXG5cdFx0XHRcdEl0IGlzIHRoZSBkZXZlbG9wZXIgcmVzcG9uc2liaWxpdHkgdG8gcHVzaCBhIGNhbGxiYWNrXG5cdFx0XHRcdFx0YmVmb3JlIHBhc3NpbmcgZmxvdy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gZmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0fVxuXG5cdFx0bmV4dC5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwic3RyaWN0XCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVmZXIgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIHN0cmljdCA9PT0gdHJ1ZSApe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggZnVuY3Rpb24gZGVsZWdhdGUoIGVycm9yICl7XG5cdFx0XHRcdGhhbmRsZXIuY2FsbCggdGhpcywgZXJyb3IgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBoYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVjb3JkID0gZnVuY3Rpb24gcmVjb3JkKCByZXN1bHQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpc1sgUkVTVUxUIF0gPSByZXN1bHQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gcmVsZWFzZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRkZWxldGUgdGhpc1sgQ0FMTEJBQ0sgXTtcblx0XHRkZWxldGUgdGhpc1sgREVGRVIgXTtcblxuXHRcdGxldCByZXN1bHQgPSB0aGlzWyBSRVNVTFQgXTtcblx0XHRkZWxldGUgdGhpc1sgUkVTVUxUIF07XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCApe1xuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXMucmVsZWFzZSggKTtcblxuXHRcdHRoaXMuZW1pdCggXCJyZWxlYXNlXCIgKTtcblx0XHRDYXRjaGVyLmZsdXNoKCApO1xuXG5cdFx0YnVybmUoIFNUT1BQRUQsIENhdGNoZXIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCggKXtcblx0XHRyZXR1cm4gdGhpc1sgUkVTVUxUIF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5sYXN0bHkgPSBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHRoaXMub25jZSggXCJsYXN0bHlcIiwgY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCApe1xuXHRcdHJldHVybiB0aGlzLnJlc3VsdCggKTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiBzdHJpbmdlKCB0aGlzLnJlc3VsdCggKSApO1xuXHR9O1xuXG5cdHJldHVybiBDYXRjaGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYXRjaGVyO1xuIl19
//# sourceMappingURL=catcher.support.js.map
