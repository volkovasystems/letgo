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
              			"idntty": "idntty",
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
var idntty = require("idntty");
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
var PAUSED = (0, _symbol2.default)("paused");
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

		if (!(result instanceof Catcher)) {
			this.set("result", result);
		}

		/*;
    	@note:
    		The result of the last callback is passed on the next callback.
    			If the callback encounters an error, it is up for the next callback
    			to continue the chain or halts the chain.
    			Automatic call of the next callback if the result is a catcher,
    			if the callbacks are not empty and the catcher is not paused.
    	@end-note
    */


		if (!(result instanceof Catcher) && filled(this[CALLBACK]) && !this[PAUSED]) {
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

		/*;
    	@note:
    		Possibility that the catcher is paused before flowing.
    	@end-note
    */
		this.unpause();

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

	var Catcher = diatom("Catcher");

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

			if (kein(PAUSED, Catcher)) {
				this[PAUSED] = Catcher[PAUSED];
			}

			var identity = idntty(Catcher).toString();
			this.on(identity + ":pass", function pass() {
				self.pass.apply(self, raze(arguments));
			}, { "disableOnListenerNotification": true });

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

		this.unpause();

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

	Catcher.prototype.pause = function pause() {
		this[PAUSED] = true;

		Catcher[PAUSED] = true;

		return this;
	};

	Catcher.prototype.unpause = function unpause() {
		this[PAUSED] = false;

		Catcher[PAUSED] = false;

		return this;
	};

	Catcher.prototype.through = function through(flow, error, result, parameter) {
		/*;
                                                                               	@meta-configuration:
                                                                               		{
                                                                               			"flow:required": "string",
                                                                               			"error:required": [
                                                                               				null,
                                                                               				Error
                                                                               			],
                                                                               			"result:required": "*"
                                                                               			"parameter": "..."
                                                                               		}
                                                                               	@end-meta-configuration
                                                                               */

		if (mrkd(STOPPED, Catcher, true) || arid(this[CALLBACK])) {
			return this;
		}

		if (falzy(flow) || !protype(flow, STRING)) {
			throw new Error("invalid flow");
		}

		parameter = shft(arguments, 3);

		this.emit.apply(this, ["flow:" + flow, error, result].concat(parameter));

		return this;
	};

	Catcher.prototype.flow = function flow(name, handler) {
		/*;
                                                        	@meta-configuration:
                                                        		{
                                                        			"name:required": "string",
                                                        			"handler:required": "function"
                                                        		}
                                                        	@end-meta-configuration
                                                        */

		if (mrkd(STOPPED, Catcher, true) || arid(this[CALLBACK])) {
			return this;
		}

		if (falzy(name) || !protype(name, STRING)) {
			throw new Error("invalid flow name");
		}

		if (falzy(handler) || !protype(handler, FUNCTION)) {
			throw new Error("invalid flow handler");
		}

		this.once("flow:" + flow, handler);

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

		var identity = idntty(Catcher).toString();
		this.emit.apply(context, [identity + ":pass"].concat(parameter));

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
	implement("pause", function pause() {
		if (mrkd(STOPPED, Catcher, true) || arid(this[CALLBACK])) {
			return this;
		}

		this[PAUSED] = true;

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].pause();
		}

		return this;
	}).
	implement("unpause", function pause() {
		if (mrkd(STOPPED, Catcher, true) || arid(this[CALLBACK])) {
			return this;
		}

		this[PAUSED] = false;

		if (kein(INSTANCE, this)) {
			return this[INSTANCE].unpause();
		}

		return this;
	}).
	implement("through", function through(flow, error, result, parameter) {
		/*;
                                                                        	@meta-configuration:
                                                                        		{
                                                                        			"flow:required": "string",
                                                                        			"error:required": [
                                                                        				null,
                                                                        				Error
                                                                        			],
                                                                        			"result:required": "*"
                                                                        			"parameter": "..."
                                                                        		}
                                                                        	@end-meta-configuration
                                                                        */

		if (mrkd(STOPPED, Catcher, true) || arid(this[CALLBACK])) {
			return this;
		}

		if (falzy(flow) || !protype(flow, STRING)) {
			throw new Error("invalid flow");
		}

		parameter = shft(arguments, 3);

		this.emit.apply(this, ["flow:" + flow, error, result].concat(parameter));

		return this;
	}).
	implement("flow", function flow(name, handler) {
		/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"name:required": "string",
                                                 			"handler:required": "function"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

		if (mrkd(STOPPED, Catcher, true) || arid(this[CALLBACK])) {
			return this;
		}

		if (falzy(name) || !protype(name, STRING)) {
			throw new Error("invalid flow name");
		}

		if (falzy(handler) || !protype(handler, FUNCTION)) {
			throw new Error("invalid flow handler");
		}

		this.once("flow:" + name, handler);

		return this;
	}).
	merge(event);

	return Catcher;
};

