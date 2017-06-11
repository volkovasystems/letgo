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

		this[CALLBACK] = Catcher[CALLBACK];

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

	Catcher.prototype.stop = function stop(error, result, parameter) {
		/*;
                                                                   	@meta-configuration:
                                                                   		{
                                                                   			"error": Error,
                                                                   			"result": "*",
                                                                   			"parameter": "..."
                                                                   		}
                                                                   	@end-meta-configuration
                                                                   */

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (arguments.length >= 1) {
			this.detour.apply(this, raze(arguments));
		}

		this.release();

		this.emit("release");
		Catcher.flush();

		burne(STOPPED, Catcher);

		return this;
	};

	Catcher.prototype.detour = function detour(error, result, parameter) {
		/*;
                                                                       	@meta-configuration:
                                                                       		{
                                                                       			"error": Error,
                                                                       			"result": "*",
                                                                       			"parameter": "..."
                                                                       		}
                                                                       	@end-meta-configuration
                                                                       */

		this[CALLBACK].reverse().pop().
		apply(context, [error, result].concat(shft(arguments, 3)));

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

	Catcher.prototype.error = function error(issue) {
		/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"issue:required": Error
                                                  		}
                                                  	@end-meta-configuration
                                                  */

		if (!(issue instanceof Error)) {
			throw new Error("invalid issue");
		}

		if (kein(DEFER, this)) {
			return this[DEFER](issue);
		}

		if (this.hasEvent("error")) {
			this.emit("error", issue);
		}

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
	implement("stop", function stop(error, result, parameter) {
		/*;
                                                            	@meta-configuration:
                                                            		{
                                                            			"error": Error,
                                                            			"result": "*",
                                                            			"parameter": "..."
                                                            		}
                                                            	@end-meta-configuration
                                                            */

		if (mrkd(STOPPED, Catcher, true)) {
			return this;
		}

		if (arguments.length >= 1) {
			this.detour.apply(this, raze(arguments));
		}

		if (kein(INSTANCE, this)) {
			this.release();

		} else {
			flush.bind(this)();
		}

		this.emit("release");
		this.flush();

		burne(STOPPED, Catcher);

		return this;
	}).
	implement("detour", function detour(error, result, parameter) {
		/*;
                                                                	@meta-configuration:
                                                                		{
                                                                			"error": Error,
                                                                			"result": "*",
                                                                			"parameter": "..."
                                                                		}
                                                                	@end-meta-configuration
                                                                */

		this[CALLBACK].reverse().pop().
		apply(context, [error, result].concat(shft(arguments, 3)));

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
	implement("error", function error(issue) {
		/*;
                                           	@meta-configuration:
                                           		{
                                           			"issue:required": Error
                                           		}
                                           	@end-meta-configuration
                                           */

		if (!(issue instanceof Error)) {
			throw new Error("invalid issue");
		}

		if (kein(DEFER, this)) {
			return this[DEFER](issue);
		}

		if (this.hasEvent("error")) {
			this.emit("error", issue);
		}

		return this;
	}).
	merge(event);

	return Catcher;
};

module.exports = catcher;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImJ1cm5lIiwiY2FsbGVkIiwiZGlhdG9tIiwiZWRvIiwiZXhlY2QiLCJmYWx6eSIsImZpbGxlZCIsImhlcmVkaXRvIiwiaWRudHR5Iiwia2VpbiIsIm1ya2QiLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUEFVU0VEIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJwdXNoIiwiY2FsbGJhY2siLCJuZXh0IiwiZXJyb3IiLCJyZXN1bHQiLCJwYXJhbWV0ZXIiLCJzcGxpY2UiLCJwb3AiLCJzZXQiLCJlbWl0IiwiYXJndW1lbnRzIiwiY2FsbCIsImZsdXNoIiwiYXBwbHkiLCJjb25jYXQiLCJpc3N1ZSIsInVuZGVmaW5lZCIsIkNhdGNoZXIiLCJmbG93IiwidW5wYXVzZSIsInNlcnZlciIsInByb2Nlc3MiLCJuZXh0VGljayIsImxhdGVyIiwic2VsZiIsInJlY29yZCIsImNsaWVudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3RhY2siLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwibWVyZ2UiLCJkZWZlciIsImlkZW50aXR5IiwidG9TdHJpbmciLCJvbiIsInBhc3MiLCJsYXN0bHkiLCJzdG9wIiwiZG9uZSIsInRoZW4iLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJyZWxlYXNlIiwiZGV0b3VyIiwicmV2ZXJzZSIsInByb3BlcnR5IiwidmFsdWUiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJnZXQiLCJvbmNlIiwicGF1c2UiLCJ0aHJvdWdoIiwibmFtZSIsImhhc0V2ZW50IiwidmFsdWVPZiIsImV2ZW50IiwiYXR0YWNoIiwiaW1wbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThFQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxNQUFNTixRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVEsUUFBUVIsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUyxTQUFTVCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1VLFdBQVdWLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1XLFNBQVNYLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVksT0FBT1osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNYSxPQUFPYixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1jLFVBQVVkLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1lLE9BQU9mLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWdCLE9BQU9oQixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1pQixTQUFTakIsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNa0IsVUFBVWxCLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1tQixXQUFXbkIsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTW9CLFFBQVFwQixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1xQixPQUFPckIsUUFBUyxNQUFU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Qy9ELFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUlmLE1BQU91RixJQUFQLEtBQWlCLENBQUNqRixRQUFTaUYsSUFBVCxFQUFlTixNQUFmLENBQXRCLEVBQStDO0FBQzlDLFNBQU0sSUFBSXhELEtBQUosQ0FBVyxtQkFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSXpCLE1BQU93RSxPQUFQLEtBQW9CLENBQUNsRSxRQUFTa0UsT0FBVCxFQUFrQmhELFFBQWxCLENBQXpCLEVBQXVEO0FBQ3RELFNBQU0sSUFBSUMsS0FBSixDQUFXLHNCQUFYLENBQU47QUFDQTs7QUFFRCxPQUFLMkQsSUFBTCxXQUFvQkcsSUFBcEIsRUFBNkJmLE9BQTdCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBclhGO0FBc1hFb0IsVUF0WEYsQ0FzWGEsT0F0WGIsRUFzWHNCLFNBQVM3RCxLQUFULENBQWdCWSxLQUFoQixFQUF1QjtBQUMzQzs7Ozs7Ozs7QUFRQSxNQUFJLEVBQUdBLGlCQUFpQmxCLEtBQXBCLENBQUosRUFBaUM7QUFDaEMsU0FBTSxJQUFJQSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSXJCLEtBQU1ZLEtBQU4sRUFBYSxJQUFiLENBQUosRUFBeUI7QUFDeEIsVUFBTyxLQUFNQSxLQUFOLEVBQWUyQixLQUFmLENBQVA7QUFDQTs7QUFFRCxNQUFJLEtBQUs2QyxRQUFMLENBQWUsT0FBZixDQUFKLEVBQThCO0FBQzdCLFFBQUtuRCxJQUFMLENBQVcsT0FBWCxFQUFvQk0sS0FBcEI7QUFDQTs7QUFFRCxTQUFPLElBQVA7QUFDQSxFQTVZRjtBQTZZRW1CLE1BN1lGLENBNllTNEIsS0E3WVQ7O0FBK1lBLFFBQU83QyxPQUFQO0FBQ0EsQ0E1akNEOztBQThqQ0FnRCxPQUFPQyxPQUFQLEdBQWlCeEUsT0FBakIiLCJmaWxlIjoiY2F0Y2hlci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwibGV0Z28vY2F0Y2hlci5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImNhdGNoZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImxldGdvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGV0Z28uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsZXRnby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDYXRjaGVyIGNsYXNzIGZhY3RvcnkgZm9yIGhhbmRsaW5nIGNhdGNoZXItZmxvdyBwcm9jZWR1cmUuXG5cblx0XHRMYXRlciBtZXRob2Qgd2lsbCBiZSBleGVjdXRlZCBvbmNlLCBhbmQgYWxsIGNhbGxiYWNrcyB3aWxsIGJlIGV4ZWN1dGVkIG9uY2UuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJhY2tkXCI6IFwiYmFja2RcIixcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImVkb1wiOiBcImVkb1wiLFxuXHRcdFx0XCJleGVjZFwiOiBcImV4ZWNkXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwiaWRudHR5XCI6IFwiaWRudHR5XCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInN0YXRpc1wiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYmFja2QgPSByZXF1aXJlKCBcImJhY2tkXCIgKTtcbmNvbnN0IGJ1cm5lID0gcmVxdWlyZSggXCJidXJuZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZG8gPSByZXF1aXJlKCBcImVkb1wiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1ya2QgPSByZXF1aXJlKCBcIm1ya2RcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3Qgc3RhdGlzID0gcmVxdWlyZSggXCJzdGF0aXNcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBDQUNIRSA9IFN5bWJvbCggXCJjYWNoZVwiICk7XG5jb25zdCBDQUxMQkFDSyA9IFN5bWJvbCggXCJjYWxsYmFja1wiICk7XG5jb25zdCBERUZFUiA9IFN5bWJvbCggXCJkZWZlclwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBJTlNUQU5DRSA9IFN5bWJvbCggXCJpbnN0YW5jZVwiICk7XG5jb25zdCBQQVVTRUQgPSBTeW1ib2woIFwicGF1c2VkXCIgKTtcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xuY29uc3QgU1RPUFBFRCA9IFN5bWJvbCggXCJzdG9wcGVkXCIgKTtcblxuY29uc3QgY2F0Y2hlciA9IGZ1bmN0aW9uIGNhdGNoZXIoIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgY29udGV4dCA9IHplbGYoIHRoaXMgKTtcblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0bWV0aG9kID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggbWV0aG9kICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhY2Nlc3NpYmxlIG91dHNpZGUgdGhyb3VnaCB0aGUgY2F0Y2hlci5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IHB1c2ggPSBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0bGV0IG5leHQgPSBmdW5jdGlvbiBuZXh0KCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXHRcdGlmKCAoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKSAmJiBwcm90eXBlKCB0aGlzWyBERUZFUiBdLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aGlzWyBERUZFUiBdKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdGxldCBjYWxsYmFjayA9IHRoaXNbIENBTExCQUNLIF0uc3BsaWNlKCAwLCAxICkucG9wKCApO1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApICl7XG5cdFx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHRcdHRoaXMuZW1pdCggXCJsYXN0bHlcIiApO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB0aGUgbWV0aG9kIGludGVudGlvbmFsbHkgY2FsbHMgdGhlIGNhbGxiYWNrIHdpdGhvdXQgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdFx0dGhlbiBpdCBoYWx0cyB0aGUgY2hhaW4uXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCBhcmlkKCBhcmd1bWVudHMgKSApe1xuXHRcdFx0XHRyZXN1bHQgPSBjYWxsYmFjay5jYWxsKCBjb250ZXh0LCBlcnJvciwgcmVzdWx0ICk7XG5cblx0XHRcdFx0Zmx1c2guYmluZCggdGhpcyApKCApO1xuXG5cdFx0XHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzLCAyICk7XG5cblx0XHRcdFx0cmVzdWx0ID0gY2FsbGJhY2suYXBwbHkoIGNvbnRleHQsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHRcdH1cblxuXHRcdH1jYXRjaCggaXNzdWUgKXtcblx0XHRcdGVycm9yID0gaXNzdWU7XG5cblx0XHRcdHJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiggcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdGVycm9yID0gcmVzdWx0O1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSApe1xuXHRcdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbGJhY2sgaXMgcGFzc2VkIG9uIHRoZSBuZXh0IGNhbGxiYWNrLlxuXG5cdFx0XHRcdElmIHRoZSBjYWxsYmFjayBlbmNvdW50ZXJzIGFuIGVycm9yLCBpdCBpcyB1cCBmb3IgdGhlIG5leHQgY2FsbGJhY2tcblx0XHRcdFx0XHR0byBjb250aW51ZSB0aGUgY2hhaW4gb3IgaGFsdHMgdGhlIGNoYWluLlxuXG5cdFx0XHRcdEF1dG9tYXRpYyBjYWxsIG9mIHRoZSBuZXh0IGNhbGxiYWNrIGlmIHRoZSByZXN1bHQgaXMgYSBjYXRjaGVyLFxuXHRcdFx0XHRcdGlmIHRoZSBjYWxsYmFja3MgYXJlIG5vdCBlbXB0eSBhbmQgdGhlIGNhdGNoZXIgaXMgbm90IHBhdXNlZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSAmJiBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSAmJiAhdGhpc1sgUEFVU0VEIF0gKXtcblx0XHRcdG5leHQuYXBwbHkoIHRoaXMsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGxldCBmbG93ID0gZnVuY3Rpb24gZmxvdyggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc2V0KCBcInBhcmFtZXRlclwiLCBwYXJhbWV0ZXIgKTtcblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IHRoYXQgdGhlIGNhdGNoZXIgaXMgcGF1c2VkIGJlZm9yZSBmbG93aW5nLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHR0aGlzLnVucGF1c2UoICk7XG5cblx0XHR0cnl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuXHRcdFx0XHR9LmJpbmQoIHtcblx0XHRcdFx0XHRcInNlbGZcIjogdGhpcyxcblx0XHRcdFx0XHRcImNvbnRleHRcIjogY29udGV4dCxcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFx0XHRcdFwibmV4dFwiOiBuZXh0XG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggYGZhaWxlZCBmbG93IG1ldGhvZCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IGZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0d2hpbGUoIHRoaXNbIENBTExCQUNLIF0ubGVuZ3RoICkgdGhpc1sgQ0FMTEJBQ0sgXS5wb3AoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRsZXQgQ2F0Y2hlciA9IGRpYXRvbSggXCJDYXRjaGVyXCIgKTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggY2FsbGJhY2ssIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRsZXQgc2VsZiA9IENhdGNoZXJbIElOU1RBTkNFIF0gPSB0aGlzO1xuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXSA9IENhdGNoZXJbIENBTExCQUNLIF07XG5cblx0XHR0aGlzWyBDQUNIRSBdID0gQ2F0Y2hlclsgQ0FDSEUgXTtcblxuXHRcdHRyeXtcblx0XHRcdHRoaXMubWVyZ2UoIENhdGNoZXJbIEVWRU5UIF0gKTtcblxuXHRcdFx0aWYoIHByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdFx0Zmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBERUZFUiwgQ2F0Y2hlciApICl7XG5cdFx0XHRcdHRoaXMuZGVmZXIoIENhdGNoZXJbIERFRkVSIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIFBBVVNFRCwgQ2F0Y2hlciApICl7XG5cdFx0XHRcdHRoaXNbIFBBVVNFRCBdID0gQ2F0Y2hlclsgUEFVU0VEIF07XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggQ2F0Y2hlciApLnRvU3RyaW5nKCApO1xuXHRcdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06cGFzc2AsIGZ1bmN0aW9uIHBhc3MoICl7XG5cdFx0XHRcdHNlbGYucGFzcy5hcHBseSggc2VsZiwgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0XHRcdH0sIHsgXCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvblwiOiB0cnVlIH0gKTtcblxuXHRcdFx0dGhpcy5sYXN0bHkoIGZ1bmN0aW9uIGxhc3RseSggKXtcblx0XHRcdFx0c2VsZi5zdG9wKCApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdG5leHQuYmluZCggdGhpcyApKCBuZXcgRXJyb3IoIGBmYWlsZWQgY2F0Y2hlciwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0fWZpbmFsbHl7XG5cdFx0XHRkZWxldGUgdGhpcy5pbml0aWFsaXplO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gZG9uZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICYmIGV4ZWNkKCBtZXRob2QgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgcHVzaCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgJiYgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0RmxvdyB0aGUgbWV0aG9kIGlmIG5vdCB5ZXQgY2FsbGVkLlxuXG5cdFx0XHRcdEl0IGlzIHRoZSBkZXZlbG9wZXIgcmVzcG9uc2liaWxpdHkgdG8gcHVzaCBhIGNhbGxiYWNrXG5cdFx0XHRcdFx0YmVmb3JlIHBhc3NpbmcgZmxvdy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gZmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0fVxuXG5cdFx0dGhpcy51bnBhdXNlKCApO1xuXG5cdFx0bmV4dC5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwic3RyaWN0XCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVmZXIgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIHN0cmljdCA9PT0gdHJ1ZSApe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggZnVuY3Rpb24gZGVsZWdhdGUoIGVycm9yICl7XG5cdFx0XHRcdGhhbmRsZXIuY2FsbCggdGhpcywgZXJyb3IgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBoYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVjb3JkID0gZnVuY3Rpb24gcmVjb3JkKCByZXN1bHQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpc1sgUkVTVUxUIF0gPSByZXN1bHQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gcmVsZWFzZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRkZWxldGUgdGhpc1sgQ0FMTEJBQ0sgXTtcblx0XHRkZWxldGUgdGhpc1sgREVGRVIgXTtcblxuXHRcdGxldCByZXN1bHQgPSB0aGlzWyBSRVNVTFQgXTtcblx0XHRkZWxldGUgdGhpc1sgUkVTVUxUIF07XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPj0gMSApe1xuXHRcdFx0dGhpcy5kZXRvdXIuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWxlYXNlKCApO1xuXG5cdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdENhdGNoZXIuZmx1c2goICk7XG5cblx0XHRidXJuZSggU1RPUFBFRCwgQ2F0Y2hlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZGV0b3VyID0gZnVuY3Rpb24gZGV0b3VyKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXS5yZXZlcnNlKCApLnBvcCggKVxuXHRcdFx0LmFwcGx5KCBjb250ZXh0LCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHNoZnQoIGFyZ3VtZW50cywgMyApICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCggKXtcblx0XHRyZXR1cm4gdGhpc1sgUkVTVUxUIF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5sYXN0bHkgPSBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHRoaXMub25jZSggXCJsYXN0bHlcIiwgY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoICl7XG5cdFx0dGhpc1sgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0Q2F0Y2hlclsgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudW5wYXVzZSA9IGZ1bmN0aW9uIHVucGF1c2UoICl7XG5cdFx0dGhpc1sgUEFVU0VEIF0gPSBmYWxzZTtcblxuXHRcdENhdGNoZXJbIFBBVVNFRCBdID0gZmFsc2U7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50aHJvdWdoID0gZnVuY3Rpb24gdGhyb3VnaCggZmxvdywgZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJmbG93OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJlcnJvcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0RXJyb3Jcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBmbG93ICkgfHwgIXByb3R5cGUoIGZsb3csIFNUUklORyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBmbG93XCIgKTtcblx0XHR9XG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDMgKTtcblxuXHRcdHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBgZmxvdzokeyBmbG93IH1gLCBlcnJvciwgcmVzdWx0IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZmxvdyA9IGZ1bmN0aW9uIGZsb3coIG5hbWUsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIG5hbWUgKSB8fCAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgbmFtZVwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbmNlKCBgZmxvdzokeyBmbG93IH1gLCBoYW5kbGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKCBpc3N1ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaXNzdWU6cmVxdWlyZWRcIjogRXJyb3Jcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICEoIGlzc3VlIGluc3RhbmNlb2YgRXJyb3IgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgaXNzdWVcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRyZXR1cm4gdGhpc1sgREVGRVIgXSggaXNzdWUgKTtcblx0XHR9XG5cblx0XHRpZiggdGhpcy5oYXNFdmVudCggXCJlcnJvclwiICkgKXtcblx0XHRcdHRoaXMuZW1pdCggXCJlcnJvclwiLCBpc3N1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCApe1xuXHRcdHJldHVybiB0aGlzLnJlc3VsdCggKTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiBzdHJpbmdlKCB0aGlzLnJlc3VsdCggKSApO1xuXHR9O1xuXG5cdENhdGNoZXIgPSBoZXJlZGl0byggQ2F0Y2hlciwgZWRvLmJpbmQoIGNvbnRleHQgKSggKSApO1xuXG5cdENhdGNoZXIgPSBzeW1iaW90ZSggQ2F0Y2hlciwgXCJFdmVudFwiICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRXZSBzaG91bGQgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBFdmVudCBoZXJlLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRsZXQgZXZlbnQgPSBlZG8uYmluZCggY29udGV4dCApKCApKCApO1xuXG5cdHN0YXRpcyggQ2F0Y2hlciApXG5cdFx0LmF0dGFjaCggRVZFTlQsIGV2ZW50IClcblx0XHQuYXR0YWNoKCBDQUNIRSwgeyB9IClcblx0XHQuYXR0YWNoKCBDQUxMQkFDSywgWyBdIClcblx0XHQuaW1wbGVtZW50KCBcImRvbmVcIiwgZnVuY3Rpb24gZG9uZSggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLmRvbmUoICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWxlYXNlIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWxlYXNlKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVjb3JkXCIsIGZ1bmN0aW9uIHJlY29yZCggcmVzdWx0ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHJlY29yZCByZXN1bHQgb24gaW5hY3RpdmUgY2F0Y2hlclwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnJlY29yZCggcmVzdWx0ICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJwYXNzXCIsIGZ1bmN0aW9uIHBhc3MoIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXI6cmVxdWlyZWRcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5wYXNzLmFwcGx5KCB0aGlzWyBJTlNUQU5DRSBdLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGlkZW50aXR5ID0gaWRudHR5KCBDYXRjaGVyICkudG9TdHJpbmcoICk7XG5cdFx0XHR0aGlzLmVtaXQuYXBwbHkoIGNvbnRleHQsIFsgYCR7IGlkZW50aXR5IH06cGFzc2AgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwic3RvcFwiLCBmdW5jdGlvbiBzdG9wKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXJyb3JcIjogRXJyb3IsXG5cdFx0XHRcdFx0XHRcInJlc3VsdFwiOiBcIipcIixcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA+PSAxICl7XG5cdFx0XHRcdHRoaXMuZGV0b3VyLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aGlzLnJlbGVhc2UoICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdCggXCJyZWxlYXNlXCIgKTtcblx0XHRcdHRoaXMuZmx1c2goICk7XG5cblx0XHRcdGJ1cm5lKCBTVE9QUEVELCBDYXRjaGVyICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZGV0b3VyXCIsIGZ1bmN0aW9uIGRldG91ciggZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFx0XCJyZXN1bHRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5yZXZlcnNlKCApLnBvcCggKVxuXHRcdFx0XHQuYXBwbHkoIGNvbnRleHQsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggc2hmdCggYXJndW1lbnRzLCAzICkgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInNldFwiLCBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZ2V0XCIsIGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImxhc3RseVwiLCBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmlsbGVkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIGV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucHVzaCggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ0aGVuXCIsIGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggbWV0aG9kICkgJiYgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJlbXB0eSBsYXRlciBtZXRob2QsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJsYXRlciBtZXRob2QgZXhlY3V0ZWQsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS50aGVuKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImRlZmVyXCIsIGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcInN0cmljdFwiOiBcImJvb2xlYW5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlZmVyIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS50aGVuKCBoYW5kbGVyLCBzdHJpY3QgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIERFRkVSLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBzdHJpY3QgPT09IHRydWUgKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBmdW5jdGlvbiBkZWxlZ2F0ZSggZXJyb3IgKXtcblx0XHRcdFx0XHRoYW5kbGVyLmNhbGwoIHRoaXMsIGVycm9yICk7XG5cblx0XHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGhhbmRsZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJwYXVzZVwiLCBmdW5jdGlvbiBwYXVzZSggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBQQVVTRUQgXSA9IHRydWU7XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnBhdXNlKCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInVucGF1c2VcIiwgZnVuY3Rpb24gcGF1c2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgUEFVU0VEIF0gPSBmYWxzZTtcblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0udW5wYXVzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ0aHJvdWdoXCIsIGZ1bmN0aW9uIHRocm91Z2goIGZsb3csIGVycm9yLCByZXN1bHQsIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJmbG93OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcImVycm9yOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdFx0RXJyb3Jcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGZsb3cgKSB8fCAhcHJvdHlwZSggZmxvdywgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZmxvd1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMyApO1xuXG5cdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgYGZsb3c6JHsgZmxvdyB9YCwgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJmbG93XCIsIGZ1bmN0aW9uIGZsb3coIG5hbWUsIGhhbmRsZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIG5hbWUgKSB8fCAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZmxvdyBuYW1lXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZmxvdyBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbmNlKCBgZmxvdzokeyBuYW1lIH1gLCBoYW5kbGVyICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZXJyb3JcIiwgZnVuY3Rpb24gZXJyb3IoIGlzc3VlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImlzc3VlOnJlcXVpcmVkXCI6IEVycm9yXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICEoIGlzc3VlIGluc3RhbmNlb2YgRXJyb3IgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBpc3N1ZVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBERUZFUiBdKCBpc3N1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGhpcy5oYXNFdmVudCggXCJlcnJvclwiICkgKXtcblx0XHRcdFx0dGhpcy5lbWl0KCBcImVycm9yXCIsIGlzc3VlICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5tZXJnZSggZXZlbnQgKTtcblxuXHRyZXR1cm4gQ2F0Y2hlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2F0Y2hlcjtcbiJdfQ==
//# sourceMappingURL=catcher.support.js.map
