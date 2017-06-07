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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImJ1cm5lIiwiY2FsbGVkIiwiZGlhdG9tIiwiZWRvIiwiZXhlY2QiLCJmYWx6eSIsImZpbGxlZCIsImhlcmVkaXRvIiwia2VpbiIsIm1ya2QiLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsIndpY2hpcyIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJDYXRjaGVyIiwiZXZlbnQiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJkb25lIiwicmVsZWFzZSIsInJlY29yZCIsInJlc3VsdCIsInBhc3MiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJhcHBseSIsImVtaXQiLCJjb25jYXQiLCJzdG9wIiwiZmx1c2giLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiZ2V0IiwibGFzdGx5IiwiY2FsbGJhY2siLCJvbmNlIiwicHVzaCIsInRoZW4iLCJtZXJnZSIsIm5leHQiLCJlcnJvciIsInNwbGljZSIsInBvcCIsImNhbGwiLCJpc3N1ZSIsInVuZGVmaW5lZCIsImZsb3ciLCJzZXJ2ZXIiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJsYXRlciIsInNlbGYiLCJjbGllbnQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInN0YWNrIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsIm9uIiwiZGVmZXIiLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0s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QUFDbkMsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSTNCLE1BQU9tRCxRQUFQLEtBQXFCLENBQUM5QyxRQUFTOEMsUUFBVCxFQUFtQjVCLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFNBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxPQUFLNEIsSUFBTCxDQUFXLFFBQVgsRUFBcUJELFFBQXJCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBcEJEOztBQXNCQXhCLFNBQVFnRCxTQUFSLENBQWtCTyxPQUFsQixHQUE0QixTQUFTQSxPQUFULEdBQW1CO0FBQzlDLFNBQU8sS0FBS2hELE1BQUwsRUFBUDtBQUNBLEVBRkQ7O0FBSUFQLFNBQVFnRCxTQUFSLENBQWtCUSxRQUFsQixHQUE2QixTQUFTQSxRQUFULEdBQW9CO0FBQ2hELFNBQU8xRSxRQUFTLEtBQUt5QixNQUFMLEVBQVQsQ0FBUDtBQUNBLEVBRkQ7O0FBSUEsUUFBT1AsT0FBUDtBQUNBLENBNXRCRDs7QUE4dEJBeUQsT0FBT0MsT0FBUCxHQUFpQmhFLE9BQWpCIiwiZmlsZSI6ImNhdGNoZXIuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV0Z29cIixcblx0XHRcdFwicGF0aFwiOiBcImxldGdvL2NhdGNoZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJjYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xldGdvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwibGV0Z28tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2Vcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2F0Y2hlciBjbGFzcyBmYWN0b3J5IGZvciBoYW5kbGluZyBjYXRjaGVyLWZsb3cgcHJvY2VkdXJlLlxuXG5cdFx0TGF0ZXIgbWV0aG9kIHdpbGwgYmUgZXhlY3V0ZWQgb25jZSwgYW5kIGFsbCBjYWxsYmFja3Mgd2lsbCBiZSBleGVjdXRlZCBvbmNlLlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJiYWNrZFwiOiBcImJhY2tkXCIsXG5cdFx0XHRcImJ1cm5lXCI6IFwiYnVybmVcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJlZG9cIjogXCJlZG9cIixcblx0XHRcdFwiZXhlY2RcIjogXCJleGVjZFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImZpbGxlZFwiOiBcImZpbGxlZFwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInN0YXRpc1wiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwid2ljaGlzXCI6IFwid2ljaGlzXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJhY2tkID0gcmVxdWlyZSggXCJiYWNrZFwiICk7XG5jb25zdCBidXJuZSA9IHJlcXVpcmUoIFwiYnVybmVcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZWRvID0gcmVxdWlyZSggXCJlZG9cIiApO1xuY29uc3QgZXhlY2QgPSByZXF1aXJlKCBcImV4ZWNkXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHN0YXRpcyA9IHJlcXVpcmUoIFwic3RhdGlzXCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB3aWNoaXMgPSByZXF1aXJlKCBcIndpY2hpc1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgQ0FDSEUgPSBTeW1ib2woIFwiY2FjaGVcIiApO1xuY29uc3QgQ0FMTEJBQ0sgPSBTeW1ib2woIFwiY2FsbGJhY2tcIiApO1xuY29uc3QgREVGRVIgPSBTeW1ib2woIFwiZGVmZXJcIiApO1xuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSU5TVEFOQ0UgPSBTeW1ib2woIFwiaW5zdGFuY2VcIiApO1xuY29uc3QgUkVTVUxUID0gU3ltYm9sKCBcInJlc3VsdFwiICk7XG5jb25zdCBTVE9QUEVEID0gU3ltYm9sKCBcInN0b3BwZWRcIiApO1xuXG5jb25zdCBjYXRjaGVyID0gZnVuY3Rpb24gY2F0Y2hlciggbWV0aG9kICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhcHJvdHlwZSggbWV0aG9kLCBGVU5DVElPTiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWV0aG9kXCIgKTtcblx0fVxuXG5cdGxldCBjb250ZXh0ID0gemVsZiggdGhpcyApO1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgKXtcblx0XHRtZXRob2QgPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBtZXRob2QgKTtcblx0fVxuXG5cdGxldCBDYXRjaGVyID0gZGlhdG9tKCBcIkNhdGNoZXJcIiApO1xuXG5cdENhdGNoZXIgPSBoZXJlZGl0byggQ2F0Y2hlciwgZWRvLmJpbmQoIGNvbnRleHQgKSggKSApO1xuXG5cdENhdGNoZXIgPSBzeW1iaW90ZSggQ2F0Y2hlciwgXCJFdmVudFwiICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRXZSBzaG91bGQgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBFdmVudCBoZXJlLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRsZXQgZXZlbnQgPSBlZG8uYmluZCggY29udGV4dCApKCApKCApO1xuXG5cdHN0YXRpcyggQ2F0Y2hlciApXG5cdFx0LmF0dGFjaCggRVZFTlQsIGV2ZW50IClcblx0XHQuYXR0YWNoKCBDQUNIRSwgeyB9IClcblx0XHQuYXR0YWNoKCBDQUxMQkFDSywgWyBdIClcblx0XHQuaW1wbGVtZW50KCBcImRvbmVcIiwgZnVuY3Rpb24gZG9uZSggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLmRvbmUoICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWxlYXNlIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWxlYXNlKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVjb3JkXCIsIGZ1bmN0aW9uIHJlY29yZCggcmVzdWx0ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHJlY29yZCByZXN1bHQgb24gaW5hY3RpdmUgY2F0Y2hlclwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnJlY29yZCggcmVzdWx0ICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJwYXNzXCIsIGZ1bmN0aW9uIHBhc3MoIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXI6cmVxdWlyZWRcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5wYXNzLmFwcGx5KCB0aGlzWyBJTlNUQU5DRSBdLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0LmFwcGx5KCBjb250ZXh0LCBbIFwicGFzczpjYXRjaGVyXCIgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwic3RvcFwiLCBmdW5jdGlvbiBzdG9wKCApe1xuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhpcy5yZWxlYXNlKCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVtaXQoIFwicmVsZWFzZVwiICk7XG5cdFx0XHR0aGlzLmZsdXNoKCApO1xuXG5cdFx0XHRidXJuZSggU1RPUFBFRCwgQ2F0Y2hlciApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInNldFwiLCBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZ2V0XCIsIGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImxhc3RseVwiLCBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucHVzaCggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ0aGVuXCIsIGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS50aGVuKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQubWVyZ2UoIGV2ZW50ICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGVzZSBtZXRob2RzIHNob3VsZCBub3QgYmUgYWNjZXNzaWJsZSBvdXRzaWRlIHRocm91Z2ggdGhlIGNhdGNoZXIuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGxldCBwdXNoID0gZnVuY3Rpb24gcHVzaCggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGxldCBuZXh0ID0gZnVuY3Rpb24gbmV4dCggZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlcnJvclwiOiBFcnJvcixcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblx0XHRpZiggKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICkgJiYgcHJvdHlwZSggdGhpc1sgREVGRVIgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhpc1sgREVGRVIgXSggZXJyb3IgKTtcblx0XHR9XG5cblx0XHRsZXQgY2FsbGJhY2sgPSB0aGlzWyBDQUxMQkFDSyBdLnNwbGljZSggMCwgMSApLnBvcCggKTtcblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSApe1xuXHRcdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXG5cdFx0XHR0aGlzLmVtaXQoIFwibGFzdGx5XCIgKTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIG1ldGhvZCBpbnRlbnRpb25hbGx5IGNhbGxzIHRoZSBjYWxsYmFjayB3aXRob3V0IHBhcmFtZXRlcnNcblx0XHRcdFx0XHRcdHRoZW4gaXQgaGFsdHMgdGhlIGNoYWluLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggYXJpZCggYXJndW1lbnRzICkgKXtcblx0XHRcdFx0cmVzdWx0ID0gY2FsbGJhY2suY2FsbCggY29udGV4dCApO1xuXG5cdFx0XHRcdGZsdXNoLmJpbmQoIHRoaXMgKSggKTtcblxuXHRcdFx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMiApO1xuXG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KCBjb250ZXh0LCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goIGlzc3VlICl7XG5cdFx0XHRlcnJvciA9IGlzc3VlO1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYoIHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRlcnJvciA9IHJlc3VsdDtcblxuXHRcdFx0cmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbGJhY2sgaXMgcGFzc2VkIG9uIHRoZSBuZXh0IGNhbGxiYWNrLlxuXG5cdFx0XHRcdElmIHRoZSBjYWxsYmFjayBlbmNvdW50ZXJzIGFuIGVycm9yLCBpdCBpcyB1cCBmb3IgdGhlIG5leHQgY2FsbGJhY2tcblx0XHRcdFx0XHR0byBjb250aW51ZSB0aGUgY2hhaW4gb3IgaGFsdHMgdGhlIGNoYWluLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggISggcmVzdWx0IGluc3RhbmNlb2YgQ2F0Y2hlciApICYmIGZpbGxlZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRuZXh0LmFwcGx5KCB0aGlzLCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRsZXQgZmxvdyA9IGZ1bmN0aW9uIGZsb3coIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLnNldCggXCJwYXJhbWV0ZXJcIiwgcGFyYW1ldGVyICk7XG5cblx0XHRpZiggZmFsenkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuXHRcdFx0XHR9LmJpbmQoIHtcblx0XHRcdFx0XHRcInNlbGZcIjogdGhpcyxcblx0XHRcdFx0XHRcImNvbnRleHRcIjogY29udGV4dCxcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFx0XHRcdFwibmV4dFwiOiBuZXh0XG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggYGZhaWxlZCBmbG93IG1ldGhvZCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IGZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0d2hpbGUoIHRoaXNbIENBTExCQUNLIF0ubGVuZ3RoICkgdGhpc1sgQ0FMTEJBQ0sgXS5wb3AoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggY2FsbGJhY2ssIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRsZXQgc2VsZiA9IENhdGNoZXJbIElOU1RBTkNFIF0gPSB0aGlzO1xuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXSA9IHdpY2hpcyggQ2F0Y2hlclsgQ0FMTEJBQ0sgXSwgWyBdICk7XG5cblx0XHR0aGlzWyBDQUNIRSBdID0gQ2F0Y2hlclsgQ0FDSEUgXTtcblxuXHRcdHRyeXtcblx0XHRcdHRoaXMubWVyZ2UoIENhdGNoZXJbIEVWRU5UIF0gKTtcblxuXHRcdFx0aWYoIHByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdFx0Zmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub24oIFwicGFzczpjYXRjaGVyXCIsIGZ1bmN0aW9uIHBhc3MoICl7XG5cdFx0XHRcdHNlbGYucGFzcy5hcHBseSggc2VsZiwgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0dGhpcy5sYXN0bHkoIGZ1bmN0aW9uIGxhc3RseSggKXtcblx0XHRcdFx0c2VsZi5zdG9wKCApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdG5leHQuYmluZCggdGhpcyApKCBuZXcgRXJyb3IoIGBmYWlsZWQgY2F0Y2hlciwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0fWZpbmFsbHl7XG5cdFx0XHRkZWxldGUgdGhpcy5pbml0aWFsaXplO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gZG9uZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICYmIGV4ZWNkKCBtZXRob2QgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiB0aGVuKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCAha2VpbiggQ0FMTEJBQ0ssIHRoaXMgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhdGNoZXIgaGFzIGJlZW4gcmVsZWFzZWQsIGNhbm5vdCBwdXNoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJsYXRlciBtZXRob2QgZXhlY3V0ZWQsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uIHBhc3MoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRGbG93IHRoZSBtZXRob2QgaWYgbm90IHlldCBjYWxsZWQuXG5cblx0XHRcdFx0SXQgaXMgdGhlIGRldmVsb3BlciByZXNwb25zaWJpbGl0eSB0byBwdXNoIGEgY2FsbGJhY2tcblx0XHRcdFx0XHRiZWZvcmUgcGFzc2luZyBmbG93LlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiBmbG93LmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblx0XHR9XG5cblx0XHRuZXh0LmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmRlZmVyID0gZnVuY3Rpb24gZGVmZXIoIGhhbmRsZXIsIHN0cmljdCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJzdHJpY3RcIjogXCJib29sZWFuXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGtlaW4oIERFRkVSLCB0aGlzICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBkZWZlciBoYW5kbGVyXCIgKTtcblx0XHR9XG5cblx0XHRpZiggc3RyaWN0ID09PSB0cnVlICl7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBmdW5jdGlvbiBkZWxlZ2F0ZSggZXJyb3IgKXtcblx0XHRcdFx0aGFuZGxlci5jYWxsKCB0aGlzLCBlcnJvciApO1xuXG5cdFx0XHRcdGZsdXNoLmJpbmQoIHNlbGYgKSggKTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGhhbmRsZXIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZWNvcmQgPSBmdW5jdGlvbiByZWNvcmQoIHJlc3VsdCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0aGlzWyBSRVNVTFQgXSA9IHJlc3VsdDtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGZsdXNoLmJpbmQoIHRoaXMgKSggKTtcblxuXHRcdGRlbGV0ZSB0aGlzWyBDQUxMQkFDSyBdO1xuXHRcdGRlbGV0ZSB0aGlzWyBERUZFUiBdO1xuXG5cdFx0bGV0IHJlc3VsdCA9IHRoaXNbIFJFU1VMVCBdO1xuXHRcdGRlbGV0ZSB0aGlzWyBSRVNVTFQgXTtcblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoICl7XG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWxlYXNlKCApO1xuXG5cdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdENhdGNoZXIuZmx1c2goICk7XG5cblx0XHRidXJuZSggU1RPUFBFRCwgQ2F0Y2hlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCApe1xuXHRcdHJldHVybiB0aGlzWyBSRVNVTFQgXTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCBwcm9wZXJ0eSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmxhc3RseSA9IGZ1bmN0aW9uIGxhc3RseSggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbmNlKCBcImxhc3RseVwiLCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXMucmVzdWx0KCApO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHN0cmluZ2UoIHRoaXMucmVzdWx0KCApICk7XG5cdH07XG5cblx0cmV0dXJuIENhdGNoZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhdGNoZXI7XG4iXX0=
//# sourceMappingURL=catcher.support.js.map