module.exports = catcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImJ1cm5lIiwiY2FsbGVkIiwiZGlhdG9tIiwiZWRvIiwiZXhlY2QiLCJmYWx6eSIsImZpbGxlZCIsImhlcmVkaXRvIiwiaWRudHR5Iiwia2VpbiIsIm1ya2QiLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsIndpY2hpcyIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUEFVU0VEIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJwdXNoIiwiY2FsbGJhY2siLCJuZXh0IiwiZXJyb3IiLCJyZXN1bHQiLCJwYXJhbWV0ZXIiLCJzcGxpY2UiLCJwb3AiLCJzZXQiLCJlbWl0IiwiYXJndW1lbnRzIiwiY2FsbCIsImZsdXNoIiwiYXBwbHkiLCJjb25jYXQiLCJpc3N1ZSIsInVuZGVmaW5lZCIsIkNhdGNoZXIiLCJmbG93IiwidW5wYXVzZSIsInNlcnZlciIsInByb2Nlc3MiLCJuZXh0VGljayIsImxhdGVyIiwic2VsZiIsInJlY29yZCIsImNsaWVudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3RhY2siLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwibWVyZ2UiLCJkZWZlciIsImlkZW50aXR5IiwidG9TdHJpbmciLCJvbiIsInBhc3MiLCJsYXN0bHkiLCJzdG9wIiwiZG9uZSIsInRoZW4iLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJyZWxlYXNlIiwicHJvcGVydHkiLCJ2YWx1ZSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsImdldCIsIm9uY2UiLCJwYXVzZSIsInRocm91Z2giLCJuYW1lIiwidmFsdWVPZiIsImV2ZW50IiwiYXR0YWNoIiwiaW1wbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFNBQVNMLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU0sTUFBTU4sUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNTyxRQUFRUCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1RLFFBQVFSLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVMsU0FBU1QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNVSxXQUFXVixRQUFTLFVBQVQsQ0FBakI7QUFDQSxJQUFNVyxTQUFTWCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1ZLE9BQU9aLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWEsT0FBT2IsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNYyxVQUFVZCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNZSxPQUFPZixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1nQixPQUFPaEIsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNaUIsU0FBU2pCLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWtCLFVBQVVsQixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNbUIsV0FBV25CLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1vQixRQUFRcEIsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNcUIsU0FBU3JCLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTXNCLE9B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O0FBKzhCQTZDLE9BQU9DLE9BQVAsR0FBaUJyRSxPQUFqQiIsImZpbGUiOiJjYXRjaGVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXRnby9jYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2F0Y2hlci5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV0Z29cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENhdGNoZXIgY2xhc3MgZmFjdG9yeSBmb3IgaGFuZGxpbmcgY2F0Y2hlci1mbG93IHByb2NlZHVyZS5cblxuXHRcdExhdGVyIG1ldGhvZCB3aWxsIGJlIGV4ZWN1dGVkIG9uY2UsIGFuZCBhbGwgY2FsbGJhY2tzIHdpbGwgYmUgZXhlY3V0ZWQgb25jZS5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYmFja2RcIjogXCJiYWNrZFwiLFxuXHRcdFx0XCJidXJuZVwiOiBcImJ1cm5lXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZWRvXCI6IFwiZWRvXCIsXG5cdFx0XHRcImV4ZWNkXCI6IFwiZXhlY2RcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJpZG50dHlcIjogXCJpZG50dHlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwibXJrZFwiOiBcIm1ya2RcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwic3RhdGlzXCI6IFwic3RhdGlzXCIsXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ3aWNoaXNcIjogXCJ3aWNoaXNcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYmFja2QgPSByZXF1aXJlKCBcImJhY2tkXCIgKTtcbmNvbnN0IGJ1cm5lID0gcmVxdWlyZSggXCJidXJuZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZG8gPSByZXF1aXJlKCBcImVkb1wiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1ya2QgPSByZXF1aXJlKCBcIm1ya2RcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3Qgc3RhdGlzID0gcmVxdWlyZSggXCJzdGF0aXNcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHdpY2hpcyA9IHJlcXVpcmUoIFwid2ljaGlzXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBDQUNIRSA9IFN5bWJvbCggXCJjYWNoZVwiICk7XG5jb25zdCBDQUxMQkFDSyA9IFN5bWJvbCggXCJjYWxsYmFja1wiICk7XG5jb25zdCBERUZFUiA9IFN5bWJvbCggXCJkZWZlclwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBJTlNUQU5DRSA9IFN5bWJvbCggXCJpbnN0YW5jZVwiICk7XG5jb25zdCBQQVVTRUQgPSBTeW1ib2woIFwicGF1c2VkXCIgKTtcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xuY29uc3QgU1RPUFBFRCA9IFN5bWJvbCggXCJzdG9wcGVkXCIgKTtcblxuY29uc3QgY2F0Y2hlciA9IGZ1bmN0aW9uIGNhdGNoZXIoIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgY29udGV4dCA9IHplbGYoIHRoaXMgKTtcblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0bWV0aG9kID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggbWV0aG9kICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhY2Nlc3NpYmxlIG91dHNpZGUgdGhyb3VnaCB0aGUgY2F0Y2hlci5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IHB1c2ggPSBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0bGV0IG5leHQgPSBmdW5jdGlvbiBuZXh0KCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXHRcdGlmKCAoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKSAmJiBwcm90eXBlKCB0aGlzWyBERUZFUiBdLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aGlzWyBERUZFUiBdKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdGxldCBjYWxsYmFjayA9IHRoaXNbIENBTExCQUNLIF0uc3BsaWNlKCAwLCAxICkucG9wKCApO1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApICl7XG5cdFx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHRcdHRoaXMuZW1pdCggXCJsYXN0bHlcIiApO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB0aGUgbWV0aG9kIGludGVudGlvbmFsbHkgY2FsbHMgdGhlIGNhbGxiYWNrIHdpdGhvdXQgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdFx0dGhlbiBpdCBoYWx0cyB0aGUgY2hhaW4uXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCBhcmlkKCBhcmd1bWVudHMgKSApe1xuXHRcdFx0XHRyZXN1bHQgPSBjYWxsYmFjay5jYWxsKCBjb250ZXh0LCBlcnJvciwgcmVzdWx0ICk7XG5cblx0XHRcdFx0Zmx1c2guYmluZCggdGhpcyApKCApO1xuXG5cdFx0XHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzLCAyICk7XG5cblx0XHRcdFx0cmVzdWx0ID0gY2FsbGJhY2suYXBwbHkoIGNvbnRleHQsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHRcdH1cblxuXHRcdH1jYXRjaCggaXNzdWUgKXtcblx0XHRcdGVycm9yID0gaXNzdWU7XG5cblx0XHRcdHJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiggcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdGVycm9yID0gcmVzdWx0O1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSApe1xuXHRcdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbGJhY2sgaXMgcGFzc2VkIG9uIHRoZSBuZXh0IGNhbGxiYWNrLlxuXG5cdFx0XHRcdElmIHRoZSBjYWxsYmFjayBlbmNvdW50ZXJzIGFuIGVycm9yLCBpdCBpcyB1cCBmb3IgdGhlIG5leHQgY2FsbGJhY2tcblx0XHRcdFx0XHR0byBjb250aW51ZSB0aGUgY2hhaW4gb3IgaGFsdHMgdGhlIGNoYWluLlxuXG5cdFx0XHRcdEF1dG9tYXRpYyBjYWxsIG9mIHRoZSBuZXh0IGNhbGxiYWNrIGlmIHRoZSByZXN1bHQgaXMgYSBjYXRjaGVyLFxuXHRcdFx0XHRcdGlmIHRoZSBjYWxsYmFja3MgYXJlIG5vdCBlbXB0eSBhbmQgdGhlIGNhdGNoZXIgaXMgbm90IHBhdXNlZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSAmJiBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSAmJiAhdGhpc1sgUEFVU0VEIF0gKXtcblx0XHRcdG5leHQuYXBwbHkoIHRoaXMsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGxldCBmbG93ID0gZnVuY3Rpb24gZmxvdyggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc2V0KCBcInBhcmFtZXRlclwiLCBwYXJhbWV0ZXIgKTtcblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IHRoYXQgdGhlIGNhdGNoZXIgaXMgcGF1c2VkIGJlZm9yZSBmbG93aW5nLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHR0aGlzLnVucGF1c2UoICk7XG5cblx0XHR0cnl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuXHRcdFx0XHR9LmJpbmQoIHtcblx0XHRcdFx0XHRcInNlbGZcIjogdGhpcyxcblx0XHRcdFx0XHRcImNvbnRleHRcIjogY29udGV4dCxcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFx0XHRcdFwibmV4dFwiOiBuZXh0XG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggYGZhaWxlZCBmbG93IG1ldGhvZCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IGZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0d2hpbGUoIHRoaXNbIENBTExCQUNLIF0ubGVuZ3RoICkgdGhpc1sgQ0FMTEJBQ0sgXS5wb3AoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRsZXQgQ2F0Y2hlciA9IGRpYXRvbSggXCJDYXRjaGVyXCIgKTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggY2FsbGJhY2ssIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRsZXQgc2VsZiA9IENhdGNoZXJbIElOU1RBTkNFIF0gPSB0aGlzO1xuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXSA9IHdpY2hpcyggQ2F0Y2hlclsgQ0FMTEJBQ0sgXSwgWyBdICk7XG5cblx0XHR0aGlzWyBDQUNIRSBdID0gQ2F0Y2hlclsgQ0FDSEUgXTtcblxuXHRcdHRyeXtcblx0XHRcdHRoaXMubWVyZ2UoIENhdGNoZXJbIEVWRU5UIF0gKTtcblxuXHRcdFx0aWYoIHByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdFx0Zmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBERUZFUiwgQ2F0Y2hlciApICl7XG5cdFx0XHRcdHRoaXMuZGVmZXIoIENhdGNoZXJbIERFRkVSIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIFBBVVNFRCwgQ2F0Y2hlciApICl7XG5cdFx0XHRcdHRoaXNbIFBBVVNFRCBdID0gQ2F0Y2hlclsgUEFVU0VEIF07XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggQ2F0Y2hlciApLnRvU3RyaW5nKCApO1xuXHRcdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06cGFzc2AsIGZ1bmN0aW9uIHBhc3MoICl7XG5cdFx0XHRcdHNlbGYucGFzcy5hcHBseSggc2VsZiwgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0XHRcdH0sIHsgXCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvblwiOiB0cnVlIH0gKTtcblxuXHRcdFx0dGhpcy5sYXN0bHkoIGZ1bmN0aW9uIGxhc3RseSggKXtcblx0XHRcdFx0c2VsZi5zdG9wKCApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdG5leHQuYmluZCggdGhpcyApKCBuZXcgRXJyb3IoIGBmYWlsZWQgY2F0Y2hlciwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0fWZpbmFsbHl7XG5cdFx0XHRkZWxldGUgdGhpcy5pbml0aWFsaXplO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gZG9uZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICYmIGV4ZWNkKCBtZXRob2QgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgcHVzaCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgJiYgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0RmxvdyB0aGUgbWV0aG9kIGlmIG5vdCB5ZXQgY2FsbGVkLlxuXG5cdFx0XHRcdEl0IGlzIHRoZSBkZXZlbG9wZXIgcmVzcG9uc2liaWxpdHkgdG8gcHVzaCBhIGNhbGxiYWNrXG5cdFx0XHRcdFx0YmVmb3JlIHBhc3NpbmcgZmxvdy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gZmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0fVxuXG5cdFx0dGhpcy51bnBhdXNlKCApO1xuXG5cdFx0bmV4dC5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwic3RyaWN0XCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVmZXIgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIHN0cmljdCA9PT0gdHJ1ZSApe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggZnVuY3Rpb24gZGVsZWdhdGUoIGVycm9yICl7XG5cdFx0XHRcdGhhbmRsZXIuY2FsbCggdGhpcywgZXJyb3IgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBoYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVjb3JkID0gZnVuY3Rpb24gcmVjb3JkKCByZXN1bHQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpc1sgUkVTVUxUIF0gPSByZXN1bHQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gcmVsZWFzZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRkZWxldGUgdGhpc1sgQ0FMTEJBQ0sgXTtcblx0XHRkZWxldGUgdGhpc1sgREVGRVIgXTtcblxuXHRcdGxldCByZXN1bHQgPSB0aGlzWyBSRVNVTFQgXTtcblx0XHRkZWxldGUgdGhpc1sgUkVTVUxUIF07XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCApe1xuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXMucmVsZWFzZSggKTtcblxuXHRcdHRoaXMuZW1pdCggXCJyZWxlYXNlXCIgKTtcblx0XHRDYXRjaGVyLmZsdXNoKCApO1xuXG5cdFx0YnVybmUoIFNUT1BQRUQsIENhdGNoZXIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCggKXtcblx0XHRyZXR1cm4gdGhpc1sgUkVTVUxUIF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5sYXN0bHkgPSBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHRoaXMub25jZSggXCJsYXN0bHlcIiwgY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoICl7XG5cdFx0dGhpc1sgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0Q2F0Y2hlclsgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudW5wYXVzZSA9IGZ1bmN0aW9uIHVucGF1c2UoICl7XG5cdFx0dGhpc1sgUEFVU0VEIF0gPSBmYWxzZTtcblxuXHRcdENhdGNoZXJbIFBBVVNFRCBdID0gZmFsc2U7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50aHJvdWdoID0gZnVuY3Rpb24gdGhyb3VnaCggZmxvdywgZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJmbG93OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJlcnJvcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0RXJyb3Jcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBmbG93ICkgfHwgIXByb3R5cGUoIGZsb3csIFNUUklORyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBmbG93XCIgKTtcblx0XHR9XG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDMgKTtcblxuXHRcdHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBgZmxvdzokeyBmbG93IH1gLCBlcnJvciwgcmVzdWx0IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZmxvdyA9IGZ1bmN0aW9uIGZsb3coIG5hbWUsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIG5hbWUgKSB8fCAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgbmFtZVwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbmNlKCBgZmxvdzokeyBmbG93IH1gLCBoYW5kbGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZiggKXtcblx0XHRyZXR1cm4gdGhpcy5yZXN1bHQoICk7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyggKXtcblx0XHRyZXR1cm4gc3RyaW5nZSggdGhpcy5yZXN1bHQoICkgKTtcblx0fTtcblxuXHRDYXRjaGVyID0gaGVyZWRpdG8oIENhdGNoZXIsIGVkby5iaW5kKCBjb250ZXh0ICkoICkgKTtcblxuXHRDYXRjaGVyID0gc3ltYmlvdGUoIENhdGNoZXIsIFwiRXZlbnRcIiApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0V2Ugc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgRXZlbnQgaGVyZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IGV2ZW50ID0gZWRvLmJpbmQoIGNvbnRleHQgKSggKSggKTtcblxuXHRzdGF0aXMoIENhdGNoZXIgKVxuXHRcdC5hdHRhY2goIEVWRU5ULCBldmVudCApXG5cdFx0LmF0dGFjaCggQ0FDSEUsIHsgfSApXG5cdFx0LmF0dGFjaCggQ0FMTEJBQ0ssIFsgXSApXG5cdFx0LmltcGxlbWVudCggXCJkb25lXCIsIGZ1bmN0aW9uIGRvbmUoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5kb25lKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVsZWFzZVwiLCBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoICFrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcmVsZWFzZSBpbmFjdGl2ZSBjYXRjaGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucmVsZWFzZSggKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlY29yZFwiLCBmdW5jdGlvbiByZWNvcmQoIHJlc3VsdCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWNvcmQgcmVzdWx0IG9uIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWNvcmQoIHJlc3VsdCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicGFzc1wiLCBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyOnJlcXVpcmVkXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucGFzcy5hcHBseSggdGhpc1sgSU5TVEFOQ0UgXSwgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggQ2F0Y2hlciApLnRvU3RyaW5nKCApO1xuXHRcdFx0dGhpcy5lbWl0LmFwcGx5KCBjb250ZXh0LCBbIGAkeyBpZGVudGl0eSB9OnBhc3NgIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInN0b3BcIiwgZnVuY3Rpb24gc3RvcCggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRoaXMucmVsZWFzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdFx0dGhpcy5mbHVzaCggKTtcblxuXHRcdFx0YnVybmUoIFNUT1BQRUQsIENhdGNoZXIgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJzZXRcIiwgZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImdldFwiLCBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsYXN0bHlcIiwgZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbmNlKCBcImxhc3RseVwiLCBjYWxsYmFjayApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInB1c2hcIiwgZnVuY3Rpb24gcHVzaCggY2FsbGJhY2sgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZpbGxlZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJwdXNoIGNhbGxiYWNrIG9uY2UsIGNhbm5vdCBwdXNoIGNhbGxiYWNrIGFnYWluXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiBleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImxhdGVyIG1ldGhvZCBleGVjdXRlZCwgY2Fubm90IGZvbGxvdyB3aXRoIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnB1c2goIGNhbGxiYWNrICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIENBTExCQUNLIF0ucHVzaCggYmFja2QuYmluZCggY29udGV4dCApKCBjYWxsYmFjayApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwidGhlblwiLCBmdW5jdGlvbiB0aGVuKCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIG1ldGhvZCApICYmIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIGV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0udGhlbiggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJkZWZlclwiLCBmdW5jdGlvbiBkZWZlciggaGFuZGxlciwgc3RyaWN0ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpY3RcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBkZWZlciBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0udGhlbiggaGFuZGxlciwgc3RyaWN0ICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggc3RyaWN0ID09PSB0cnVlICl7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggZnVuY3Rpb24gZGVsZWdhdGUoIGVycm9yICl7XG5cdFx0XHRcdFx0aGFuZGxlci5jYWxsKCB0aGlzLCBlcnJvciApO1xuXG5cdFx0XHRcdFx0Zmx1c2guYmluZCggc2VsZiApKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBoYW5kbGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicGF1c2VcIiwgZnVuY3Rpb24gcGF1c2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5wYXVzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ1bnBhdXNlXCIsIGZ1bmN0aW9uIHBhdXNlKCApe1xuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSB8fCBhcmlkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIFBBVVNFRCBdID0gZmFsc2U7XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnVucGF1c2UoICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwidGhyb3VnaFwiLCBmdW5jdGlvbiB0aHJvdWdoKCBmbG93LCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZmxvdzpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJlcnJvcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdEVycm9yXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBmbG93ICkgfHwgIXByb3R5cGUoIGZsb3csIFNUUklORyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3dcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDMgKTtcblxuXHRcdFx0dGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGBmbG93OiR7IGZsb3cgfWAsIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZmxvd1wiLCBmdW5jdGlvbiBmbG93KCBuYW1lLCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBuYW1lICkgfHwgIXByb3R5cGUoIG5hbWUsIFNUUklORyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgbmFtZVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgaGFuZGxlclwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub25jZSggYGZsb3c6JHsgbmFtZSB9YCwgaGFuZGxlciApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQubWVyZ2UoIGV2ZW50ICk7XG5cblx0cmV0dXJuIENhdGNoZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhdGNoZXI7XG4iXX0=
//# sourceMappingURL=catcher.support.js.map
