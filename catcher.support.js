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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImJ1cm5lIiwiY2FsbGVkIiwiZGlhdG9tIiwiZWRvIiwiZXhlY2QiLCJmYWx6eSIsImZpbGxlZCIsImhlcmVkaXRvIiwia2VpbiIsIm1ya2QiLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsIndpY2hpcyIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJDYXRjaGVyIiwiZXZlbnQiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJkb25lIiwicmVsZWFzZSIsInJlY29yZCIsInJlc3VsdCIsInBhc3MiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJhcHBseSIsImVtaXQiLCJjb25jYXQiLCJzdG9wIiwiZmx1c2giLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiZ2V0IiwibGFzdGx5IiwiY2FsbGJhY2siLCJvbmNlIiwicHVzaCIsInRoZW4iLCJtZXJnZSIsIm5leHQiLCJlcnJvciIsInNwbGljZSIsInBvcCIsImNhbGwiLCJpc3N1ZSIsInVuZGVmaW5lZCIsImZsb3ciLCJzZXJ2ZXIiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJsYXRlciIsInNlbGYiLCJjbGllbnQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInN0YWNrIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsIm9uIiwiZGVmZXIiLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0s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QUNBOztBQUVELE1BQUkzQixNQUFPbUQsUUFBUCxLQUFxQixDQUFDOUMsUUFBUzhDLFFBQVQsRUFBbUI1QixRQUFuQixDQUExQixFQUF5RDtBQUN4RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsT0FBSzRCLElBQUwsQ0FBVyxRQUFYLEVBQXFCRCxRQUFyQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQXBCRDs7QUFzQkF4QixTQUFRZ0QsU0FBUixDQUFrQk8sT0FBbEIsR0FBNEIsU0FBU0EsT0FBVCxHQUFtQjtBQUM5QyxTQUFPLEtBQUtoRCxNQUFMLEVBQVA7QUFDQSxFQUZEOztBQUlBUCxTQUFRZ0QsU0FBUixDQUFrQlEsUUFBbEIsR0FBNkIsU0FBU0EsUUFBVCxHQUFvQjtBQUNoRCxTQUFPMUUsUUFBUyxLQUFLeUIsTUFBTCxFQUFULENBQVA7QUFDQSxFQUZEOztBQUlBLFFBQU9QLE9BQVA7QUFDQSxDQTN0QkQ7O0FBNnRCQXlELE9BQU9DLE9BQVAsR0FBaUJoRSxPQUFqQiIsImZpbGUiOiJjYXRjaGVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXRnby9jYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2F0Y2hlci5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV0Z29cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENhdGNoZXIgY2xhc3MgZmFjdG9yeSBmb3IgaGFuZGxpbmcgY2F0Y2hlci1mbG93IHByb2NlZHVyZS5cblxuXHRcdExhdGVyIG1ldGhvZCB3aWxsIGJlIGV4ZWN1dGVkIG9uY2UsIGFuZCBhbGwgY2FsbGJhY2tzIHdpbGwgYmUgZXhlY3V0ZWQgb25jZS5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYmFja2RcIjogXCJiYWNrZFwiLFxuXHRcdFx0XCJidXJuZVwiOiBcImJ1cm5lXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZWRvXCI6IFwiZWRvXCIsXG5cdFx0XHRcImV4ZWNkXCI6IFwiZXhlY2RcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJzdGF0aXNcIjogXCJzdGF0aXNcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcIndpY2hpc1wiOiBcIndpY2hpc1wiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBiYWNrZCA9IHJlcXVpcmUoIFwiYmFja2RcIiApO1xuY29uc3QgYnVybmUgPSByZXF1aXJlKCBcImJ1cm5lXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGVkbyA9IHJlcXVpcmUoIFwiZWRvXCIgKTtcbmNvbnN0IGV4ZWNkID0gcmVxdWlyZSggXCJleGVjZFwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgZmlsbGVkID0gcmVxdWlyZSggXCJmaWxsZWRcIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbXJrZCA9IHJlcXVpcmUoIFwibXJrZFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCBzdGF0aXMgPSByZXF1aXJlKCBcInN0YXRpc1wiICk7XG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3Qgd2ljaGlzID0gcmVxdWlyZSggXCJ3aWNoaXNcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IENBQ0hFID0gU3ltYm9sKCBcImNhY2hlXCIgKTtcbmNvbnN0IENBTExCQUNLID0gU3ltYm9sKCBcImNhbGxiYWNrXCIgKTtcbmNvbnN0IERFRkVSID0gU3ltYm9sKCBcImRlZmVyXCIgKTtcbmNvbnN0IEVWRU5UID0gU3ltYm9sKCBcImV2ZW50XCIgKTtcbmNvbnN0IElOU1RBTkNFID0gU3ltYm9sKCBcImluc3RhbmNlXCIgKTtcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xuY29uc3QgU1RPUFBFRCA9IFN5bWJvbCggXCJzdG9wcGVkXCIgKTtcblxuY29uc3QgY2F0Y2hlciA9IGZ1bmN0aW9uIGNhdGNoZXIoIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgY29udGV4dCA9IHplbGYoIHRoaXMgKTtcblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0bWV0aG9kID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggbWV0aG9kICk7XG5cdH1cblxuXHRsZXQgQ2F0Y2hlciA9IGRpYXRvbSggXCJDYXRjaGVyXCIgKTtcblxuXHRDYXRjaGVyID0gaGVyZWRpdG8oIENhdGNoZXIsIGVkby5iaW5kKCBjb250ZXh0ICkoICkgKTtcblxuXHRDYXRjaGVyID0gc3ltYmlvdGUoIENhdGNoZXIsIFwiRXZlbnRcIiApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0V2Ugc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgRXZlbnQgaGVyZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IGV2ZW50ID0gZWRvLmJpbmQoIGNvbnRleHQgKSggKSggKTtcblxuXHRzdGF0aXMoIENhdGNoZXIgKVxuXHRcdC5hdHRhY2goIEVWRU5ULCBldmVudCApXG5cdFx0LmF0dGFjaCggQ0FDSEUsIHsgfSApXG5cdFx0LmF0dGFjaCggQ0FMTEJBQ0ssIFsgXSApXG5cdFx0LmltcGxlbWVudCggXCJkb25lXCIsIGZ1bmN0aW9uIGRvbmUoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5kb25lKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVsZWFzZVwiLCBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoICFrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcmVsZWFzZSBpbmFjdGl2ZSBjYXRjaGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucmVsZWFzZSggKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlY29yZFwiLCBmdW5jdGlvbiByZWNvcmQoIHJlc3VsdCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWNvcmQgcmVzdWx0IG9uIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWNvcmQoIHJlc3VsdCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicGFzc1wiLCBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyOnJlcXVpcmVkXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucGFzcy5hcHBseSggdGhpc1sgSU5TVEFOQ0UgXSwgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdC5hcHBseSggY29udGV4dCwgWyBcInBhc3M6Y2F0Y2hlclwiIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInN0b3BcIiwgZnVuY3Rpb24gc3RvcCggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRoaXMucmVsZWFzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdFx0dGhpcy5mbHVzaCggKTtcblxuXHRcdFx0YnVybmUoIFNUT1BQRUQsIENhdGNoZXIgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJzZXRcIiwgZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImdldFwiLCBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsYXN0bHlcIiwgZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbmNlKCBcImxhc3RseVwiLCBjYWxsYmFjayApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInB1c2hcIiwgZnVuY3Rpb24gcHVzaCggY2FsbGJhY2sgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnB1c2goIGNhbGxiYWNrICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIENBTExCQUNLIF0ucHVzaCggYmFja2QuYmluZCggY29udGV4dCApKCBjYWxsYmFjayApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwidGhlblwiLCBmdW5jdGlvbiB0aGVuKCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0udGhlbiggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0Lm1lcmdlKCBldmVudCApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0VGhlc2UgbWV0aG9kcyBzaG91bGQgbm90IGJlIGFjY2Vzc2libGUgb3V0c2lkZSB0aHJvdWdoIHRoZSBjYXRjaGVyLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRsZXQgcHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIENBTExCQUNLIF0ucHVzaCggYmFja2QuYmluZCggY29udGV4dCApKCBjYWxsYmFjayApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRsZXQgbmV4dCA9IGZ1bmN0aW9uIG5leHQoIGVycm9yLCByZXN1bHQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXJyb3JcIjogRXJyb3IsXG5cdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cdFx0aWYoICggZXJyb3IgaW5zdGFuY2VvZiBFcnJvciApICYmIHByb3R5cGUoIHRoaXNbIERFRkVSIF0sIEZVTkNUSU9OICkgKXtcblx0XHRcdHRoaXNbIERFRkVSIF0oIGVycm9yICk7XG5cdFx0fVxuXG5cdFx0bGV0IGNhbGxiYWNrID0gdGhpc1sgQ0FMTEJBQ0sgXS5zcGxpY2UoIDAsIDEgKS5wb3AoICk7XG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgKXtcblx0XHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblxuXHRcdFx0dGhpcy5lbWl0KCBcImxhc3RseVwiICk7XG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBtZXRob2QgaW50ZW50aW9uYWxseSBjYWxscyB0aGUgY2FsbGJhY2sgd2l0aG91dCBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0XHR0aGVuIGl0IGhhbHRzIHRoZSBjaGFpbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoIGFyaWQoIGFyZ3VtZW50cyApICl7XG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmNhbGwoIGNvbnRleHQgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRcdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDIgKTtcblxuXHRcdFx0XHRyZXN1bHQgPSBjYWxsYmFjay5hcHBseSggY29udGV4dCwgWyBlcnJvciwgcmVzdWx0IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXHRcdFx0fVxuXG5cdFx0fWNhdGNoKCBpc3N1ZSApe1xuXHRcdFx0ZXJyb3IgPSBpc3N1ZTtcblxuXHRcdFx0cmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmKCByZXN1bHQgaW5zdGFuY2VvZiBFcnJvciApe1xuXHRcdFx0ZXJyb3IgPSByZXN1bHQ7XG5cblx0XHRcdHJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGUgcmVzdWx0IG9mIHRoZSBsYXN0IGNhbGxiYWNrIGlzIHBhc3NlZCBvbiB0aGUgbmV4dCBjYWxsYmFjay5cblxuXHRcdFx0XHRJZiB0aGUgY2FsbGJhY2sgZW5jb3VudGVycyBhbiBlcnJvciwgaXQgaXMgdXAgZm9yIHRoZSBuZXh0IGNhbGxiYWNrXG5cdFx0XHRcdFx0dG8gY29udGludWUgdGhlIGNoYWluIG9yIGhhbHRzIHRoZSBjaGFpbi5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSAmJiBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0bmV4dC5hcHBseSggdGhpcywgWyBlcnJvciwgcmVzdWx0IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0bGV0IGZsb3cgPSBmdW5jdGlvbiBmbG93KCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0dGhpcy5zZXQoIFwicGFyYW1ldGVyXCIsIHBhcmFtZXRlciApO1xuXG5cdFx0aWYoIGZhbHp5KCBtZXRob2QgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dHJ5e1xuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdHByb2Nlc3MubmV4dFRpY2soIGZ1bmN0aW9uIGxhdGVyKCApe1xuXHRcdFx0XHRcdGxldCB7IHNlbGYsIGNvbnRleHQsIHBhcmFtZXRlciwgbWV0aG9kLCBuZXh0IH0gPSB0aGlzO1xuXG5cdFx0XHRcdFx0c2VsZi5yZWNvcmQoIG1ldGhvZC5hcHBseSggY29udGV4dCwgW1xuXHRcdFx0XHRcdFx0YmFja2QuYmluZCggc2VsZiApKCBuZXh0IClcblx0XHRcdFx0XHRdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0XHRcdH0uYmluZCgge1xuXHRcdFx0XHRcdFwic2VsZlwiOiB0aGlzLFxuXHRcdFx0XHRcdFwiY29udGV4dFwiOiBjb250ZXh0LFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IHBhcmFtZXRlcixcblx0XHRcdFx0XHRcIm1ldGhvZFwiOiBtZXRob2QsXG5cdFx0XHRcdFx0XCJuZXh0XCI6IG5leHRcblx0XHRcdFx0fSApICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uIGxhdGVyKCApe1xuXHRcdFx0XHRcdGxldCB7IHNlbGYsIGNvbnRleHQsIHBhcmFtZXRlciwgbWV0aG9kLCBuZXh0IH0gPSB0aGlzO1xuXG5cdFx0XHRcdFx0c2VsZi5yZWNvcmQoIG1ldGhvZC5hcHBseSggY29udGV4dCwgW1xuXHRcdFx0XHRcdFx0YmFja2QuYmluZCggc2VsZiApKCBuZXh0IClcblx0XHRcdFx0XHRdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBmYWlsZWQgZmxvdyBtZXRob2QsICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdHdoaWxlKCB0aGlzWyBDQUxMQkFDSyBdLmxlbmd0aCApIHRoaXNbIENBTExCQUNLIF0ucG9wKCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIGNhbGxiYWNrLCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0bGV0IHNlbGYgPSBDYXRjaGVyWyBJTlNUQU5DRSBdID0gdGhpcztcblxuXHRcdHRoaXNbIENBTExCQUNLIF0gPSB3aWNoaXMoIENhdGNoZXJbIENBTExCQUNLIF0sIFsgXSApO1xuXG5cdFx0dGhpc1sgQ0FDSEUgXSA9IENhdGNoZXJbIENBQ0hFIF07XG5cblx0XHR0cnl7XG5cdFx0XHR0aGlzLm1lcmdlKCBDYXRjaGVyWyBFVkVOVCBdICk7XG5cblx0XHRcdGlmKCBwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRcdGZsb3cuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9uKCBcInBhc3M6Y2F0Y2hlclwiLCBmdW5jdGlvbiBwYXNzKCApe1xuXHRcdFx0XHRzZWxmLnBhc3MuYXBwbHkoIHNlbGYsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHRoaXMubGFzdGx5KCBmdW5jdGlvbiBsYXN0bHkoICl7XG5cdFx0XHRcdHNlbGYuc3RvcCggKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRuZXh0LmJpbmQoIHRoaXMgKSggbmV3IEVycm9yKCBgZmFpbGVkIGNhdGNoZXIsICR7IGVycm9yLnN0YWNrIH1gICkgKTtcblxuXHRcdH1maW5hbGx5e1xuXHRcdFx0ZGVsZXRlIHRoaXMuaW5pdGlhbGl6ZTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIGRvbmUoICl7XG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSApe1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSAmJiBleGVjZCggbWV0aG9kICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBhcmlkKCB0aGlzWyBDQUxMQkFDSyBdICk7XG5cdFx0fVxuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCAha2VpbiggQ0FMTEJBQ0ssIHRoaXMgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhdGNoZXIgaGFzIGJlZW4gcmVsZWFzZWQsIGNhbm5vdCBwdXNoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmlsbGVkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJwdXNoIGNhbGxiYWNrIG9uY2UsIGNhbm5vdCBwdXNoIGNhbGxiYWNrIGFnYWluXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0cHVzaC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gdGhlbiggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggIWtlaW4oIENBTExCQUNLLCB0aGlzICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYXRjaGVyIGhhcyBiZWVuIHJlbGVhc2VkLCBjYW5ub3QgcHVzaCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBtZXRob2QgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImVtcHR5IGxhdGVyIG1ldGhvZCwgY2Fubm90IGZvbGxvdyB3aXRoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0RmxvdyB0aGUgbWV0aG9kIGlmIG5vdCB5ZXQgY2FsbGVkLlxuXG5cdFx0XHRcdEl0IGlzIHRoZSBkZXZlbG9wZXIgcmVzcG9uc2liaWxpdHkgdG8gcHVzaCBhIGNhbGxiYWNrXG5cdFx0XHRcdFx0YmVmb3JlIHBhc3NpbmcgZmxvdy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gZmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0fVxuXG5cdFx0bmV4dC5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwic3RyaWN0XCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVmZXIgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIHN0cmljdCA9PT0gdHJ1ZSApe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggZnVuY3Rpb24gZGVsZWdhdGUoIGVycm9yICl7XG5cdFx0XHRcdGhhbmRsZXIuY2FsbCggdGhpcywgZXJyb3IgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBoYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVjb3JkID0gZnVuY3Rpb24gcmVjb3JkKCByZXN1bHQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpc1sgUkVTVUxUIF0gPSByZXN1bHQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gcmVsZWFzZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRkZWxldGUgdGhpc1sgQ0FMTEJBQ0sgXTtcblx0XHRkZWxldGUgdGhpc1sgREVGRVIgXTtcblxuXHRcdGxldCByZXN1bHQgPSB0aGlzWyBSRVNVTFQgXTtcblx0XHRkZWxldGUgdGhpc1sgUkVTVUxUIF07XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCApe1xuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXMucmVsZWFzZSggKTtcblxuXHRcdHRoaXMuZW1pdCggXCJyZWxlYXNlXCIgKTtcblxuXHRcdGJ1cm5lKCBTVE9QUEVELCBDYXRjaGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFJFU1VMVCBdO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUubGFzdGx5ID0gZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpcy5yZXN1bHQoICk7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gc3RyaW5nZSggdGhpcy5yZXN1bHQoICkgKTtcblx0fTtcblxuXHRyZXR1cm4gQ2F0Y2hlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2F0Y2hlcjtcbiJdfQ==
//# sourceMappingURL=catcher.support.js.map
