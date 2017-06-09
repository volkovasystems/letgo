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

	return Catcher;
};

module.exports = catcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImJ1cm5lIiwiY2FsbGVkIiwiZGlhdG9tIiwiZWRvIiwiZXhlY2QiLCJmYWx6eSIsImZpbGxlZCIsImhlcmVkaXRvIiwiaWRudHR5Iiwia2VpbiIsIm1ya2QiLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsIndpY2hpcyIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUEFVU0VEIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJDYXRjaGVyIiwiZXZlbnQiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJkb25lIiwicmVsZWFzZSIsInJlY29yZCIsInJlc3VsdCIsInBhc3MiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJhcHBseSIsImlkZW50aXR5IiwidG9TdHJpbmciLCJlbWl0IiwiY29uY2F0Iiwic3RvcCIsImZsdXNoIiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsIk5VTUJFUiIsIlNUUklORyIsIlNZTUJPTCIsImdldCIsImxhc3RseSIsImNhbGxiYWNrIiwib25jZSIsInB1c2giLCJ0aGVuIiwiZGVmZXIiLCJoYW5kbGVyIiwic3RyaWN0Iiwic2VsZiIsImRlbGVnYXRlIiwiZXJyb3IiLCJjYWxsIiwicGF1c2UiLCJ1bnBhdXNlIiwidGhyb3VnaCIsImZsb3ciLCJuYW1lIiwibWVyZ2UiLCJuZXh0Iiwic3BsaWNlIiwicG9wIiwiaXNzdWUiLCJ1bmRlZmluZWQiLCJzZXJ2ZXIiLCJwcm9jZXNzIiwibmV4dFRpY2siLCJsYXRlciIsImNsaWVudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3RhY2siLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwib24iLCJ2YWx1ZU9mIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFNBQVNMLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU0sTUFBTU4sUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNTyxRQUFRUCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1RLFFBQVFSLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVMsU0FBU1QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNVSxXQUFXVixRQUFTLFVBQVQsQ0FBakI7QUFDQSxJQUFNVyxTQUFTWCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1ZLE9BQU9aLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWEsT0FBT2IsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNYyxVQUFVZCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNZSxPQUFPZixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1nQixPQUFPaEIsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNaUIsU0FBU2pCLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWtCLFVBQVVsQixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNbUIsV0FBV25CLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1vQixRQUFRcEIsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNcUIsU0FBU3JCLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTXNCLE9B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QU9QLE9BQVA7QUFDQSxDQTc4QkQ7O0FBKzhCQThELE9BQU9DLE9BQVAsR0FBaUJyRSxPQUFqQiIsImZpbGUiOiJjYXRjaGVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJsZXRnby9jYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiY2F0Y2hlci5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGV0Z29cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sZXRnby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImxldGdvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENhdGNoZXIgY2xhc3MgZmFjdG9yeSBmb3IgaGFuZGxpbmcgY2F0Y2hlci1mbG93IHByb2NlZHVyZS5cblxuXHRcdExhdGVyIG1ldGhvZCB3aWxsIGJlIGV4ZWN1dGVkIG9uY2UsIGFuZCBhbGwgY2FsbGJhY2tzIHdpbGwgYmUgZXhlY3V0ZWQgb25jZS5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYmFja2RcIjogXCJiYWNrZFwiLFxuXHRcdFx0XCJidXJuZVwiOiBcImJ1cm5lXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZWRvXCI6IFwiZWRvXCIsXG5cdFx0XHRcImV4ZWNkXCI6IFwiZXhlY2RcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJpZG50dHlcIjogXCJpZG50dHlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwibXJrZFwiOiBcIm1ya2RcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwic3RhdGlzXCI6IFwic3RhdGlzXCIsXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ3aWNoaXNcIjogXCJ3aWNoaXNcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYmFja2QgPSByZXF1aXJlKCBcImJhY2tkXCIgKTtcbmNvbnN0IGJ1cm5lID0gcmVxdWlyZSggXCJidXJuZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZG8gPSByZXF1aXJlKCBcImVkb1wiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1ya2QgPSByZXF1aXJlKCBcIm1ya2RcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3Qgc3RhdGlzID0gcmVxdWlyZSggXCJzdGF0aXNcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHdpY2hpcyA9IHJlcXVpcmUoIFwid2ljaGlzXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBDQUNIRSA9IFN5bWJvbCggXCJjYWNoZVwiICk7XG5jb25zdCBDQUxMQkFDSyA9IFN5bWJvbCggXCJjYWxsYmFja1wiICk7XG5jb25zdCBERUZFUiA9IFN5bWJvbCggXCJkZWZlclwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBJTlNUQU5DRSA9IFN5bWJvbCggXCJpbnN0YW5jZVwiICk7XG5jb25zdCBQQVVTRUQgPSBTeW1ib2woIFwicGF1c2VkXCIgKTtcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xuY29uc3QgU1RPUFBFRCA9IFN5bWJvbCggXCJzdG9wcGVkXCIgKTtcblxuY29uc3QgY2F0Y2hlciA9IGZ1bmN0aW9uIGNhdGNoZXIoIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgY29udGV4dCA9IHplbGYoIHRoaXMgKTtcblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0bWV0aG9kID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggbWV0aG9kICk7XG5cdH1cblxuXHRsZXQgQ2F0Y2hlciA9IGRpYXRvbSggXCJDYXRjaGVyXCIgKTtcblxuXHRDYXRjaGVyID0gaGVyZWRpdG8oIENhdGNoZXIsIGVkby5iaW5kKCBjb250ZXh0ICkoICkgKTtcblxuXHRDYXRjaGVyID0gc3ltYmlvdGUoIENhdGNoZXIsIFwiRXZlbnRcIiApO1xuXG5cdC8qO1xuXHRcdEBub3RlOlxuXHRcdFx0V2Ugc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgRXZlbnQgaGVyZS5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IGV2ZW50ID0gZWRvLmJpbmQoIGNvbnRleHQgKSggKSggKTtcblxuXHRzdGF0aXMoIENhdGNoZXIgKVxuXHRcdC5hdHRhY2goIEVWRU5ULCBldmVudCApXG5cdFx0LmF0dGFjaCggQ0FDSEUsIHsgfSApXG5cdFx0LmF0dGFjaCggQ0FMTEJBQ0ssIFsgXSApXG5cdFx0LmltcGxlbWVudCggXCJkb25lXCIsIGZ1bmN0aW9uIGRvbmUoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5kb25lKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVsZWFzZVwiLCBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoICFrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgcmVsZWFzZSBpbmFjdGl2ZSBjYXRjaGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucmVsZWFzZSggKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlY29yZFwiLCBmdW5jdGlvbiByZWNvcmQoIHJlc3VsdCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWNvcmQgcmVzdWx0IG9uIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWNvcmQoIHJlc3VsdCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicGFzc1wiLCBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyOnJlcXVpcmVkXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucGFzcy5hcHBseSggdGhpc1sgSU5TVEFOQ0UgXSwgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggQ2F0Y2hlciApLnRvU3RyaW5nKCApO1xuXHRcdFx0dGhpcy5lbWl0LmFwcGx5KCBjb250ZXh0LCBbIGAkeyBpZGVudGl0eSB9OnBhc3NgIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInN0b3BcIiwgZnVuY3Rpb24gc3RvcCggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHRoaXMucmVsZWFzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdFx0dGhpcy5mbHVzaCggKTtcblxuXHRcdFx0YnVybmUoIFNUT1BQRUQsIENhdGNoZXIgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJzZXRcIiwgZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImdldFwiLCBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsYXN0bHlcIiwgZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbmNlKCBcImxhc3RseVwiLCBjYWxsYmFjayApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInB1c2hcIiwgZnVuY3Rpb24gcHVzaCggY2FsbGJhY2sgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZpbGxlZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJwdXNoIGNhbGxiYWNrIG9uY2UsIGNhbm5vdCBwdXNoIGNhbGxiYWNrIGFnYWluXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiBleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImxhdGVyIG1ldGhvZCBleGVjdXRlZCwgY2Fubm90IGZvbGxvdyB3aXRoIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnB1c2goIGNhbGxiYWNrICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIENBTExCQUNLIF0ucHVzaCggYmFja2QuYmluZCggY29udGV4dCApKCBjYWxsYmFjayApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwidGhlblwiLCBmdW5jdGlvbiB0aGVuKCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIG1ldGhvZCApICYmIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIGV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0udGhlbiggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJkZWZlclwiLCBmdW5jdGlvbiBkZWZlciggaGFuZGxlciwgc3RyaWN0ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpY3RcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBkZWZlciBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0udGhlbiggaGFuZGxlciwgc3RyaWN0ICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggc3RyaWN0ID09PSB0cnVlICl7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggZnVuY3Rpb24gZGVsZWdhdGUoIGVycm9yICl7XG5cdFx0XHRcdFx0aGFuZGxlci5jYWxsKCB0aGlzLCBlcnJvciApO1xuXG5cdFx0XHRcdFx0Zmx1c2guYmluZCggc2VsZiApKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBoYW5kbGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicGF1c2VcIiwgZnVuY3Rpb24gcGF1c2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5wYXVzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ1bnBhdXNlXCIsIGZ1bmN0aW9uIHBhdXNlKCApe1xuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSB8fCBhcmlkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIFBBVVNFRCBdID0gZmFsc2U7XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnVucGF1c2UoICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwidGhyb3VnaFwiLCBmdW5jdGlvbiB0aHJvdWdoKCBmbG93LCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZmxvdzpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJlcnJvcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdEVycm9yXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBmbG93ICkgfHwgIXByb3R5cGUoIGZsb3csIFNUUklORyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3dcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDMgKTtcblxuXHRcdFx0dGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGBmbG93OiR7IGZsb3cgfWAsIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZmxvd1wiLCBmdW5jdGlvbiBmbG93KCBuYW1lLCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBuYW1lICkgfHwgIXByb3R5cGUoIG5hbWUsIFNUUklORyApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgbmFtZVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgaGFuZGxlclwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub25jZSggYGZsb3c6JHsgbmFtZSB9YCwgaGFuZGxlciApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQubWVyZ2UoIGV2ZW50ICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRUaGVzZSBtZXRob2RzIHNob3VsZCBub3QgYmUgYWNjZXNzaWJsZSBvdXRzaWRlIHRocm91Z2ggdGhlIGNhdGNoZXIuXG5cdFx0QGVuZC1ub3RlXG5cdCovXG5cdGxldCBwdXNoID0gZnVuY3Rpb24gcHVzaCggY2FsbGJhY2sgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGxldCBuZXh0ID0gZnVuY3Rpb24gbmV4dCggZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJlcnJvclwiOiBFcnJvcixcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblx0XHRpZiggKCBlcnJvciBpbnN0YW5jZW9mIEVycm9yICkgJiYgcHJvdHlwZSggdGhpc1sgREVGRVIgXSwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhpc1sgREVGRVIgXSggZXJyb3IgKTtcblx0XHR9XG5cblx0XHRsZXQgY2FsbGJhY2sgPSB0aGlzWyBDQUxMQkFDSyBdLnNwbGljZSggMCwgMSApLnBvcCggKTtcblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSApe1xuXHRcdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXG5cdFx0XHR0aGlzLmVtaXQoIFwibGFzdGx5XCIgKTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHR0cnl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIG1ldGhvZCBpbnRlbnRpb25hbGx5IGNhbGxzIHRoZSBjYWxsYmFjayB3aXRob3V0IHBhcmFtZXRlcnNcblx0XHRcdFx0XHRcdHRoZW4gaXQgaGFsdHMgdGhlIGNoYWluLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggYXJpZCggYXJndW1lbnRzICkgKXtcblx0XHRcdFx0cmVzdWx0ID0gY2FsbGJhY2suY2FsbCggY29udGV4dCwgZXJyb3IsIHJlc3VsdCApO1xuXG5cdFx0XHRcdGZsdXNoLmJpbmQoIHRoaXMgKSggKTtcblxuXHRcdFx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMiApO1xuXG5cdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KCBjb250ZXh0LCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0XHR9XG5cblx0XHR9Y2F0Y2goIGlzc3VlICl7XG5cdFx0XHRlcnJvciA9IGlzc3VlO1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYoIHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yICl7XG5cdFx0XHRlcnJvciA9IHJlc3VsdDtcblxuXHRcdFx0cmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmKCAhKCByZXN1bHQgaW5zdGFuY2VvZiBDYXRjaGVyICkgKXtcblx0XHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGUgcmVzdWx0IG9mIHRoZSBsYXN0IGNhbGxiYWNrIGlzIHBhc3NlZCBvbiB0aGUgbmV4dCBjYWxsYmFjay5cblxuXHRcdFx0XHRJZiB0aGUgY2FsbGJhY2sgZW5jb3VudGVycyBhbiBlcnJvciwgaXQgaXMgdXAgZm9yIHRoZSBuZXh0IGNhbGxiYWNrXG5cdFx0XHRcdFx0dG8gY29udGludWUgdGhlIGNoYWluIG9yIGhhbHRzIHRoZSBjaGFpbi5cblxuXHRcdFx0XHRBdXRvbWF0aWMgY2FsbCBvZiB0aGUgbmV4dCBjYWxsYmFjayBpZiB0aGUgcmVzdWx0IGlzIGEgY2F0Y2hlcixcblx0XHRcdFx0XHRpZiB0aGUgY2FsbGJhY2tzIGFyZSBub3QgZW1wdHkgYW5kIHRoZSBjYXRjaGVyIGlzIG5vdCBwYXVzZWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCAhKCByZXN1bHQgaW5zdGFuY2VvZiBDYXRjaGVyICkgJiYgZmlsbGVkKCB0aGlzWyBDQUxMQkFDSyBdICkgJiYgIXRoaXNbIFBBVVNFRCBdICl7XG5cdFx0XHRuZXh0LmFwcGx5KCB0aGlzLCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRsZXQgZmxvdyA9IGZ1bmN0aW9uIGZsb3coIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLnNldCggXCJwYXJhbWV0ZXJcIiwgcGFyYW1ldGVyICk7XG5cblx0XHRpZiggZmFsenkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRQb3NzaWJpbGl0eSB0aGF0IHRoZSBjYXRjaGVyIGlzIHBhdXNlZCBiZWZvcmUgZmxvd2luZy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0dGhpcy51bnBhdXNlKCApO1xuXG5cdFx0dHJ5e1xuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdHByb2Nlc3MubmV4dFRpY2soIGZ1bmN0aW9uIGxhdGVyKCApe1xuXHRcdFx0XHRcdGxldCB7IHNlbGYsIGNvbnRleHQsIHBhcmFtZXRlciwgbWV0aG9kLCBuZXh0IH0gPSB0aGlzO1xuXG5cdFx0XHRcdFx0c2VsZi5yZWNvcmQoIG1ldGhvZC5hcHBseSggY29udGV4dCwgW1xuXHRcdFx0XHRcdFx0YmFja2QuYmluZCggc2VsZiApKCBuZXh0IClcblx0XHRcdFx0XHRdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0XHRcdH0uYmluZCgge1xuXHRcdFx0XHRcdFwic2VsZlwiOiB0aGlzLFxuXHRcdFx0XHRcdFwiY29udGV4dFwiOiBjb250ZXh0LFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IHBhcmFtZXRlcixcblx0XHRcdFx0XHRcIm1ldGhvZFwiOiBtZXRob2QsXG5cdFx0XHRcdFx0XCJuZXh0XCI6IG5leHRcblx0XHRcdFx0fSApICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uIGxhdGVyKCApe1xuXHRcdFx0XHRcdGxldCB7IHNlbGYsIGNvbnRleHQsIHBhcmFtZXRlciwgbWV0aG9kLCBuZXh0IH0gPSB0aGlzO1xuXG5cdFx0XHRcdFx0c2VsZi5yZWNvcmQoIG1ldGhvZC5hcHBseSggY29udGV4dCwgW1xuXHRcdFx0XHRcdFx0YmFja2QuYmluZCggc2VsZiApKCBuZXh0IClcblx0XHRcdFx0XHRdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBmYWlsZWQgZmxvdyBtZXRob2QsICR7IGVycm9yLnN0YWNrIH1gICk7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdHdoaWxlKCB0aGlzWyBDQUxMQkFDSyBdLmxlbmd0aCApIHRoaXNbIENBTExCQUNLIF0ucG9wKCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIGNhbGxiYWNrLCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0bGV0IHNlbGYgPSBDYXRjaGVyWyBJTlNUQU5DRSBdID0gdGhpcztcblxuXHRcdHRoaXNbIENBTExCQUNLIF0gPSB3aWNoaXMoIENhdGNoZXJbIENBTExCQUNLIF0sIFsgXSApO1xuXG5cdFx0dGhpc1sgQ0FDSEUgXSA9IENhdGNoZXJbIENBQ0hFIF07XG5cblx0XHR0cnl7XG5cdFx0XHR0aGlzLm1lcmdlKCBDYXRjaGVyWyBFVkVOVCBdICk7XG5cblx0XHRcdGlmKCBwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRcdGZsb3cuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggREVGRVIsIENhdGNoZXIgKSApe1xuXHRcdFx0XHR0aGlzLmRlZmVyKCBDYXRjaGVyWyBERUZFUiBdICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBQQVVTRUQsIENhdGNoZXIgKSApe1xuXHRcdFx0XHR0aGlzWyBQQVVTRUQgXSA9IENhdGNoZXJbIFBBVVNFRCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIENhdGNoZXIgKS50b1N0cmluZyggKTtcblx0XHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9OnBhc3NgLCBmdW5jdGlvbiBwYXNzKCApe1xuXHRcdFx0XHRzZWxmLnBhc3MuYXBwbHkoIHNlbGYsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdFx0XHR9LCB7IFwiZGlzYWJsZU9uTGlzdGVuZXJOb3RpZmljYXRpb25cIjogdHJ1ZSB9ICk7XG5cblx0XHRcdHRoaXMubGFzdGx5KCBmdW5jdGlvbiBsYXN0bHkoICl7XG5cdFx0XHRcdHNlbGYuc3RvcCggKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRuZXh0LmJpbmQoIHRoaXMgKSggbmV3IEVycm9yKCBgZmFpbGVkIGNhdGNoZXIsICR7IGVycm9yLnN0YWNrIH1gICkgKTtcblxuXHRcdH1maW5hbGx5e1xuXHRcdFx0ZGVsZXRlIHRoaXMuaW5pdGlhbGl6ZTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIGRvbmUoICl7XG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSApe1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSAmJiBleGVjZCggbWV0aG9kICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBhcmlkKCB0aGlzWyBDQUxMQkFDSyBdICk7XG5cdFx0fVxuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCAha2VpbiggQ0FMTEJBQ0ssIHRoaXMgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhdGNoZXIgaGFzIGJlZW4gcmVsZWFzZWQsIGNhbm5vdCBwdXNoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmlsbGVkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJwdXNoIGNhbGxiYWNrIG9uY2UsIGNhbm5vdCBwdXNoIGNhbGxiYWNrIGFnYWluXCIgKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIGV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImxhdGVyIG1ldGhvZCBleGVjdXRlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiB0aGVuKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCAha2VpbiggQ0FMTEJBQ0ssIHRoaXMgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhdGNoZXIgaGFzIGJlZW4gcmVsZWFzZWQsIGNhbm5vdCBwdXNoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIG1ldGhvZCApICYmIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImVtcHR5IGxhdGVyIG1ldGhvZCwgY2Fubm90IGZvbGxvdyB3aXRoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIGV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImxhdGVyIG1ldGhvZCBleGVjdXRlZCwgY2Fubm90IGZvbGxvdyB3aXRoIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0cHVzaC5iaW5kKCB0aGlzICkoIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5wYXNzID0gZnVuY3Rpb24gcGFzcyggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdEZsb3cgdGhlIG1ldGhvZCBpZiBub3QgeWV0IGNhbGxlZC5cblxuXHRcdFx0XHRJdCBpcyB0aGUgZGV2ZWxvcGVyIHJlc3BvbnNpYmlsaXR5IHRvIHB1c2ggYSBjYWxsYmFja1xuXHRcdFx0XHRcdGJlZm9yZSBwYXNzaW5nIGZsb3cuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIWV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0cmV0dXJuIGZsb3cuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXHRcdH1cblxuXHRcdHRoaXMudW5wYXVzZSggKTtcblxuXHRcdG5leHQuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiBkZWZlciggaGFuZGxlciwgc3RyaWN0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcInN0cmljdFwiOiBcImJvb2xlYW5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZigga2VpbiggREVGRVIsIHRoaXMgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlZmVyIGhhbmRsZXJcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBzdHJpY3QgPT09IHRydWUgKXtcblx0XHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGZ1bmN0aW9uIGRlbGVnYXRlKCBlcnJvciApe1xuXHRcdFx0XHRoYW5kbGVyLmNhbGwoIHRoaXMsIGVycm9yICk7XG5cblx0XHRcdFx0Zmx1c2guYmluZCggc2VsZiApKCApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggaGFuZGxlciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlY29yZCA9IGZ1bmN0aW9uIHJlY29yZCggcmVzdWx0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJyZXN1bHQ6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHRoaXNbIFJFU1VMVCBdID0gcmVzdWx0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Zmx1c2guYmluZCggdGhpcyApKCApO1xuXG5cdFx0ZGVsZXRlIHRoaXNbIENBTExCQUNLIF07XG5cdFx0ZGVsZXRlIHRoaXNbIERFRkVSIF07XG5cblx0XHRsZXQgcmVzdWx0ID0gdGhpc1sgUkVTVUxUIF07XG5cdFx0ZGVsZXRlIHRoaXNbIFJFU1VMVCBdO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR0aGlzLnJlbGVhc2UoICk7XG5cblx0XHR0aGlzLmVtaXQoIFwicmVsZWFzZVwiICk7XG5cdFx0Q2F0Y2hlci5mbHVzaCggKTtcblxuXHRcdGJ1cm5lKCBTVE9QUEVELCBDYXRjaGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoICl7XG5cdFx0cmV0dXJuIHRoaXNbIFJFU1VMVCBdO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCggcHJvcGVydHksIHZhbHVlICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwidmFsdWVcIjogXCIqXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoIHByb3BlcnR5ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggcHJvcGVydHkgKSB8fCAhcHJvdHlwZSggcHJvcGVydHksIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9wZXJ0eVwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUubGFzdGx5ID0gZnVuY3Rpb24gbGFzdGx5KCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCApe1xuXHRcdHRoaXNbIFBBVVNFRCBdID0gdHJ1ZTtcblxuXHRcdENhdGNoZXJbIFBBVVNFRCBdID0gdHJ1ZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnVucGF1c2UgPSBmdW5jdGlvbiB1bnBhdXNlKCApe1xuXHRcdHRoaXNbIFBBVVNFRCBdID0gZmFsc2U7XG5cblx0XHRDYXRjaGVyWyBQQVVTRUQgXSA9IGZhbHNlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudGhyb3VnaCA9IGZ1bmN0aW9uIHRocm91Z2goIGZsb3csIGVycm9yLCByZXN1bHQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZmxvdzpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZXJyb3I6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdEVycm9yXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSB8fCBhcmlkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggZmxvdyApIHx8ICFwcm90eXBlKCBmbG93LCBTVFJJTkcgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZmxvd1wiICk7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzLCAzICk7XG5cblx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgYGZsb3c6JHsgZmxvdyB9YCwgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmZsb3cgPSBmdW5jdGlvbiBmbG93KCBuYW1lLCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lOnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBuYW1lICkgfHwgIXByb3R5cGUoIG5hbWUsIFNUUklORyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBmbG93IG5hbWVcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBmbG93IGhhbmRsZXJcIiApO1xuXHRcdH1cblxuXHRcdHRoaXMub25jZSggYGZsb3c6JHsgZmxvdyB9YCwgaGFuZGxlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoICl7XG5cdFx0cmV0dXJuIHRoaXMucmVzdWx0KCApO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoICl7XG5cdFx0cmV0dXJuIHN0cmluZ2UoIHRoaXMucmVzdWx0KCApICk7XG5cdH07XG5cblx0cmV0dXJuIENhdGNoZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhdGNoZXI7XG4iXX0=
//# sourceMappingURL=catcher.support.js.map
