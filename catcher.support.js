"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
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
                                                                                                                                                                                                                */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGNoZXIuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhcmlkIiwicmVxdWlyZSIsImFzZWEiLCJiYWNrZCIsImJ1cm5lIiwiY2FsbGVkIiwiZGlhdG9tIiwiZWRvIiwiZXhlY2QiLCJmYWx6eSIsImZpbGxlZCIsImhlcmVkaXRvIiwiaWRudHR5Iiwia2VpbiIsIm1ya2QiLCJwcm90eXBlIiwicmF6ZSIsInNoZnQiLCJzdGF0aXMiLCJzdHJpbmdlIiwic3ltYmlvdGUiLCJ0cnVseSIsInplbGYiLCJDQUNIRSIsIkNBTExCQUNLIiwiREVGRVIiLCJFVkVOVCIsIklOU1RBTkNFIiwiUEFVU0VEIiwiUkVTVUxUIiwiU1RPUFBFRCIsImNhdGNoZXIiLCJtZXRob2QiLCJGVU5DVElPTiIsIkVycm9yIiwiY29udGV4dCIsImJpbmQiLCJwdXNoIiwiY2FsbGJhY2siLCJuZXh0IiwiZXJyb3IiLCJyZXN1bHQiLCJwYXJhbWV0ZXIiLCJzcGxpY2UiLCJwb3AiLCJzZXQiLCJlbWl0IiwiYXJndW1lbnRzIiwiY2FsbCIsImZsdXNoIiwiYXBwbHkiLCJjb25jYXQiLCJpc3N1ZSIsInVuZGVmaW5lZCIsIkNhdGNoZXIiLCJmbG93IiwidW5wYXVzZSIsInNlcnZlciIsInByb2Nlc3MiLCJuZXh0VGljayIsImxhdGVyIiwic2VsZiIsInJlY29yZCIsImNsaWVudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic3RhY2siLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwibWVyZ2UiLCJkZWZlciIsImlkZW50aXR5IiwidG9TdHJpbmciLCJvbiIsInBhc3MiLCJsYXN0bHkiLCJzdG9wIiwiZG9uZSIsInRoZW4iLCJoYW5kbGVyIiwic3RyaWN0IiwiZGVsZWdhdGUiLCJyZWxlYXNlIiwiZGV0b3VyIiwicmV2ZXJzZSIsInByb3BlcnR5IiwidmFsdWUiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJnZXQiLCJvbmNlIiwicGF1c2UiLCJ0aHJvdWdoIiwibmFtZSIsImhhc0V2ZW50IiwidmFsdWVPZiIsImV2ZW50IiwiYXR0YWNoIiwiaW1wbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImdOQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLE1BQU1OLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTU8sUUFBUVAsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUSxRQUFRUixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1TLFNBQVNULFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVUsV0FBV1YsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTVcsU0FBU1gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNWSxPQUFPWixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1hLE9BQU9iLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWMsVUFBVWQsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTWUsT0FBT2YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNZ0IsT0FBT2hCLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWlCLFNBQVNqQixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1rQixVQUFVbEIsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTW1CLFdBQVduQixRQUFTLFVBQVQsQ0FBakI7QUFDQSxJQUFNb0IsUUFBUXBCLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTXFCLE9BQU9yQixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNc0IsUUFBUSxzQkFBUSxPQUFSLENBQWQ7QUFDQSxJQUFNQyxXQUFXLHNCQUFRLFVBQVIsQ0FBakI7QUFDQSxJQUFNQyxRQUFRLHNCQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU1DLFFBQVEsc0JBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTUMsV0FBVyxzQkFBUSxVQUFSLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxzQkFBUSxRQUFSLENBQWY7QUFDQSxJQUFNQyxTQUFTLHNCQUFRLFFBQVIsQ0FBZjtBQUNBLElBQU1DLFVBQVUsc0JBQVEsU0FBUixDQUFoQjs7QUFFQSxJQUFNQyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3pDOzs7Ozs7OztBQVFBLEtBQUlYLE1BQU9XLE1BQVAsS0FBbUIsQ0FBQ2pCLFFBQVNpQixNQUFULEVBQWlCQyxRQUFqQixDQUF4QixFQUFxRDtBQUNwRCxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsVUFBVWIsS0FBTSxJQUFOLENBQWQ7O0FBRUEsS0FBSUQsTUFBT1csTUFBUCxDQUFKLEVBQXFCO0FBQ3BCQSxXQUFTM0IsT0FBTytCLElBQVAsQ0FBYUQsT0FBYixFQUF3QkgsTUFBeEIsQ0FBVDtBQUNBOztBQUVEOzs7OztBQUtBLEtBQUlLLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxRQUFmLEVBQXlCO0FBQ25DOzs7Ozs7OztBQVFBLE1BQUk3QixNQUFPNkIsUUFBUCxLQUFxQixDQUFDdkIsUUFBU3VCLFFBQVQsRUFBbUJMLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFNBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxPQUFNVixRQUFOLEVBQWlCYSxJQUFqQixDQUF1QmxDLE1BQU1pQyxJQUFOLENBQVlELE9BQVosRUFBdUJHLFFBQXZCLENBQXZCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBaEJEOztBQWtCQSxLQUFJQyxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsTUFBdEIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQ25EOzs7Ozs7Ozs7QUFTQSxNQUFNRixpQkFBaUJOLEtBQW5CLElBQThCbkIsUUFBUyxLQUFNVSxLQUFOLENBQVQsRUFBd0JRLFFBQXhCLENBQWxDLEVBQXNFO0FBQ3JFLFFBQU1SLEtBQU4sRUFBZWUsS0FBZjtBQUNBOztBQUVELE1BQUlGLFdBQVcsS0FBTWQsUUFBTixFQUFpQm1CLE1BQWpCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQWdDQyxHQUFoQyxFQUFmOztBQUVBLE1BQUluQyxNQUFPNkIsUUFBUCxDQUFKLEVBQXVCO0FBQ3RCLFFBQUtPLEdBQUwsQ0FBVSxRQUFWLEVBQW9CSixNQUFwQjs7QUFFQSxRQUFLSyxJQUFMLENBQVcsUUFBWDs7QUFFQSxVQUFPTCxNQUFQO0FBQ0E7O0FBRUQsTUFBRztBQUNGOzs7Ozs7QUFNQSxPQUFJekMsS0FBTStDLFNBQU4sQ0FBSixFQUF1QjtBQUN0Qk4sYUFBU0gsU0FBU1UsSUFBVCxDQUFlYixPQUFmLEVBQXdCSyxLQUF4QixFQUErQkMsTUFBL0IsQ0FBVDs7QUFFQVEsVUFBTWIsSUFBTixDQUFZLElBQVo7O0FBRUEsU0FBS1MsR0FBTCxDQUFVLFFBQVYsRUFBb0JKLE1BQXBCOztBQUVBLFdBQU9BLE1BQVA7O0FBRUEsSUFURCxNQVNLO0FBQ0pDLGdCQUFZekIsS0FBTThCLFNBQU4sRUFBaUIsQ0FBakIsQ0FBWjs7QUFFQU4sYUFBU0gsU0FBU1ksS0FBVCxDQUFnQmYsT0FBaEIsRUFBeUIsQ0FBRUssS0FBRixFQUFTQyxNQUFULEVBQWtCVSxNQUFsQixDQUEwQlQsU0FBMUIsQ0FBekIsQ0FBVDtBQUNBOztBQUVELEdBdEJELENBc0JDLE9BQU9VLEtBQVAsRUFBYztBQUNkWixXQUFRWSxLQUFSOztBQUVBWCxZQUFTWSxTQUFUO0FBQ0E7O0FBRUQsTUFBSVosa0JBQWtCUCxLQUF0QixFQUE2QjtBQUM1Qk0sV0FBUUMsTUFBUjs7QUFFQUEsWUFBU1ksU0FBVDtBQUNBOztBQUVELE1BQUksRUFBR1osa0JBQWtCYSxPQUFyQixDQUFKLEVBQW9DO0FBQ25DLFFBQUtULEdBQUwsQ0FBVSxRQUFWLEVBQW9CSixNQUFwQjtBQUNBOztBQUVEOzs7Ozs7Ozs7OztBQVdBLE1BQUksRUFBR0Esa0JBQWtCYSxPQUFyQixLQUFrQzVDLE9BQVEsS0FBTWMsUUFBTixDQUFSLENBQWxDLElBQWdFLENBQUMsS0FBTUksTUFBTixDQUFyRSxFQUFxRjtBQUNwRlcsUUFBS1csS0FBTCxDQUFZLElBQVosRUFBa0IsQ0FBRVYsS0FBRixFQUFTQyxNQUFULEVBQWtCVSxNQUFsQixDQUEwQlQsU0FBMUIsQ0FBbEI7QUFDQTs7QUFFRCxTQUFPRCxNQUFQO0FBQ0EsRUE5RUQ7O0FBZ0ZBLEtBQUljLE9BQU8sU0FBU0EsSUFBVCxDQUFlYixTQUFmLEVBQTBCO0FBQ3BDOzs7Ozs7OztBQVFBQSxjQUFZMUIsS0FBTStCLFNBQU4sQ0FBWjs7QUFFQSxPQUFLRixHQUFMLENBQVUsV0FBVixFQUF1QkgsU0FBdkI7O0FBRUEsTUFBSWpDLE1BQU91QixNQUFQLENBQUosRUFBcUI7QUFDcEIsVUFBTyxJQUFQO0FBQ0E7O0FBRUQ7Ozs7O0FBS0EsT0FBS3dCLE9BQUw7O0FBRUEsTUFBRztBQUNGLE9BQUl0RCxLQUFLdUQsTUFBVCxFQUFpQjtBQUNoQkMsWUFBUUMsUUFBUixDQUFrQixTQUFTQyxLQUFULEdBQWlCO0FBQzVCQyxTQUQ0QixHQUNlLElBRGYsQ0FDNUJBLElBRDRCLENBQ3RCMUIsT0FEc0IsR0FDZSxJQURmLENBQ3RCQSxPQURzQixDQUNiTyxTQURhLEdBQ2UsSUFEZixDQUNiQSxTQURhLENBQ0ZWLE1BREUsR0FDZSxJQURmLENBQ0ZBLE1BREUsQ0FDTU8sSUFETixHQUNlLElBRGYsQ0FDTUEsSUFETjs7QUFHbENzQixVQUFLQyxNQUFMLENBQWE5QixPQUFPa0IsS0FBUCxDQUFjZixPQUFkLEVBQXVCO0FBQ25DaEMsV0FBTWlDLElBQU4sQ0FBWXlCLElBQVosRUFBb0J0QixJQUFwQixDQURtQztBQUVsQ1ksV0FGa0MsQ0FFMUJULFNBRjBCLENBQXZCLENBQWI7O0FBSUEsS0FQaUIsQ0FPaEJOLElBUGdCLENBT1Y7QUFDUCxhQUFRLElBREQ7QUFFUCxnQkFBV0QsT0FGSjtBQUdQLGtCQUFhTyxTQUhOO0FBSVAsZUFBVVYsTUFKSDtBQUtQLGFBQVFPLElBTEQsRUFQVSxDQUFsQjs7O0FBZUEsSUFoQkQsTUFnQk0sSUFBSXJDLEtBQUs2RCxNQUFULEVBQWlCO0FBQ3RCLFFBQUlDLFVBQVVDLFdBQVksU0FBU0wsS0FBVCxHQUFpQjtBQUNwQ0MsU0FEb0MsR0FDTyxJQURQLENBQ3BDQSxJQURvQyxDQUM5QjFCLE9BRDhCLEdBQ08sSUFEUCxDQUM5QkEsT0FEOEIsQ0FDckJPLFNBRHFCLEdBQ08sSUFEUCxDQUNyQkEsU0FEcUIsQ0FDVlYsTUFEVSxHQUNPLElBRFAsQ0FDVkEsTUFEVSxDQUNGTyxJQURFLEdBQ08sSUFEUCxDQUNGQSxJQURFOztBQUcxQ3NCLFVBQUtDLE1BQUwsQ0FBYTlCLE9BQU9rQixLQUFQLENBQWNmLE9BQWQsRUFBdUI7QUFDbkNoQyxXQUFNaUMsSUFBTixDQUFZeUIsSUFBWixFQUFvQnRCLElBQXBCLENBRG1DO0FBRWxDWSxXQUZrQyxDQUUxQlQsU0FGMEIsQ0FBdkIsQ0FBYjs7QUFJQXdCLGtCQUFjRixPQUFkOztBQUVBLEtBVHlCLENBU3hCNUIsSUFUd0IsQ0FTbEI7QUFDUCxhQUFRLElBREQ7QUFFUCxnQkFBV0QsT0FGSjtBQUdQLGtCQUFhTyxTQUhOO0FBSVAsZUFBVVYsTUFKSDtBQUtQLGFBQVFPLElBTEQsRUFUa0IsQ0FBWixDQUFkOzs7QUFpQkEsSUFsQkssTUFrQkQ7QUFDSixVQUFNLElBQUlMLEtBQUosQ0FBVyxtREFBWCxDQUFOO0FBQ0E7O0FBRUQsVUFBTyxJQUFQOztBQUVBLEdBekNELENBeUNDLE9BQU9NLEtBQVAsRUFBYztBQUNkLFNBQU0sSUFBSU4sS0FBSiwwQkFBbUNNLE1BQU0yQixLQUF6QyxDQUFOO0FBQ0E7QUFDRCxFQXBFRDs7QUFzRUEsS0FBSWxCLFFBQVEsU0FBU0EsS0FBVCxHQUFpQjtBQUM1QixTQUFPLEtBQU16QixRQUFOLEVBQWlCNEMsTUFBeEIsR0FBaUMsS0FBTTVDLFFBQU4sRUFBaUJvQixHQUFqQixHQUFqQzs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQUpEOztBQU1BLEtBQUlVLFVBQVVoRCxPQUFRLFNBQVIsQ0FBZDs7QUFFQWdELFNBQVFlLFNBQVIsQ0FBa0JDLFVBQWxCLEdBQStCLFNBQVNBLFVBQVQsQ0FBcUJoQyxRQUFyQixFQUErQkksU0FBL0IsRUFBMEM7QUFDeEU7Ozs7Ozs7OztBQVNBLE1BQUk1QixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVEWixjQUFZekIsS0FBTThCLFNBQU4sQ0FBWjs7QUFFQSxNQUFJYyxPQUFPUCxRQUFTM0IsUUFBVCxJQUFzQixJQUFqQzs7QUFFQSxPQUFNSCxRQUFOLElBQW1COEIsUUFBUzlCLFFBQVQsQ0FBbkI7O0FBRUEsT0FBTUQsS0FBTixJQUFnQitCLFFBQVMvQixLQUFULENBQWhCOztBQUVBLE1BQUc7QUFDRixRQUFLZ0QsS0FBTCxDQUFZakIsUUFBUzVCLEtBQVQsQ0FBWjs7QUFFQSxPQUFJWCxRQUFTdUIsUUFBVCxFQUFtQkwsUUFBbkIsQ0FBSixFQUFtQztBQUNsQ0ksU0FBS0QsSUFBTCxDQUFXLElBQVgsRUFBbUJFLFFBQW5CO0FBQ0E7O0FBRUQsT0FBSWpCLE1BQU9XLE1BQVAsS0FBbUIsQ0FBQ3hCLE1BQU93QixNQUFQLENBQXhCLEVBQXlDO0FBQ3hDdUIsU0FBS0wsS0FBTCxDQUFZLElBQVosRUFBa0JSLFNBQWxCO0FBQ0E7O0FBRUQsT0FBSTdCLEtBQU1ZLEtBQU4sRUFBYTZCLE9BQWIsQ0FBSixFQUE0QjtBQUMzQixTQUFLa0IsS0FBTCxDQUFZbEIsUUFBUzdCLEtBQVQsQ0FBWjtBQUNBOztBQUVELE9BQUlaLEtBQU1lLE1BQU4sRUFBYzBCLE9BQWQsQ0FBSixFQUE2QjtBQUM1QixTQUFNMUIsTUFBTixJQUFpQjBCLFFBQVMxQixNQUFULENBQWpCO0FBQ0E7O0FBRUQsT0FBSTZDLFdBQVc3RCxPQUFRMEMsT0FBUixFQUFrQm9CLFFBQWxCLEVBQWY7QUFDQSxRQUFLQyxFQUFMLENBQWFGLFFBQWIsWUFBK0IsU0FBU0csSUFBVCxHQUFnQjtBQUM5Q2YsU0FBS2UsSUFBTCxDQUFVMUIsS0FBVixDQUFpQlcsSUFBakIsRUFBdUI3QyxLQUFNK0IsU0FBTixDQUF2QjtBQUNBLElBRkQsRUFFRyxFQUFFLGlDQUFpQyxJQUFuQyxFQUZIOztBQUlBLFFBQUs4QixNQUFMLENBQWEsU0FBU0EsTUFBVCxHQUFrQjtBQUM5QmhCLFNBQUtpQixJQUFMO0FBQ0EsSUFGRDs7QUFJQSxVQUFPLElBQVA7O0FBRUEsR0E5QkQsQ0E4QkMsT0FBT3RDLEtBQVAsRUFBYztBQUNkRCxRQUFLSCxJQUFMLENBQVcsSUFBWCxFQUFtQixJQUFJRixLQUFKLHNCQUErQk0sTUFBTTJCLEtBQXJDLENBQW5COztBQUVBLEdBakNELFNBaUNRO0FBQ1AsVUFBTyxLQUFLRyxVQUFaO0FBQ0E7QUFDRCxFQTFERDs7QUE0REFoQixTQUFRZSxTQUFSLENBQWtCVSxJQUFsQixHQUF5QixTQUFTQSxJQUFULEdBQWdCO0FBQ3hDLE1BQUlqRSxLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUlqQyxNQUFPVyxNQUFQLENBQUosRUFBcUI7QUFDcEIsVUFBT2hDLEtBQU0sS0FBTXdCLFFBQU4sQ0FBTixLQUE0QmhCLE1BQU93QixNQUFQLENBQW5DOztBQUVBLEdBSEQsTUFHSztBQUNKLFVBQU9oQyxLQUFNLEtBQU13QixRQUFOLENBQU4sQ0FBUDtBQUNBO0FBQ0QsRUFYRDs7QUFhQThCLFNBQVFlLFNBQVIsQ0FBa0JoQyxJQUFsQixHQUF5QixTQUFTQSxJQUFULENBQWVDLFFBQWYsRUFBeUI7QUFDakQ7Ozs7Ozs7O0FBUUEsTUFBSXhCLEtBQU1nQixPQUFOLEVBQWV3QixPQUFmLEVBQXdCLElBQXhCLENBQUosRUFBb0M7QUFDbkMsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSSxDQUFDekMsS0FBTVcsUUFBTixFQUFnQixJQUFoQixDQUFMLEVBQTZCO0FBQzVCLFNBQU0sSUFBSVUsS0FBSixDQUFXLGlEQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJeEIsT0FBUSxLQUFNYyxRQUFOLENBQVIsQ0FBSixFQUFnQztBQUMvQixTQUFNLElBQUlVLEtBQUosQ0FBVyxnREFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSWIsTUFBT1csTUFBUCxLQUFtQnhCLE1BQU93QixNQUFQLENBQXZCLEVBQXdDO0FBQ3ZDLFNBQU0sSUFBSUUsS0FBSixDQUFXLDZDQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJekIsTUFBTzZCLFFBQVAsS0FBcUIsQ0FBQ3ZCLFFBQVN1QixRQUFULEVBQW1CTCxRQUFuQixDQUExQixFQUF5RDtBQUN4RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRURHLE9BQUtELElBQUwsQ0FBVyxJQUFYLEVBQW1CRSxRQUFuQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQWhDRDs7QUFrQ0FnQixTQUFRZSxTQUFSLENBQWtCVyxJQUFsQixHQUF5QixTQUFTQSxJQUFULENBQWUxQyxRQUFmLEVBQXlCO0FBQ2pEOzs7Ozs7OztBQVFBLE1BQUl4QixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUksQ0FBQ3pDLEtBQU1XLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBTCxFQUE2QjtBQUM1QixTQUFNLElBQUlVLEtBQUosQ0FBVyxpREFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSXpCLE1BQU91QixNQUFQLEtBQW1CaEMsS0FBTSxLQUFNd0IsUUFBTixDQUFOLENBQXZCLEVBQWlEO0FBQ2hELFNBQU0sSUFBSVUsS0FBSixDQUFXLGlEQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJYixNQUFPVyxNQUFQLEtBQW1CeEIsTUFBT3dCLE1BQVAsQ0FBdkIsRUFBd0M7QUFDdkMsU0FBTSxJQUFJRSxLQUFKLENBQVcsb0RBQVgsQ0FBTjtBQUNBOztBQUVELE1BQUl6QixNQUFPNkIsUUFBUCxLQUFxQixDQUFDdkIsUUFBU3VCLFFBQVQsRUFBbUJMLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFNBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFREcsT0FBS0QsSUFBTCxDQUFXLElBQVgsRUFBbUJFLFFBQW5COztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBaENEOztBQWtDQWdCLFNBQVFlLFNBQVIsQ0FBa0JPLElBQWxCLEdBQXlCLFNBQVNBLElBQVQsQ0FBZWxDLFNBQWYsRUFBMEI7QUFDbEQ7Ozs7Ozs7O0FBUUEsTUFBSTVCLEtBQU1nQixPQUFOLEVBQWV3QixPQUFmLEVBQXdCLElBQXhCLENBQUosRUFBb0M7QUFDbkMsVUFBTyxJQUFQO0FBQ0E7O0FBRURaLGNBQVkxQixLQUFNK0IsU0FBTixDQUFaOztBQUVBOzs7Ozs7OztBQVFBLE1BQUkxQixNQUFPVyxNQUFQLEtBQW1CLENBQUN4QixNQUFPd0IsTUFBUCxDQUF4QixFQUF5QztBQUN4QyxVQUFPdUIsS0FBS0wsS0FBTCxDQUFZLElBQVosRUFBa0JSLFNBQWxCLENBQVA7QUFDQTs7QUFFRCxPQUFLYyxPQUFMOztBQUVBakIsT0FBS1csS0FBTCxDQUFZLElBQVosRUFBa0JSLFNBQWxCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBaENEOztBQWtDQVksU0FBUWUsU0FBUixDQUFrQkcsS0FBbEIsR0FBMEIsU0FBU0EsS0FBVCxDQUFnQlMsT0FBaEIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQzFEOzs7Ozs7Ozs7QUFTQSxNQUFJcEUsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsQ0FBSixFQUFvQztBQUNuQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJekMsS0FBTVksS0FBTixFQUFhLElBQWIsQ0FBSixFQUF5QjtBQUN4QixVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJaEIsTUFBT3dFLE9BQVAsS0FBb0IsQ0FBQ2xFLFFBQVNrRSxPQUFULEVBQWtCaEQsUUFBbEIsQ0FBekIsRUFBdUQ7QUFDdEQsU0FBTSxJQUFJQyxLQUFKLENBQVcsdUJBQVgsQ0FBTjtBQUNBOztBQUVELE1BQUlnRCxXQUFXLElBQWYsRUFBcUI7QUFDcEIsT0FBSXJCLE9BQU8sSUFBWDs7QUFFQSxRQUFNcEMsS0FBTixJQUFnQnBCLE9BQU8rQixJQUFQLENBQWFELE9BQWIsRUFBd0IsU0FBU2dELFFBQVQsQ0FBbUIzQyxLQUFuQixFQUEwQjtBQUNqRXlDLFlBQVFqQyxJQUFSLENBQWMsSUFBZCxFQUFvQlIsS0FBcEI7O0FBRUFTLFVBQU1iLElBQU4sQ0FBWXlCLElBQVo7O0FBRUEsV0FBTyxJQUFQO0FBQ0EsSUFOZSxDQUFoQjs7QUFRQSxHQVhELE1BV0s7QUFDSixRQUFNcEMsS0FBTixJQUFnQnBCLE9BQU8rQixJQUFQLENBQWFELE9BQWIsRUFBd0I4QyxPQUF4QixDQUFoQjtBQUNBOztBQUVELFNBQU8sSUFBUDtBQUNBLEVBdENEOztBQXdDQTNCLFNBQVFlLFNBQVIsQ0FBa0JQLE1BQWxCLEdBQTJCLFNBQVNBLE1BQVQsQ0FBaUJyQixNQUFqQixFQUF5QjtBQUNuRDs7Ozs7Ozs7QUFRQSxNQUFJM0IsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsQ0FBSixFQUFvQztBQUNuQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxPQUFNekIsTUFBTixJQUFpQlksTUFBakI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFoQkQ7O0FBa0JBYSxTQUFRZSxTQUFSLENBQWtCZSxPQUFsQixHQUE0QixTQUFTQSxPQUFULEdBQW1CO0FBQzlDLE1BQUl0RSxLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVETCxRQUFNYixJQUFOLENBQVksSUFBWjs7QUFFQSxTQUFPLEtBQU1aLFFBQU4sQ0FBUDtBQUNBLFNBQU8sS0FBTUMsS0FBTixDQUFQOztBQUVBLE1BQUlnQixTQUFTLEtBQU1aLE1BQU4sQ0FBYjtBQUNBLFNBQU8sS0FBTUEsTUFBTixDQUFQOztBQUVBLFNBQU9ZLE1BQVA7QUFDQSxFQWREOztBQWdCQWEsU0FBUWUsU0FBUixDQUFrQlMsSUFBbEIsR0FBeUIsU0FBU0EsSUFBVCxDQUFldEMsS0FBZixFQUFzQkMsTUFBdEIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQ2pFOzs7Ozs7Ozs7O0FBVUEsTUFBSTVCLEtBQU1nQixPQUFOLEVBQWV3QixPQUFmLEVBQXdCLElBQXhCLENBQUosRUFBb0M7QUFDbkMsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSVAsVUFBVXFCLE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDMUIsUUFBS2lCLE1BQUwsQ0FBWW5DLEtBQVosQ0FBbUIsSUFBbkIsRUFBeUJsQyxLQUFNK0IsU0FBTixDQUF6QjtBQUNBOztBQUVELE9BQUtxQyxPQUFMOztBQUVBLE9BQUt0QyxJQUFMLENBQVcsU0FBWDtBQUNBUSxVQUFRTCxLQUFSOztBQUVBN0MsUUFBTzBCLE9BQVAsRUFBZ0J3QixPQUFoQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQTNCRDs7QUE2QkFBLFNBQVFlLFNBQVIsQ0FBa0JnQixNQUFsQixHQUEyQixTQUFTQSxNQUFULENBQWlCN0MsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDQyxTQUFoQyxFQUEyQztBQUNyRTs7Ozs7Ozs7OztBQVVBLE9BQU1sQixRQUFOLEVBQWlCOEQsT0FBakIsR0FBNEIxQyxHQUE1QjtBQUNFTSxPQURGLENBQ1NmLE9BRFQsRUFDa0IsQ0FBRUssS0FBRixFQUFTQyxNQUFULEVBQWtCVSxNQUFsQixDQUEwQmxDLEtBQU04QixTQUFOLEVBQWlCLENBQWpCLENBQTFCLENBRGxCOztBQUdBLFNBQU8sSUFBUDtBQUNBLEVBZkQ7O0FBaUJBTyxTQUFRZSxTQUFSLENBQWtCNUIsTUFBbEIsR0FBMkIsU0FBU0EsTUFBVCxHQUFrQjtBQUM1QyxTQUFPLEtBQU1aLE1BQU4sQ0FBUDtBQUNBLEVBRkQ7O0FBSUF5QixTQUFRZSxTQUFSLENBQWtCeEIsR0FBbEIsR0FBd0IsU0FBU0EsR0FBVCxDQUFjMEMsUUFBZCxFQUF3QkMsS0FBeEIsRUFBK0I7QUFDdEQ7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFJMUUsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsQ0FBSixFQUFvQztBQUNuQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJN0MsTUFBTzhFLFFBQVAsS0FBcUIsQ0FBQ3hFLFFBQVN3RSxRQUFULEVBQW1CRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFyQyxDQUExQixFQUF5RTtBQUN4RSxTQUFNLElBQUl6RCxLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELE9BQU1YLEtBQU4sRUFBZWdFLFFBQWYsSUFBNEJDLEtBQTVCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBekJEOztBQTJCQWxDLFNBQVFlLFNBQVIsQ0FBa0J1QixHQUFsQixHQUF3QixTQUFTQSxHQUFULENBQWNMLFFBQWQsRUFBd0I7QUFDL0M7Ozs7Ozs7Ozs7OztBQVlBLE1BQUk5RSxNQUFPOEUsUUFBUCxLQUFxQixDQUFDeEUsUUFBU3dFLFFBQVQsRUFBbUJFLFNBQVNDLE1BQVQsR0FBa0JDLE1BQXJDLENBQTFCLEVBQXlFO0FBQ3hFLFNBQU0sSUFBSXpELEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsU0FBTyxLQUFNWCxLQUFOLEVBQWVnRSxRQUFmLENBQVA7QUFDQSxFQWxCRDs7QUFvQkFqQyxTQUFRZSxTQUFSLENBQWtCUSxNQUFsQixHQUEyQixTQUFTQSxNQUFULENBQWlCdkMsUUFBakIsRUFBMkI7QUFDckQ7Ozs7Ozs7O0FBUUEsTUFBSXhCLEtBQU1nQixPQUFOLEVBQWV3QixPQUFmLEVBQXdCLElBQXhCLENBQUosRUFBb0M7QUFDbkMsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSTdDLE1BQU82QixRQUFQLEtBQXFCLENBQUN2QixRQUFTdUIsUUFBVCxFQUFtQkwsUUFBbkIsQ0FBMUIsRUFBeUQ7QUFDeEQsU0FBTSxJQUFJQyxLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELE9BQUsyRCxJQUFMLENBQVcsUUFBWCxFQUFxQnZELFFBQXJCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBcEJEOztBQXNCQWdCLFNBQVFlLFNBQVIsQ0FBa0J5QixLQUFsQixHQUEwQixTQUFTQSxLQUFULEdBQWlCO0FBQzFDLE9BQU1sRSxNQUFOLElBQWlCLElBQWpCOztBQUVBMEIsVUFBUzFCLE1BQVQsSUFBb0IsSUFBcEI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFORDs7QUFRQTBCLFNBQVFlLFNBQVIsQ0FBa0JiLE9BQWxCLEdBQTRCLFNBQVNBLE9BQVQsR0FBbUI7QUFDOUMsT0FBTTVCLE1BQU4sSUFBaUIsS0FBakI7O0FBRUEwQixVQUFTMUIsTUFBVCxJQUFvQixLQUFwQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQU5EOztBQVFBMEIsU0FBUWUsU0FBUixDQUFrQjBCLE9BQWxCLEdBQTRCLFNBQVNBLE9BQVQsQ0FBa0J4QyxJQUFsQixFQUF3QmYsS0FBeEIsRUFBK0JDLE1BQS9CLEVBQXVDQyxTQUF2QyxFQUFrRDtBQUM3RTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFJNUIsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsS0FBa0N0RCxLQUFNLEtBQU13QixRQUFOLENBQU4sQ0FBdEMsRUFBZ0U7QUFDL0QsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSWYsTUFBTzhDLElBQVAsS0FBaUIsQ0FBQ3hDLFFBQVN3QyxJQUFULEVBQWVtQyxNQUFmLENBQXRCLEVBQStDO0FBQzlDLFNBQU0sSUFBSXhELEtBQUosQ0FBVyxjQUFYLENBQU47QUFDQTs7QUFFRFEsY0FBWXpCLEtBQU04QixTQUFOLEVBQWlCLENBQWpCLENBQVo7O0FBRUEsT0FBS0QsSUFBTCxDQUFVSSxLQUFWLENBQWlCLElBQWpCLEVBQXVCLFdBQVdLLElBQVgsRUFBb0JmLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFvQ1UsTUFBcEMsQ0FBNENULFNBQTVDLENBQXZCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBNUJEOztBQThCQVksU0FBUWUsU0FBUixDQUFrQmQsSUFBbEIsR0FBeUIsU0FBU0EsSUFBVCxDQUFleUMsSUFBZixFQUFxQmYsT0FBckIsRUFBOEI7QUFDdEQ7Ozs7Ozs7OztBQVNBLE1BQUluRSxLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixLQUFrQ3RELEtBQU0sS0FBTXdCLFFBQU4sQ0FBTixDQUF0QyxFQUFnRTtBQUMvRCxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJZixNQUFPdUYsSUFBUCxLQUFpQixDQUFDakYsUUFBU2lGLElBQVQsRUFBZU4sTUFBZixDQUF0QixFQUErQztBQUM5QyxTQUFNLElBQUl4RCxLQUFKLENBQVcsbUJBQVgsQ0FBTjtBQUNBOztBQUVELE1BQUl6QixNQUFPd0UsT0FBUCxLQUFvQixDQUFDbEUsUUFBU2tFLE9BQVQsRUFBa0JoRCxRQUFsQixDQUF6QixFQUF1RDtBQUN0RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxzQkFBWCxDQUFOO0FBQ0E7O0FBRUQsT0FBSzJELElBQUwsV0FBb0J0QyxJQUFwQixFQUE2QjBCLE9BQTdCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBekJEOztBQTJCQTNCLFNBQVFlLFNBQVIsQ0FBa0I3QixLQUFsQixHQUEwQixTQUFTQSxLQUFULENBQWdCWSxLQUFoQixFQUF1QjtBQUNoRDs7Ozs7Ozs7QUFRQSxNQUFJLEVBQUdBLGlCQUFpQmxCLEtBQXBCLENBQUosRUFBaUM7QUFDaEMsU0FBTSxJQUFJQSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSXJCLEtBQU1ZLEtBQU4sRUFBYSxJQUFiLENBQUosRUFBeUI7QUFDeEIsVUFBTyxLQUFNQSxLQUFOLEVBQWUyQixLQUFmLENBQVA7QUFDQTs7QUFFRCxNQUFJLEtBQUs2QyxRQUFMLENBQWUsT0FBZixDQUFKLEVBQThCO0FBQzdCLFFBQUtuRCxJQUFMLENBQVcsT0FBWCxFQUFvQk0sS0FBcEI7QUFDQTs7QUFFRCxTQUFPLElBQVA7QUFDQSxFQXRCRDs7QUF3QkFFLFNBQVFlLFNBQVIsQ0FBa0I2QixPQUFsQixHQUE0QixTQUFTQSxPQUFULEdBQW1CO0FBQzlDLFNBQU8sS0FBS3pELE1BQUwsRUFBUDtBQUNBLEVBRkQ7O0FBSUFhLFNBQVFlLFNBQVIsQ0FBa0JLLFFBQWxCLEdBQTZCLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEQsU0FBT3ZELFFBQVMsS0FBS3NCLE1BQUwsRUFBVCxDQUFQO0FBQ0EsRUFGRDs7QUFJQWEsV0FBVTNDLFNBQVUyQyxPQUFWLEVBQW1CL0MsSUFBSTZCLElBQUosQ0FBVUQsT0FBVixHQUFuQixDQUFWOztBQUVBbUIsV0FBVWxDLFNBQVVrQyxPQUFWLEVBQW1CLE9BQW5CLENBQVY7O0FBRUE7Ozs7O0FBS0EsS0FBSTZDLFFBQVE1RixJQUFJNkIsSUFBSixDQUFVRCxPQUFWLEtBQVo7O0FBRUFqQixRQUFRb0MsT0FBUjtBQUNFOEMsT0FERixDQUNVMUUsS0FEVixFQUNpQnlFLEtBRGpCO0FBRUVDLE9BRkYsQ0FFVTdFLEtBRlYsRUFFaUIsRUFGakI7QUFHRTZFLE9BSEYsQ0FHVTVFLFFBSFYsRUFHb0IsRUFIcEI7QUFJRTZFLFVBSkYsQ0FJYSxNQUpiLEVBSXFCLFNBQVN0QixJQUFULEdBQWdCO0FBQ25DLE1BQUlqRSxLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUksQ0FBQ3pDLEtBQU1jLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBTCxFQUE2QjtBQUM1QixVQUFPLEtBQVA7QUFDQTs7QUFFRCxTQUFPLEtBQU1BLFFBQU4sRUFBaUJvRCxJQUFqQixFQUFQO0FBQ0EsRUFkRjtBQWVFc0IsVUFmRixDQWVhLFNBZmIsRUFld0IsU0FBU2pCLE9BQVQsR0FBbUI7QUFDekMsTUFBSXRFLEtBQU1nQixPQUFOLEVBQWV3QixPQUFmLEVBQXdCLElBQXhCLENBQUosRUFBb0M7QUFDbkMsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSSxDQUFDekMsS0FBTWMsUUFBTixFQUFnQixJQUFoQixDQUFMLEVBQTZCO0FBQzVCLFNBQU0sSUFBSU8sS0FBSixDQUFXLGlDQUFYLENBQU47QUFDQTs7QUFFRCxTQUFPLEtBQU1QLFFBQU4sRUFBaUJ5RCxPQUFqQixFQUFQO0FBQ0EsRUF6QkY7QUEwQkVpQixVQTFCRixDQTBCYSxRQTFCYixFQTBCdUIsU0FBU3ZDLE1BQVQsQ0FBaUJyQixNQUFqQixFQUF5QjtBQUM5Qzs7Ozs7Ozs7QUFRQSxNQUFJM0IsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsQ0FBSixFQUFvQztBQUNuQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJLENBQUN6QyxLQUFNYyxRQUFOLEVBQWdCLElBQWhCLENBQUwsRUFBNkI7QUFDNUIsU0FBTSxJQUFJTyxLQUFKLENBQVcsMENBQVgsQ0FBTjtBQUNBOztBQUVELFNBQU8sS0FBTVAsUUFBTixFQUFpQm1DLE1BQWpCLENBQXlCckIsTUFBekIsQ0FBUDtBQUNBLEVBNUNGO0FBNkNFNEQsVUE3Q0YsQ0E2Q2EsTUE3Q2IsRUE2Q3FCLFNBQVN6QixJQUFULENBQWVsQyxTQUFmLEVBQTBCO0FBQzdDOzs7Ozs7OztBQVFBLE1BQUk1QixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVEWixjQUFZMUIsS0FBTStCLFNBQU4sQ0FBWjs7QUFFQSxNQUFJbEMsS0FBTWMsUUFBTixFQUFnQixJQUFoQixDQUFKLEVBQTRCO0FBQzNCLFVBQU8sS0FBTUEsUUFBTixFQUFpQmlELElBQWpCLENBQXNCMUIsS0FBdEIsQ0FBNkIsS0FBTXZCLFFBQU4sQ0FBN0IsRUFBK0NlLFNBQS9DLENBQVA7QUFDQTs7QUFFRCxNQUFJK0IsV0FBVzdELE9BQVEwQyxPQUFSLEVBQWtCb0IsUUFBbEIsRUFBZjtBQUNBLE9BQUs1QixJQUFMLENBQVVJLEtBQVYsQ0FBaUJmLE9BQWpCLEVBQTBCLENBQU1zQyxRQUFOLFlBQXlCdEIsTUFBekIsQ0FBaUNULFNBQWpDLENBQTFCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBcEVGO0FBcUVFMkQsVUFyRUYsQ0FxRWEsTUFyRWIsRUFxRXFCLFNBQVN2QixJQUFULENBQWV0QyxLQUFmLEVBQXNCQyxNQUF0QixFQUE4QkMsU0FBOUIsRUFBeUM7QUFDNUQ7Ozs7Ozs7Ozs7QUFVQSxNQUFJNUIsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsQ0FBSixFQUFvQztBQUNuQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJUCxVQUFVcUIsTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUMxQixRQUFLaUIsTUFBTCxDQUFZbkMsS0FBWixDQUFtQixJQUFuQixFQUF5QmxDLEtBQU0rQixTQUFOLENBQXpCO0FBQ0E7O0FBRUQsTUFBSWxDLEtBQU1jLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBSixFQUE0QjtBQUMzQixRQUFLeUQsT0FBTDs7QUFFQSxHQUhELE1BR0s7QUFDSm5DLFNBQU1iLElBQU4sQ0FBWSxJQUFaO0FBQ0E7O0FBRUQsT0FBS1UsSUFBTCxDQUFXLFNBQVg7QUFDQSxPQUFLRyxLQUFMOztBQUVBN0MsUUFBTzBCLE9BQVAsRUFBZ0J3QixPQUFoQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQXJHRjtBQXNHRStDLFVBdEdGLENBc0dhLFFBdEdiLEVBc0d1QixTQUFTaEIsTUFBVCxDQUFpQjdDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDaEU7Ozs7Ozs7Ozs7QUFVQSxPQUFNbEIsUUFBTixFQUFpQjhELE9BQWpCLEdBQTRCMUMsR0FBNUI7QUFDRU0sT0FERixDQUNTZixPQURULEVBQ2tCLENBQUVLLEtBQUYsRUFBU0MsTUFBVCxFQUFrQlUsTUFBbEIsQ0FBMEJsQyxLQUFNOEIsU0FBTixFQUFpQixDQUFqQixDQUExQixDQURsQjs7QUFHQSxTQUFPLElBQVA7QUFDQSxFQXJIRjtBQXNIRXNELFVBdEhGLENBc0hhLEtBdEhiLEVBc0hvQixTQUFTeEQsR0FBVCxDQUFjMEMsUUFBZCxFQUF3QkMsS0FBeEIsRUFBK0I7QUFDakQ7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFJMUUsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsQ0FBSixFQUFvQztBQUNuQyxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJN0MsTUFBTzhFLFFBQVAsS0FBcUIsQ0FBQ3hFLFFBQVN3RSxRQUFULEVBQW1CRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFyQyxDQUExQixFQUF5RTtBQUN4RSxTQUFNLElBQUl6RCxLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELE9BQU1YLEtBQU4sRUFBZWdFLFFBQWYsSUFBNEJDLEtBQTVCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBL0lGO0FBZ0pFYSxVQWhKRixDQWdKYSxLQWhKYixFQWdKb0IsU0FBU1QsR0FBVCxDQUFjTCxRQUFkLEVBQXdCO0FBQzFDOzs7Ozs7Ozs7Ozs7QUFZQSxNQUFJOUUsTUFBTzhFLFFBQVAsS0FBcUIsQ0FBQ3hFLFFBQVN3RSxRQUFULEVBQW1CRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFyQyxDQUExQixFQUF5RTtBQUN4RSxTQUFNLElBQUl6RCxLQUFKLENBQVcsa0JBQVgsQ0FBTjtBQUNBOztBQUVELFNBQU8sS0FBTVgsS0FBTixFQUFlZ0UsUUFBZixDQUFQO0FBQ0EsRUFsS0Y7QUFtS0VjLFVBbktGLENBbUthLFFBbktiLEVBbUt1QixTQUFTeEIsTUFBVCxDQUFpQnZDLFFBQWpCLEVBQTJCO0FBQ2hEOzs7Ozs7OztBQVFBLE1BQUl4QixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUk3QyxNQUFPNkIsUUFBUCxLQUFxQixDQUFDdkIsUUFBU3VCLFFBQVQsRUFBbUJMLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFNBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxPQUFLMkQsSUFBTCxDQUFXLFFBQVgsRUFBcUJ2RCxRQUFyQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQXZMRjtBQXdMRStELFVBeExGLENBd0xhLE1BeExiLEVBd0xxQixTQUFTaEUsSUFBVCxDQUFlQyxRQUFmLEVBQXlCO0FBQzVDOzs7Ozs7OztBQVFBLE1BQUl4QixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUk1QyxPQUFRLEtBQU1jLFFBQU4sQ0FBUixDQUFKLEVBQWdDO0FBQy9CLFNBQU0sSUFBSVUsS0FBSixDQUFXLGdEQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJYixNQUFPVyxNQUFQLEtBQW1CeEIsTUFBT3dCLE1BQVAsQ0FBdkIsRUFBd0M7QUFDdkMsU0FBTSxJQUFJRSxLQUFKLENBQVcsb0RBQVgsQ0FBTjtBQUNBOztBQUVELE1BQUl6QixNQUFPNkIsUUFBUCxLQUFxQixDQUFDdkIsUUFBU3VCLFFBQVQsRUFBbUJMLFFBQW5CLENBQTFCLEVBQXlEO0FBQ3hELFNBQU0sSUFBSUMsS0FBSixDQUFXLGtCQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJckIsS0FBTWMsUUFBTixFQUFnQixJQUFoQixDQUFKLEVBQTRCO0FBQzNCLFVBQU8sS0FBTUEsUUFBTixFQUFpQlUsSUFBakIsQ0FBdUJDLFFBQXZCLENBQVA7QUFDQTs7QUFFRCxPQUFNZCxRQUFOLEVBQWlCYSxJQUFqQixDQUF1QmxDLE1BQU1pQyxJQUFOLENBQVlELE9BQVosRUFBdUJHLFFBQXZCLENBQXZCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBeE5GO0FBeU5FK0QsVUF6TkYsQ0F5TmEsTUF6TmIsRUF5TnFCLFNBQVNyQixJQUFULENBQWUxQyxRQUFmLEVBQXlCO0FBQzVDOzs7Ozs7OztBQVFBLE1BQUl4QixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUk3QyxNQUFPdUIsTUFBUCxLQUFtQmhDLEtBQU0sS0FBTXdCLFFBQU4sQ0FBTixDQUF2QixFQUFpRDtBQUNoRCxTQUFNLElBQUlVLEtBQUosQ0FBVyxpREFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSWIsTUFBT1csTUFBUCxLQUFtQnhCLE1BQU93QixNQUFQLENBQXZCLEVBQXdDO0FBQ3ZDLFNBQU0sSUFBSUUsS0FBSixDQUFXLG9EQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJekIsTUFBTzZCLFFBQVAsS0FBcUIsQ0FBQ3ZCLFFBQVN1QixRQUFULEVBQW1CTCxRQUFuQixDQUExQixFQUF5RDtBQUN4RCxTQUFNLElBQUlDLEtBQUosQ0FBVyxrQkFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSXJCLEtBQU1jLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBSixFQUE0QjtBQUMzQixVQUFPLEtBQU1BLFFBQU4sRUFBaUJxRCxJQUFqQixDQUF1QjFDLFFBQXZCLENBQVA7QUFDQTs7QUFFRCxPQUFNZCxRQUFOLEVBQWlCYSxJQUFqQixDQUF1QmxDLE1BQU1pQyxJQUFOLENBQVlELE9BQVosRUFBdUJHLFFBQXZCLENBQXZCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBelBGO0FBMFBFK0QsVUExUEYsQ0EwUGEsT0ExUGIsRUEwUHNCLFNBQVM3QixLQUFULENBQWdCUyxPQUFoQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDckQ7Ozs7Ozs7OztBQVNBLE1BQUlwRSxLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixDQUFKLEVBQW9DO0FBQ25DLFVBQU8sSUFBUDtBQUNBOztBQUVELE1BQUk3QyxNQUFPd0UsT0FBUCxLQUFvQixDQUFDbEUsUUFBU2tFLE9BQVQsRUFBa0JoRCxRQUFsQixDQUF6QixFQUF1RDtBQUN0RCxTQUFNLElBQUlDLEtBQUosQ0FBVyx1QkFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSXJCLEtBQU1jLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBSixFQUE0QjtBQUMzQixVQUFPLEtBQU1BLFFBQU4sRUFBaUJxRCxJQUFqQixDQUF1QkMsT0FBdkIsRUFBZ0NDLE1BQWhDLENBQVA7QUFDQTs7QUFFRCxNQUFJckUsS0FBTVksS0FBTixFQUFhLElBQWIsQ0FBSixFQUF5QjtBQUN4QixVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJeUQsV0FBVyxJQUFmLEVBQXFCO0FBQ3BCLE9BQUlyQixPQUFPLElBQVg7O0FBRUEsUUFBTXBDLEtBQU4sSUFBZ0JwQixPQUFPK0IsSUFBUCxDQUFhRCxPQUFiLEVBQXdCLFNBQVNnRCxRQUFULENBQW1CM0MsS0FBbkIsRUFBMEI7QUFDakV5QyxZQUFRakMsSUFBUixDQUFjLElBQWQsRUFBb0JSLEtBQXBCOztBQUVBUyxVQUFNYixJQUFOLENBQVl5QixJQUFaOztBQUVBLFdBQU8sSUFBUDtBQUNBLElBTmUsQ0FBaEI7O0FBUUEsR0FYRCxNQVdLO0FBQ0osUUFBTXBDLEtBQU4sSUFBZ0JwQixPQUFPK0IsSUFBUCxDQUFhRCxPQUFiLEVBQXdCOEMsT0FBeEIsQ0FBaEI7QUFDQTs7QUFFRCxTQUFPLElBQVA7QUFDQSxFQXBTRjtBQXFTRW9CLFVBclNGLENBcVNhLE9BclNiLEVBcVNzQixTQUFTUCxLQUFULEdBQWlCO0FBQ3JDLE1BQUloRixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixLQUFrQ3RELEtBQU0sS0FBTXdCLFFBQU4sQ0FBTixDQUF0QyxFQUFnRTtBQUMvRCxVQUFPLElBQVA7QUFDQTs7QUFFRCxPQUFNSSxNQUFOLElBQWlCLElBQWpCOztBQUVBLE1BQUlmLEtBQU1jLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBSixFQUE0QjtBQUMzQixVQUFPLEtBQU1BLFFBQU4sRUFBaUJtRSxLQUFqQixFQUFQO0FBQ0E7O0FBRUQsU0FBTyxJQUFQO0FBQ0EsRUFqVEY7QUFrVEVPLFVBbFRGLENBa1RhLFNBbFRiLEVBa1R3QixTQUFTUCxLQUFULEdBQWlCO0FBQ3ZDLE1BQUloRixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixLQUFrQ3RELEtBQU0sS0FBTXdCLFFBQU4sQ0FBTixDQUF0QyxFQUFnRTtBQUMvRCxVQUFPLElBQVA7QUFDQTs7QUFFRCxPQUFNSSxNQUFOLElBQWlCLEtBQWpCOztBQUVBLE1BQUlmLEtBQU1jLFFBQU4sRUFBZ0IsSUFBaEIsQ0FBSixFQUE0QjtBQUMzQixVQUFPLEtBQU1BLFFBQU4sRUFBaUI2QixPQUFqQixFQUFQO0FBQ0E7O0FBRUQsU0FBTyxJQUFQO0FBQ0EsRUE5VEY7QUErVEU2QyxVQS9URixDQStUYSxTQS9UYixFQStUd0IsU0FBU04sT0FBVCxDQUFrQnhDLElBQWxCLEVBQXdCZixLQUF4QixFQUErQkMsTUFBL0IsRUFBdUNDLFNBQXZDLEVBQWtEO0FBQ3hFOzs7Ozs7Ozs7Ozs7OztBQWNBLE1BQUk1QixLQUFNZ0IsT0FBTixFQUFld0IsT0FBZixFQUF3QixJQUF4QixLQUFrQ3RELEtBQU0sS0FBTXdCLFFBQU4sQ0FBTixDQUF0QyxFQUFnRTtBQUMvRCxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJZixNQUFPOEMsSUFBUCxLQUFpQixDQUFDeEMsUUFBU3dDLElBQVQsRUFBZW1DLE1BQWYsQ0FBdEIsRUFBK0M7QUFDOUMsU0FBTSxJQUFJeEQsS0FBSixDQUFXLGNBQVgsQ0FBTjtBQUNBOztBQUVEUSxjQUFZekIsS0FBTThCLFNBQU4sRUFBaUIsQ0FBakIsQ0FBWjs7QUFFQSxPQUFLRCxJQUFMLENBQVVJLEtBQVYsQ0FBaUIsSUFBakIsRUFBdUIsV0FBV0ssSUFBWCxFQUFvQmYsS0FBcEIsRUFBMkJDLE1BQTNCLEVBQW9DVSxNQUFwQyxDQUE0Q1QsU0FBNUMsQ0FBdkI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUEzVkY7QUE0VkUyRCxVQTVWRixDQTRWYSxNQTVWYixFQTRWcUIsU0FBUzlDLElBQVQsQ0FBZXlDLElBQWYsRUFBcUJmLE9BQXJCLEVBQThCO0FBQ2pEOzs7Ozs7Ozs7QUFTQSxNQUFJbkUsS0FBTWdCLE9BQU4sRUFBZXdCLE9BQWYsRUFBd0IsSUFBeEIsS0FBa0N0RCxLQUFNLEtBQU13QixRQUFOLENBQU4sQ0FBdEMsRUFBZ0U7QUFDL0QsVUFBTyxJQUFQO0FBQ0E7O0FBRUQsTUFBSWYsTUFBT3VGLElBQVAsS0FBaUIsQ0FBQ2pGLFFBQVNpRixJQUFULEVBQWVOLE1BQWYsQ0FBdEIsRUFBK0M7QUFDOUMsU0FBTSxJQUFJeEQsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJekIsTUFBT3dFLE9BQVAsS0FBb0IsQ0FBQ2xFLFFBQVNrRSxPQUFULEVBQWtCaEQsUUFBbEIsQ0FBekIsRUFBdUQ7QUFDdEQsU0FBTSxJQUFJQyxLQUFKLENBQVcsc0JBQVgsQ0FBTjtBQUNBOztBQUVELE9BQUsyRCxJQUFMLFdBQW9CRyxJQUFwQixFQUE2QmYsT0FBN0I7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFyWEY7QUFzWEVvQixVQXRYRixDQXNYYSxPQXRYYixFQXNYc0IsU0FBUzdELEtBQVQsQ0FBZ0JZLEtBQWhCLEVBQXVCO0FBQzNDOzs7Ozs7OztBQVFBLE1BQUksRUFBR0EsaUJBQWlCbEIsS0FBcEIsQ0FBSixFQUFpQztBQUNoQyxTQUFNLElBQUlBLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJckIsS0FBTVksS0FBTixFQUFhLElBQWIsQ0FBSixFQUF5QjtBQUN4QixVQUFPLEtBQU1BLEtBQU4sRUFBZTJCLEtBQWYsQ0FBUDtBQUNBOztBQUVELE1BQUksS0FBSzZDLFFBQUwsQ0FBZSxPQUFmLENBQUosRUFBOEI7QUFDN0IsUUFBS25ELElBQUwsQ0FBVyxPQUFYLEVBQW9CTSxLQUFwQjtBQUNBOztBQUVELFNBQU8sSUFBUDtBQUNBLEVBNVlGO0FBNllFbUIsTUE3WUYsQ0E2WVM0QixLQTdZVDs7QUErWUEsUUFBTzdDLE9BQVA7QUFDQSxDQTVqQ0Q7O0FBOGpDQWdELE9BQU9DLE9BQVAsR0FBaUJ4RSxPQUFqQiIsImZpbGUiOiJjYXRjaGVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGV0Z29cIixcblx0XHRcdFwicGF0aFwiOiBcImxldGdvL2NhdGNoZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJjYXRjaGVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJsZXRnb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGV0Z28uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsZXRnby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDYXRjaGVyIGNsYXNzIGZhY3RvcnkgZm9yIGhhbmRsaW5nIGNhdGNoZXItZmxvdyBwcm9jZWR1cmUuXG5cblx0XHRMYXRlciBtZXRob2Qgd2lsbCBiZSBleGVjdXRlZCBvbmNlLCBhbmQgYWxsIGNhbGxiYWNrcyB3aWxsIGJlIGV4ZWN1dGVkIG9uY2UuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJhY2tkXCI6IFwiYmFja2RcIixcblx0XHRcdFwiYnVybmVcIjogXCJidXJuZVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImVkb1wiOiBcImVkb1wiLFxuXHRcdFx0XCJleGVjZFwiOiBcImV4ZWNkXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwiaWRudHR5XCI6IFwiaWRudHR5XCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInN0YXRpc1wiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYmFja2QgPSByZXF1aXJlKCBcImJhY2tkXCIgKTtcbmNvbnN0IGJ1cm5lID0gcmVxdWlyZSggXCJidXJuZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZG8gPSByZXF1aXJlKCBcImVkb1wiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IG1ya2QgPSByZXF1aXJlKCBcIm1ya2RcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3Qgc3RhdGlzID0gcmVxdWlyZSggXCJzdGF0aXNcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBDQUNIRSA9IFN5bWJvbCggXCJjYWNoZVwiICk7XG5jb25zdCBDQUxMQkFDSyA9IFN5bWJvbCggXCJjYWxsYmFja1wiICk7XG5jb25zdCBERUZFUiA9IFN5bWJvbCggXCJkZWZlclwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBJTlNUQU5DRSA9IFN5bWJvbCggXCJpbnN0YW5jZVwiICk7XG5jb25zdCBQQVVTRUQgPSBTeW1ib2woIFwicGF1c2VkXCIgKTtcbmNvbnN0IFJFU1VMVCA9IFN5bWJvbCggXCJyZXN1bHRcIiApO1xuY29uc3QgU1RPUFBFRCA9IFN5bWJvbCggXCJzdG9wcGVkXCIgKTtcblxuY29uc3QgY2F0Y2hlciA9IGZ1bmN0aW9uIGNhdGNoZXIoIG1ldGhvZCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggbWV0aG9kICkgJiYgIXByb3R5cGUoIG1ldGhvZCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG1ldGhvZFwiICk7XG5cdH1cblxuXHRsZXQgY29udGV4dCA9IHplbGYoIHRoaXMgKTtcblxuXHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0bWV0aG9kID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggbWV0aG9kICk7XG5cdH1cblxuXHQvKjtcblx0XHRAbm90ZTpcblx0XHRcdFRoZXNlIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhY2Nlc3NpYmxlIG91dHNpZGUgdGhyb3VnaCB0aGUgY2F0Y2hlci5cblx0XHRAZW5kLW5vdGVcblx0Ki9cblx0bGV0IHB1c2ggPSBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0bGV0IG5leHQgPSBmdW5jdGlvbiBuZXh0KCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXHRcdGlmKCAoIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgKSAmJiBwcm90eXBlKCB0aGlzWyBERUZFUiBdLCBGVU5DVElPTiApICl7XG5cdFx0XHR0aGlzWyBERUZFUiBdKCBlcnJvciApO1xuXHRcdH1cblxuXHRcdGxldCBjYWxsYmFjayA9IHRoaXNbIENBTExCQUNLIF0uc3BsaWNlKCAwLCAxICkucG9wKCApO1xuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApICl7XG5cdFx0XHR0aGlzLnNldCggXCJyZXN1bHRcIiwgcmVzdWx0ICk7XG5cblx0XHRcdHRoaXMuZW1pdCggXCJsYXN0bHlcIiApO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHRyeXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRJZiB0aGUgbWV0aG9kIGludGVudGlvbmFsbHkgY2FsbHMgdGhlIGNhbGxiYWNrIHdpdGhvdXQgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdFx0dGhlbiBpdCBoYWx0cyB0aGUgY2hhaW4uXG5cdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0Ki9cblx0XHRcdGlmKCBhcmlkKCBhcmd1bWVudHMgKSApe1xuXHRcdFx0XHRyZXN1bHQgPSBjYWxsYmFjay5jYWxsKCBjb250ZXh0LCBlcnJvciwgcmVzdWx0ICk7XG5cblx0XHRcdFx0Zmx1c2guYmluZCggdGhpcyApKCApO1xuXG5cdFx0XHRcdHRoaXMuc2V0KCBcInJlc3VsdFwiLCByZXN1bHQgKTtcblxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzLCAyICk7XG5cblx0XHRcdFx0cmVzdWx0ID0gY2FsbGJhY2suYXBwbHkoIGNvbnRleHQsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHRcdH1cblxuXHRcdH1jYXRjaCggaXNzdWUgKXtcblx0XHRcdGVycm9yID0gaXNzdWU7XG5cblx0XHRcdHJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiggcmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgKXtcblx0XHRcdGVycm9yID0gcmVzdWx0O1xuXG5cdFx0XHRyZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSApe1xuXHRcdFx0dGhpcy5zZXQoIFwicmVzdWx0XCIsIHJlc3VsdCApO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFRoZSByZXN1bHQgb2YgdGhlIGxhc3QgY2FsbGJhY2sgaXMgcGFzc2VkIG9uIHRoZSBuZXh0IGNhbGxiYWNrLlxuXG5cdFx0XHRcdElmIHRoZSBjYWxsYmFjayBlbmNvdW50ZXJzIGFuIGVycm9yLCBpdCBpcyB1cCBmb3IgdGhlIG5leHQgY2FsbGJhY2tcblx0XHRcdFx0XHR0byBjb250aW51ZSB0aGUgY2hhaW4gb3IgaGFsdHMgdGhlIGNoYWluLlxuXG5cdFx0XHRcdEF1dG9tYXRpYyBjYWxsIG9mIHRoZSBuZXh0IGNhbGxiYWNrIGlmIHRoZSByZXN1bHQgaXMgYSBjYXRjaGVyLFxuXHRcdFx0XHRcdGlmIHRoZSBjYWxsYmFja3MgYXJlIG5vdCBlbXB0eSBhbmQgdGhlIGNhdGNoZXIgaXMgbm90IHBhdXNlZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoICEoIHJlc3VsdCBpbnN0YW5jZW9mIENhdGNoZXIgKSAmJiBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSAmJiAhdGhpc1sgUEFVU0VEIF0gKXtcblx0XHRcdG5leHQuYXBwbHkoIHRoaXMsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGxldCBmbG93ID0gZnVuY3Rpb24gZmxvdyggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuc2V0KCBcInBhcmFtZXRlclwiLCBwYXJhbWV0ZXIgKTtcblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFBvc3NpYmlsaXR5IHRoYXQgdGhlIGNhdGNoZXIgaXMgcGF1c2VkIGJlZm9yZSBmbG93aW5nLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHR0aGlzLnVucGF1c2UoICk7XG5cblx0XHR0cnl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0fS5iaW5kKCB7XG5cdFx0XHRcdFx0XCJzZWxmXCI6IHRoaXMsXG5cdFx0XHRcdFx0XCJjb250ZXh0XCI6IGNvbnRleHQsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogcGFyYW1ldGVyLFxuXHRcdFx0XHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcdFx0XHRcIm5leHRcIjogbmV4dFxuXHRcdFx0XHR9ICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gbGF0ZXIoICl7XG5cdFx0XHRcdFx0bGV0IHsgc2VsZiwgY29udGV4dCwgcGFyYW1ldGVyLCBtZXRob2QsIG5leHQgfSA9IHRoaXM7XG5cblx0XHRcdFx0XHRzZWxmLnJlY29yZCggbWV0aG9kLmFwcGx5KCBjb250ZXh0LCBbXG5cdFx0XHRcdFx0XHRiYWNrZC5iaW5kKCBzZWxmICkoIG5leHQgKVxuXHRcdFx0XHRcdF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblxuXHRcdFx0XHR9LmJpbmQoIHtcblx0XHRcdFx0XHRcInNlbGZcIjogdGhpcyxcblx0XHRcdFx0XHRcImNvbnRleHRcIjogY29udGV4dCxcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBwYXJhbWV0ZXIsXG5cdFx0XHRcdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFx0XHRcdFwibmV4dFwiOiBuZXh0XG5cdFx0XHRcdH0gKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggYGZhaWxlZCBmbG93IG1ldGhvZCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IGZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0d2hpbGUoIHRoaXNbIENBTExCQUNLIF0ubGVuZ3RoICkgdGhpc1sgQ0FMTEJBQ0sgXS5wb3AoICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRsZXQgQ2F0Y2hlciA9IGRpYXRvbSggXCJDYXRjaGVyXCIgKTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggY2FsbGJhY2ssIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiY2FsbGJhY2s6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRsZXQgc2VsZiA9IENhdGNoZXJbIElOU1RBTkNFIF0gPSB0aGlzO1xuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXSA9IENhdGNoZXJbIENBTExCQUNLIF07XG5cblx0XHR0aGlzWyBDQUNIRSBdID0gQ2F0Y2hlclsgQ0FDSEUgXTtcblxuXHRcdHRyeXtcblx0XHRcdHRoaXMubWVyZ2UoIENhdGNoZXJbIEVWRU5UIF0gKTtcblxuXHRcdFx0aWYoIHByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmICFleGVjZCggbWV0aG9kICkgKXtcblx0XHRcdFx0Zmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBERUZFUiwgQ2F0Y2hlciApICl7XG5cdFx0XHRcdHRoaXMuZGVmZXIoIENhdGNoZXJbIERFRkVSIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIFBBVVNFRCwgQ2F0Y2hlciApICl7XG5cdFx0XHRcdHRoaXNbIFBBVVNFRCBdID0gQ2F0Y2hlclsgUEFVU0VEIF07XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggQ2F0Y2hlciApLnRvU3RyaW5nKCApO1xuXHRcdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06cGFzc2AsIGZ1bmN0aW9uIHBhc3MoICl7XG5cdFx0XHRcdHNlbGYucGFzcy5hcHBseSggc2VsZiwgcmF6ZSggYXJndW1lbnRzICkgKTtcblx0XHRcdH0sIHsgXCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvblwiOiB0cnVlIH0gKTtcblxuXHRcdFx0dGhpcy5sYXN0bHkoIGZ1bmN0aW9uIGxhc3RseSggKXtcblx0XHRcdFx0c2VsZi5zdG9wKCApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdG5leHQuYmluZCggdGhpcyApKCBuZXcgRXJyb3IoIGBmYWlsZWQgY2F0Y2hlciwgJHsgZXJyb3Iuc3RhY2sgfWAgKSApO1xuXG5cdFx0fWZpbmFsbHl7XG5cdFx0XHRkZWxldGUgdGhpcy5pbml0aWFsaXplO1xuXHRcdH1cblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gZG9uZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICYmIGV4ZWNkKCBtZXRob2QgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKTtcblx0XHR9XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2goIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmaWxsZWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgcHVzaCBjYWxsYmFja1wiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHB1c2guYmluZCggdGhpcyApKCBjYWxsYmFjayApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoICFrZWluKCBDQUxMQkFDSywgdGhpcyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2F0Y2hlciBoYXMgYmVlbiByZWxlYXNlZCwgY2Fubm90IHB1c2ggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggbWV0aG9kICkgJiYgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiZW1wdHkgbGF0ZXIgbWV0aG9kLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHR9XG5cblx0XHRwdXNoLmJpbmQoIHRoaXMgKSggY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhc3MgPSBmdW5jdGlvbiBwYXNzKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0RmxvdyB0aGUgbWV0aG9kIGlmIG5vdCB5ZXQgY2FsbGVkLlxuXG5cdFx0XHRcdEl0IGlzIHRoZSBkZXZlbG9wZXIgcmVzcG9uc2liaWxpdHkgdG8gcHVzaCBhIGNhbGxiYWNrXG5cdFx0XHRcdFx0YmVmb3JlIHBhc3NpbmcgZmxvdy5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRydWx5KCBtZXRob2QgKSAmJiAhZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRyZXR1cm4gZmxvdy5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cdFx0fVxuXG5cdFx0dGhpcy51bnBhdXNlKCApO1xuXG5cdFx0bmV4dC5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5kZWZlciA9IGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwic3RyaWN0XCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZGVmZXIgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIHN0cmljdCA9PT0gdHJ1ZSApe1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHR0aGlzWyBERUZFUiBdID0gY2FsbGVkLmJpbmQoIGNvbnRleHQgKSggZnVuY3Rpb24gZGVsZWdhdGUoIGVycm9yICl7XG5cdFx0XHRcdGhhbmRsZXIuY2FsbCggdGhpcywgZXJyb3IgKTtcblxuXHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBoYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUucmVjb3JkID0gZnVuY3Rpb24gcmVjb3JkKCByZXN1bHQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0dGhpc1sgUkVTVUxUIF0gPSByZXN1bHQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gcmVsZWFzZSggKXtcblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cblx0XHRkZWxldGUgdGhpc1sgQ0FMTEJBQ0sgXTtcblx0XHRkZWxldGUgdGhpc1sgREVGRVIgXTtcblxuXHRcdGxldCByZXN1bHQgPSB0aGlzWyBSRVNVTFQgXTtcblx0XHRkZWxldGUgdGhpc1sgUkVTVUxUIF07XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPj0gMSApe1xuXHRcdFx0dGhpcy5kZXRvdXIuYXBwbHkoIHRoaXMsIHJhemUoIGFyZ3VtZW50cyApICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWxlYXNlKCApO1xuXG5cdFx0dGhpcy5lbWl0KCBcInJlbGVhc2VcIiApO1xuXHRcdENhdGNoZXIuZmx1c2goICk7XG5cblx0XHRidXJuZSggU1RPUFBFRCwgQ2F0Y2hlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZGV0b3VyID0gZnVuY3Rpb24gZGV0b3VyKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFwicmVzdWx0XCI6IFwiKlwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0dGhpc1sgQ0FMTEJBQ0sgXS5yZXZlcnNlKCApLnBvcCggKVxuXHRcdFx0LmFwcGx5KCBjb250ZXh0LCBbIGVycm9yLCByZXN1bHQgXS5jb25jYXQoIHNoZnQoIGFyZ3VtZW50cywgMyApICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCggKXtcblx0XHRyZXR1cm4gdGhpc1sgUkVTVUxUIF07XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCBwcm9wZXJ0eSwgdmFsdWUgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiBcIipcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIHByb3BlcnR5ICkgfHwgIXByb3R5cGUoIHByb3BlcnR5LCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIENBQ0hFIF1bIHByb3BlcnR5IF0gPSB2YWx1ZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInByb3BlcnR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJzeW1ib2xcIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb3BlcnR5XCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5sYXN0bHkgPSBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJjYWxsYmFjazpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBjYWxsYmFjayApIHx8ICFwcm90eXBlKCBjYWxsYmFjaywgRlVOQ1RJT04gKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdH1cblxuXHRcdHRoaXMub25jZSggXCJsYXN0bHlcIiwgY2FsbGJhY2sgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoICl7XG5cdFx0dGhpc1sgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0Q2F0Y2hlclsgUEFVU0VEIF0gPSB0cnVlO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUudW5wYXVzZSA9IGZ1bmN0aW9uIHVucGF1c2UoICl7XG5cdFx0dGhpc1sgUEFVU0VEIF0gPSBmYWxzZTtcblxuXHRcdENhdGNoZXJbIFBBVVNFRCBdID0gZmFsc2U7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50aHJvdWdoID0gZnVuY3Rpb24gdGhyb3VnaCggZmxvdywgZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJmbG93OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJlcnJvcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0RXJyb3Jcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwicmVzdWx0OnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBmbG93ICkgfHwgIXByb3R5cGUoIGZsb3csIFNUUklORyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBmbG93XCIgKTtcblx0XHR9XG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMsIDMgKTtcblxuXHRcdHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBgZmxvdzokeyBmbG93IH1gLCBlcnJvciwgcmVzdWx0IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Q2F0Y2hlci5wcm90b3R5cGUuZmxvdyA9IGZ1bmN0aW9uIGZsb3coIG5hbWUsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWU6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIG5hbWUgKSB8fCAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgbmFtZVwiICk7XG5cdFx0fVxuXG5cdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGZsb3cgaGFuZGxlclwiICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vbmNlKCBgZmxvdzokeyBmbG93IH1gLCBoYW5kbGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIGVycm9yKCBpc3N1ZSApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiaXNzdWU6cmVxdWlyZWRcIjogRXJyb3Jcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoICEoIGlzc3VlIGluc3RhbmNlb2YgRXJyb3IgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgaXNzdWVcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRyZXR1cm4gdGhpc1sgREVGRVIgXSggaXNzdWUgKTtcblx0XHR9XG5cblx0XHRpZiggdGhpcy5oYXNFdmVudCggXCJlcnJvclwiICkgKXtcblx0XHRcdHRoaXMuZW1pdCggXCJlcnJvclwiLCBpc3N1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdENhdGNoZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiB2YWx1ZU9mKCApe1xuXHRcdHJldHVybiB0aGlzLnJlc3VsdCggKTtcblx0fTtcblxuXHRDYXRjaGVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCApe1xuXHRcdHJldHVybiBzdHJpbmdlKCB0aGlzLnJlc3VsdCggKSApO1xuXHR9O1xuXG5cdENhdGNoZXIgPSBoZXJlZGl0byggQ2F0Y2hlciwgZWRvLmJpbmQoIGNvbnRleHQgKSggKSApO1xuXG5cdENhdGNoZXIgPSBzeW1iaW90ZSggQ2F0Y2hlciwgXCJFdmVudFwiICk7XG5cblx0Lyo7XG5cdFx0QG5vdGU6XG5cdFx0XHRXZSBzaG91bGQgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBFdmVudCBoZXJlLlxuXHRcdEBlbmQtbm90ZVxuXHQqL1xuXHRsZXQgZXZlbnQgPSBlZG8uYmluZCggY29udGV4dCApKCApKCApO1xuXG5cdHN0YXRpcyggQ2F0Y2hlciApXG5cdFx0LmF0dGFjaCggRVZFTlQsIGV2ZW50IClcblx0XHQuYXR0YWNoKCBDQUNIRSwgeyB9IClcblx0XHQuYXR0YWNoKCBDQUxMQkFDSywgWyBdIClcblx0XHQuaW1wbGVtZW50KCBcImRvbmVcIiwgZnVuY3Rpb24gZG9uZSggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLmRvbmUoICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJyZWxlYXNlXCIsIGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIWtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCByZWxlYXNlIGluYWN0aXZlIGNhdGNoZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5yZWxlYXNlKCApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVjb3JkXCIsIGZ1bmN0aW9uIHJlY29yZCggcmVzdWx0ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAha2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHJlY29yZCByZXN1bHQgb24gaW5hY3RpdmUgY2F0Y2hlclwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnJlY29yZCggcmVzdWx0ICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJwYXNzXCIsIGZ1bmN0aW9uIHBhc3MoIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXI6cmVxdWlyZWRcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS5wYXNzLmFwcGx5KCB0aGlzWyBJTlNUQU5DRSBdLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGlkZW50aXR5ID0gaWRudHR5KCBDYXRjaGVyICkudG9TdHJpbmcoICk7XG5cdFx0XHR0aGlzLmVtaXQuYXBwbHkoIGNvbnRleHQsIFsgYCR7IGlkZW50aXR5IH06cGFzc2AgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwic3RvcFwiLCBmdW5jdGlvbiBzdG9wKCBlcnJvciwgcmVzdWx0LCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXJyb3JcIjogRXJyb3IsXG5cdFx0XHRcdFx0XHRcInJlc3VsdFwiOiBcIipcIixcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggYXJndW1lbnRzLmxlbmd0aCA+PSAxICl7XG5cdFx0XHRcdHRoaXMuZGV0b3VyLmFwcGx5KCB0aGlzLCByYXplKCBhcmd1bWVudHMgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHR0aGlzLnJlbGVhc2UoICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHRmbHVzaC5iaW5kKCB0aGlzICkoICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZW1pdCggXCJyZWxlYXNlXCIgKTtcblx0XHRcdHRoaXMuZmx1c2goICk7XG5cblx0XHRcdGJ1cm5lKCBTVE9QUEVELCBDYXRjaGVyICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZGV0b3VyXCIsIGZ1bmN0aW9uIGRldG91ciggZXJyb3IsIHJlc3VsdCwgcGFyYW1ldGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImVycm9yXCI6IEVycm9yLFxuXHRcdFx0XHRcdFx0XCJyZXN1bHRcIjogXCIqXCIsXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5yZXZlcnNlKCApLnBvcCggKVxuXHRcdFx0XHQuYXBwbHkoIGNvbnRleHQsIFsgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggc2hmdCggYXJndW1lbnRzLCAzICkgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInNldFwiLCBmdW5jdGlvbiBzZXQoIHByb3BlcnR5LCB2YWx1ZSApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJwcm9wZXJ0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcInZhbHVlXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIG1ya2QoIFNUT1BQRUQsIENhdGNoZXIsIHRydWUgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUNIRSBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZ2V0XCIsIGZ1bmN0aW9uIGdldCggcHJvcGVydHkgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwicHJvcGVydHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBwcm9wZXJ0eSApIHx8ICFwcm90eXBlKCBwcm9wZXJ0eSwgTlVNQkVSICsgU1RSSU5HICsgU1lNQk9MICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcHJvcGVydHlcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgQ0FDSEUgXVsgcHJvcGVydHkgXTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImxhc3RseVwiLCBmdW5jdGlvbiBsYXN0bHkoIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLm9uY2UoIFwibGFzdGx5XCIsIGNhbGxiYWNrICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBjYWxsYmFjayApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmlsbGVkKCB0aGlzWyBDQUxMQkFDSyBdICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcInB1c2ggY2FsbGJhY2sgb25jZSwgY2Fubm90IHB1c2ggY2FsbGJhY2sgYWdhaW5cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHJ1bHkoIG1ldGhvZCApICYmIGV4ZWNkKCBtZXRob2QgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwibGF0ZXIgbWV0aG9kIGV4ZWN1dGVkLCBjYW5ub3QgZm9sbG93IHdpdGggY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGNhbGxiYWNrICkgfHwgIXByb3R5cGUoIGNhbGxiYWNrLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNhbGxiYWNrXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0ucHVzaCggY2FsbGJhY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgQ0FMTEJBQ0sgXS5wdXNoKCBiYWNrZC5iaW5kKCBjb250ZXh0ICkoIGNhbGxiYWNrICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ0aGVuXCIsIGZ1bmN0aW9uIHRoZW4oIGNhbGxiYWNrICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggbWV0aG9kICkgJiYgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJlbXB0eSBsYXRlciBtZXRob2QsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0cnVseSggbWV0aG9kICkgJiYgZXhlY2QoIG1ldGhvZCApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJsYXRlciBtZXRob2QgZXhlY3V0ZWQsIGNhbm5vdCBmb2xsb3cgd2l0aCBjYWxsYmFja1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggY2FsbGJhY2sgKSB8fCAhcHJvdHlwZSggY2FsbGJhY2ssIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2FsbGJhY2tcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS50aGVuKCBjYWxsYmFjayApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBDQUxMQkFDSyBdLnB1c2goIGJhY2tkLmJpbmQoIGNvbnRleHQgKSggY2FsbGJhY2sgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImRlZmVyXCIsIGZ1bmN0aW9uIGRlZmVyKCBoYW5kbGVyLCBzdHJpY3QgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcInN0cmljdFwiOiBcImJvb2xlYW5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGRlZmVyIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZigga2VpbiggSU5TVEFOQ0UsIHRoaXMgKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSU5TVEFOQ0UgXS50aGVuKCBoYW5kbGVyLCBzdHJpY3QgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGtlaW4oIERFRkVSLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBzdHJpY3QgPT09IHRydWUgKXtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdHRoaXNbIERFRkVSIF0gPSBjYWxsZWQuYmluZCggY29udGV4dCApKCBmdW5jdGlvbiBkZWxlZ2F0ZSggZXJyb3IgKXtcblx0XHRcdFx0XHRoYW5kbGVyLmNhbGwoIHRoaXMsIGVycm9yICk7XG5cblx0XHRcdFx0XHRmbHVzaC5iaW5kKCBzZWxmICkoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpc1sgREVGRVIgXSA9IGNhbGxlZC5iaW5kKCBjb250ZXh0ICkoIGhhbmRsZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJwYXVzZVwiLCBmdW5jdGlvbiBwYXVzZSggKXtcblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBQQVVTRUQgXSA9IHRydWU7XG5cblx0XHRcdGlmKCBrZWluKCBJTlNUQU5DRSwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBJTlNUQU5DRSBdLnBhdXNlKCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInVucGF1c2VcIiwgZnVuY3Rpb24gcGF1c2UoICl7XG5cdFx0XHRpZiggbXJrZCggU1RPUFBFRCwgQ2F0Y2hlciwgdHJ1ZSApIHx8IGFyaWQoIHRoaXNbIENBTExCQUNLIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgUEFVU0VEIF0gPSBmYWxzZTtcblxuXHRcdFx0aWYoIGtlaW4oIElOU1RBTkNFLCB0aGlzICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIElOU1RBTkNFIF0udW5wYXVzZSggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJ0aHJvdWdoXCIsIGZ1bmN0aW9uIHRocm91Z2goIGZsb3csIGVycm9yLCByZXN1bHQsIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJmbG93OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcImVycm9yOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdFx0RXJyb3Jcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcInJlc3VsdDpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGZsb3cgKSB8fCAhcHJvdHlwZSggZmxvdywgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZmxvd1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cywgMyApO1xuXG5cdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgYGZsb3c6JHsgZmxvdyB9YCwgZXJyb3IsIHJlc3VsdCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJmbG93XCIsIGZ1bmN0aW9uIGZsb3coIG5hbWUsIGhhbmRsZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZTpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBtcmtkKCBTVE9QUEVELCBDYXRjaGVyLCB0cnVlICkgfHwgYXJpZCggdGhpc1sgQ0FMTEJBQ0sgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIG5hbWUgKSB8fCAhcHJvdHlwZSggbmFtZSwgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZmxvdyBuYW1lXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGZhbHp5KCBoYW5kbGVyICkgfHwgIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZmxvdyBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5vbmNlKCBgZmxvdzokeyBuYW1lIH1gLCBoYW5kbGVyICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZXJyb3JcIiwgZnVuY3Rpb24gZXJyb3IoIGlzc3VlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImlzc3VlOnJlcXVpcmVkXCI6IEVycm9yXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICEoIGlzc3VlIGluc3RhbmNlb2YgRXJyb3IgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBpc3N1ZVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBrZWluKCBERUZFUiwgdGhpcyApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBERUZFUiBdKCBpc3N1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGhpcy5oYXNFdmVudCggXCJlcnJvclwiICkgKXtcblx0XHRcdFx0dGhpcy5lbWl0KCBcImVycm9yXCIsIGlzc3VlICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5tZXJnZSggZXZlbnQgKTtcblxuXHRyZXR1cm4gQ2F0Y2hlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2F0Y2hlcjtcbiJdfQ==
//# sourceMappingURL=catcher.support.js.map
