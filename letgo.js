/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "letgo",
			"path": "letgo/letgo.js",
			"file": "letgo.js",
			"module": "letgo",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/letgo.git",
			"test": "letgo-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		This will return a catcher function which should
			be returned to catch a callback.

		The catcher contains a cache with the callback.

		The catcher returns the cache.
	@end-module-documentation

	@include:
		{
			"called": "called",
			"harden": "harden",
			"zelf": "zelf"
		}
	@end-include
*/

if( typeof require == "function" ){
	var called = require( "called" );
	var harden = require( "harden" );
	var zelf = require( "zelf" );
}

if( typeof window != "undefined" && !( "called" in window ) ){
	throw new Error( "called is not defined" );
}

if( typeof window != "undefined" && !( "harden" in window ) ){
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" && !( "zelf" in window ) ){
	throw new Error( "zelf is not defined" );
}

var letgo = function letgo( ){
	let self = zelf( this );

	let cache = { "callback": called.bind( self )( ) };

	let catcher = function catcher( callback ){
		cache.callback = called.bind( self )( callback );

		return cache;
	};

	harden( "cache", cache, catcher );

	return catcher;
};

if( typeof module != "undefined" && typeof module.exports != "undefined" ){
	module.exports = letgo;
}
