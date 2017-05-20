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
              			"file": "catcher.js",
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
              			"budge": "budge",
              			"called": "called",
              			"diatom": "diatom",
              			"execd": "execd",
              			"falzy": "falzy",
              			"kein": "kein",
              			"protype": "protype",
              			"raze": "raze",
              			"statis": "statis",
              			"stringe": "stringe",
              			"truly": "truly",
              			"zelf": "zelf"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var asea = require("asea");
var backd = require("backd");
var budge = require("budge");
var called = require("called");
var diatom = require("diatom");
var execd = require("execd");
var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var raze = require("raze");
var statis = require("statis");
var stringe = require("stringe");
var truly = require("truly");
var zelf = require("zelf");

var CALLBACK = (0, _symbol2.default)("callback");
var DEFER = (0, _symbol2.default)("defer");
var INSTANCE = (0, _symbol2.default)("instance");
var RESULT = (0, _symbol2.default)("result");

var catcher = function catcher(method, context) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"method": "function",
                                                 			"context": "*"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if (truly(method) && !protype(method, FUNCTION)) {
		throw new Error("invalid method");
	}

	context = zelf(context);
	method = called.bind(context)(method);

	var Catcher = diatom("Catcher");

	statis(Catcher).
	implement("done", function done() {
		if (!kein(INSTANCE, this)) {
			return false;
		}

		return this[INSTANCE].done();
	});

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

	var record = function record(result) {
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

				this.release();

				return result;

			} else {
				parameter = budge(arguments, 2);

				result = callback.apply(context, [error, result].concat(parameter));
			}

		} catch (issue) {
			error = issue;

			if (protype(this[DEFER], FUNCTION)) {
				this[DEFER](error);
			}

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

		try {
			if (asea.server) {
				process.nextTick(function later() {var
					self = this.self,context = this.context,parameter = this.parameter,method = this.method,record = this.record,next = this.next;

					record.bind(self)(method.apply(context, [
					backd.bind(self)(next)].
					concat(parameter)));

				}.bind({
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"record": record,
					"next": next }));


			} else if (asea.client) {
				var timeout = setTimeout(function later() {var
					self = this.self,context = this.context,parameter = this.parameter,method = this.method,record = this.record,next = this.next;

					record.bind(self)(method.apply(context, [
					backd.bind(self)(next)].
					concat(parameter)));

					clearTimeout(timeout);

				}.bind({
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"record": record,
					"next": next }));

			}

			return this;

		} catch (error) {
			throw new Error("failed flow method, " + error.stack);
		}
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

		Catcher[INSTANCE] = this;

		parameter = budge(arguments);

		try {
			this[CALLBACK] = [];

			push.bind(this)(callback);

			flow.apply(this, parameter);

			return this;

		} catch (error) {
			next.bind(this)(new Error("failed catcher, " + parameter + ", " + error.stack));

		} finally {
			delete this.initialize;
		}
	};

	Catcher.prototype.done = function done() {
		return arid(this[CALLBACK]) && execd(method);
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

	Catcher.prototype.defer = function defer(handler, strict) {var _this = this;
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

			this[DEFER] = called.bind(context)(function (error) {
				handler.call(_this, error);

				self.release();
			});

		} else {
			this[DEFER] = called.bind(context)(handler);
		}

		return this;
	};

	Catcher.prototype.release = function release() {
		console.log("release");

		while (this[CALLBACK].length) {this[CALLBACK].pop();}

		delete this[CALLBACK];

		return this;
	};

	Catcher.prototype.result = function result() {
		return this[RESULT];
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

//# sourceMappingURL=catcher.js.map