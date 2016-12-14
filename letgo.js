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
		Construct a catcher flow procedure.

		This will return a catcher function which should
			be returned to catch a callback.

		The catcher contains a cache with the callback.

		The catcher returns the cache.

		The cache contains the result and callback.

		Passing a custom method to letgo executes the method after consuming the callback
			and after executing the catcher function. This will provide for a more
			specific flow of procedures.
	@end-module-documentation

	@include:
		{
			"called": "called",
			"harden": "harden",
			"protype": "protype",
			"truly": "truly",
			"vound": "vound",
			"zelf": "zelf",
		}
	@end-include
*/

const called = require( "called" );
const harden = require( "harden" );
const protype = require( "protype" );
const truly = require( "truly" );
const vound = require( "vound" );
const zelf = require( "zelf" );

const letgo = function letgo( method ){
	let self = zelf( this );

	let cache = { "callback": called.bind( self )( ) };

	let catcher = called.bind( self )( function catcher( callback ){

		cache.callback = called.bind( self )( callback );

		/*;
			@note:
				If the method is given, it will execute the method
					after the catcher function is called.
			@end-note
		*/
		if( truly( method ) && protype( method, FUNCTION ) ){
			try{
				vound( method, self )( cache );

			}catch( error ){
				cache.callback( new Error( `error executing catcher custom method, ${ error }` ) );
			}
		}

		return cache;
	} );

	harden( "cache", cache, catcher );

	return catcher;
};

module.exports = letgo;
