"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "letgo",
			"path": "letgo/letgo.js",
			"file": "letgo.js",
			"module": "letgo",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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

		The catcher returns the cache by default.

		The cache contains the result and callback.

		Passing a custom method to letgo executes the method after consuming the callback
			and after executing the catcher function. This will provide for a more
			specific flow of procedures.

		Passing a custom method will change the flow of the procedure. The method
			is executed once and the result will be saved forever.

		An internal cleaning mechanism allows you to clean up the cache data.

		The result of the custom method will be returned instead of cache if it is given.
	@end-module-documentation

	@include:
		{
			"arid": "arid",
			"budge": "budge",
			"called": "called",
			"depher": "depher",
			"filled": "filled",
			"harden": "harden",
			"protype": "protype",
			"truly": "truly",
			"zelf": "zelf",
		}
	@end-include
*/

const arid = require( "arid" );
const budge = require( "budge" );
const called = require( "called" );
const depher = require( "depher" );
const filled = require( "filled" );
const harden = require( "harden" );
const protype = require( "protype" );
const truly = require( "truly" );
const zelf = require( "zelf" );

//: @support-module:
	//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	Array.prototype.every||(Array.prototype.every=function(r,t){"use strict";
	var e,n;if(null==this)throw new TypeError("this is null or not defined");
	var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;
	for(arguments.length>1&&(e=t),n=0;i>n;){var f;if(n in o){f=o[n];var y=r.call(e,f,n,o);
	if(!y)return!1}n++}return!0});
//: @end-support-module

//: @support-module:
	//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	Array.prototype.some||(Array.prototype.some=function(r){"use strict";
	if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");
	if("function"!=typeof r)throw new TypeError;for(var e=Object(this),t=e.length>>>0,
	o=arguments.length>=2?arguments[1]:void 0,n=0;t>n;n++)
	if(n in e&&r.call(o,e[n],n,e))return!0;return!1});
//: @end-support-module

const CLEANER = Symbol( "cleaner" );
const CHECKER = Symbol( "checker" );

const letgo = function letgo( method ){
	/*;
		@meta-configuration:
			{
				"method": "function"
			}
		@end-meta-configuration
	*/

	if( truly( method ) && !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	let self = zelf( this );

	let cache = {
		[ CHECKER ]: [ ],
		[ CLEANER ]: [ ],
		"callback": called.bind( self )( )
	};

	/*;
		@note:
			This is the default cleaner.
		@end-note
	*/
	cache[ CLEANER ].push( function clean( ){
		Object.getOwnPropertyNames( cache ).forEach( ( name ) => {
			if( name != "callback" ){
				try{ cache[ name ] = undefined; }catch( error ){ }
			}
		} );
	} );

	/*;
		@note:
			This is the default checker if execution has finished.
		@end-note
	*/
	cache[ CHECKER ].push( function check( ){
		return ( truly( cache.callback ) && cache.callback.called( ) ) || arid( cache[ CLEANER ] );
	} );

	let catcher = called.bind( self )( function catcher( callback ){
		cache.callback = called.bind( self )( callback );

		/*;
			@note:
				Possible usage of the passed parameters as initial values.
			@end-note
		*/
		let parameter = budge( arguments );
		cache.parameter = parameter;

		/*;
			@note:
				If the method is given, it will execute the method
					after the catcher function is called.

				This will return the result of the method instead of the cache.
			@end-note
		*/
		if( truly( method ) && protype( method, FUNCTION ) ){
			try{
				/*;
					@note:
						Don't change this structure, cache should come first.
					@end-note
				*/
				let result = method.apply( self, [ cache ].concat( parameter ) );

				cache.result = result;

				return result;

			}catch( error ){
				return cache.callback( new Error( `error executing catcher custom method, ${ error }` ) );
			}
		}

		return cache;
	} );

	/*;
		@note:
			This is the heart of the catcher-flow procedure.
		@end-note
	*/
	harden( "cache", cache, catcher );

	/*;
		@note:
			This method is provided to prevent internal memory leaks.
		@end-note
	*/
	harden( "release", function release( cleaner ){
		if( protype( cleaner, FUNCTION ) ){
			cache[ CLEANER ].push( cleaner );

			return catcher;
		}

		if( arid( cache[ CLEANER ] ) ){
			return catcher;
		}

		let reset = depher( arguments, BOOLEAN, false );
		if( reset ){
			while( filled( cache[ CLEANER ] ) ){
				cache[ CLEANER ].pop( )( );
			}

			while( filled( cache[ CHECKER ] ) ){
				cache[ CHECKER ].pop( );
			}

		}else{
			cache[ CLEANER ].forEach( ( cleaner ) => { cleaner( ); } );
		}

		return catcher;
	}, catcher );

	/*;
		@note:
			This method is used to register checker and check if the catcher is already done.
		@end-note
	*/
	harden( "done", function done( checker ){
		if( protype( checker, FUNCTION ) ){
			cache[ CHECKER ].push( checker );

			return catcher;
		}

		/*;
			@note:
				If the checkers are empty it means the catcher has been reset.
			@end-note
		*/
		if( arid( cache[ CHECKER ] ) ){
			return true;
		}

		let strict = depher( arguments, BOOLEAN, false );
		if( strict ){
			return cache[ CHECKER ].every( ( checker ) => { return checker( ); } );

		}else{
			return cache[ CHECKER ].some( ( checker ) => { return checker( ); } );
		}

	}, catcher );

	return catcher;
};

module.exports = letgo;
