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
*/

const arid = require( "arid" );
const asea = require( "asea" );
const backd = require( "backd" );
const budge = require( "budge" );
const called = require( "called" );
const diatom = require( "diatom" );
const execd = require( "execd" );
const falzy = require( "falzy" );
const kein = require( "kein" );
const protype = require( "protype" );
const raze = require( "raze" );
const statis = require( "statis" );
const stringe = require( "stringe" );
const truly = require( "truly" );
const zelf = require( "zelf" );

const CALLBACK = Symbol( "callback" );
const DEFER = Symbol( "defer" );
const INSTANCE = Symbol( "instance" );
const RESULT = Symbol( "result" );

const catcher = function catcher( method, context ){
	/*;
		@meta-configuration:
			{
				"method": "function",
				"context": "*"
			}
		@end-meta-configuration
	*/

	if( truly( method ) && !protype( method, FUNCTION ) ){
		throw new Error( "invalid method" );
	}

	context = zelf( context );
	method = called.bind( context )( method );

	let Catcher = diatom( "Catcher" );

	statis( Catcher )
		.implement( "done", function done( ){
			if( !kein( INSTANCE, this ) ){
				return false;
			}

			return this[ INSTANCE ].done( );
		} )
		.implement( "release", function release( ){
			if( !kein( INSTANCE, this ) ){
				throw new Error( "cannot release inactive catcher" );
			}

			return this[ INSTANCE ].release( );
		} );

	/*;
		@note:
			These methods should not be accessible outside through the catcher.
		@end-note
	*/
	let push = function push( callback ){
		/*;
			@meta-configuration:
				{
					"callback": "function"
				}
			@end-meta-configuration
		*/

		if( falzy( callback ) || !protype( callback, FUNCTION ) ){
			throw new Error( "invalid callback" );
		}

		this[ CALLBACK ].push( backd.bind( context )( callback ) );

		return this;
	};

	let record = function record( result ){
		/*;
			@meta-configuration:
				{
					"result:required": "*",
				}
			@end-meta-configuration
		*/

		this[ RESULT ] = result;

		return this;
	};

	let next = function next( error, result, parameter ){
		/*;
			@meta-configuration:
				{
					"error": Error,
					"result:required": "*",
					"parameter": "..."
				}
			@end-meta-configuration
		*/
		if( ( error instanceof Error ) && protype( this[ DEFER ], FUNCTION ) ){
			this[ DEFER ]( error );
		}

		let callback = this[ CALLBACK ].splice( 0, 1 ).pop( );

		if( falzy( callback ) ){
			return result;
		}

		try{
			/*;
				@note:
					If the method intentionally calls the callback without parameters
						then it halts the chain.
				@end-note
			*/
			if( arid( arguments ) ){
				result = callback.call( context );

				flush.bind( this )( );

				return result;

			}else{
				parameter = budge( arguments, 2 );

				result = callback.apply( context, [ error, result ].concat( parameter ) );
			}

		}catch( issue ){
			error = issue;

			result = undefined;
		}

		if( result instanceof Error ){
			error = result;

			result = undefined;
		}

		/*;
			@note:
				The result of the last callback is passed on the next callback.

				If the callback encounters an error, it is up for the next callback
					to continue the chain or halts the chain.
			@end-note
		*/
		if( !( result instanceof Catcher ) ){
			next.apply( this, [ error, result ].concat( parameter ) );
		}

		return result;
	};

	let flow = function flow( parameter ){
		/*;
			@meta-configuration:
				{
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		parameter = raze( arguments );

		try{
			if( asea.server ){
				process.nextTick( function later( ){
					let { self, context, parameter, method, record, next } = this;

					record.bind( self )( method.apply( context, [
						backd.bind( self )( next )
					].concat( parameter ) ) );

				}.bind( {
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"record": record,
					"next": next
				} ) );

			}else if( asea.client ){
				let timeout = setTimeout( function later( ){
					let { self, context, parameter, method, record, next } = this;

					record.bind( self )( method.apply( context, [
						backd.bind( self )( next )
					].concat( parameter ) ) );

					clearTimeout( timeout );

				}.bind( {
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"record": record,
					"next": next
				} ) );
			}

			return this;

		}catch( error ){
			throw new Error( `failed flow method, ${ error.stack }` );
		}
	};

	let flush = function flush( ){
		while( this[ CALLBACK ].length ) this[ CALLBACK ].pop( );

		return this;
	};

	Catcher.prototype.initialize = function initialize( callback, parameter ){
		/*;
			@meta-configuration:
				{
					"callback:required": "function",
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		if( falzy( callback ) || !protype( callback, FUNCTION ) ){
			throw new Error( "invalid callback" );
		}

		Catcher[ INSTANCE ] = this;

		parameter = budge( arguments );

		try{
			this[ CALLBACK ] = [ ];

			push.bind( this )( callback );

			flow.apply( this, parameter );

			return this;

		}catch( error ){
			next.bind( this )( new Error( `failed catcher, ${ parameter }, ${ error.stack }` ) );

		}finally{
			delete this.initialize;
		}
	};

	Catcher.prototype.done = function done( ){
		return ( arid( this[ CALLBACK ] ) && execd( method ) );
	};

	Catcher.prototype.then = function then( callback ){
		/*;
			@meta-configuration:
				{
					"callback:required": "function"
				}
			@end-meta-configuration
		*/

		if( falzy( callback ) || !protype( callback, FUNCTION ) ){
			throw new Error( "invalid callback" );
		}

		push.bind( this )( callback );

		return this;
	};

	Catcher.prototype.pass = function pass( parameter ){
		/*;
			@meta-configuration:
				{
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		next.apply( this, raze( arguments ) );

		return this;
	};

	Catcher.prototype.defer = function defer( handler, strict ){
		/*;
			@meta-configuration:
				{
					"handler:required": "function",
					"strict": "boolean"
				}
			@end-meta-configuration
		*/

		if( kein( DEFER, this ) ){
			return this;
		}

		if( falzy( handler ) || !protype( handler, FUNCTION ) ){
			throw new Error( "invalid defer handler" );
		}

		if( strict === true ){
			let self = this;

			this[ DEFER ] = called.bind( context )( function delegate( error ){
				handler.call( this, error );

				flush.bind( self )( );

				return this;
			} );

		}else{
			this[ DEFER ] = called.bind( context )( handler );
		}

		return this;
	};

	Catcher.prototype.release = function release( ){
		flush.bind( this )( );

		delete this[ CALLBACK ];
		delete this[ DEFER ];

		let result = this[ RESULT ];
		delete this[ RESULT ];

		return result;
	};

	Catcher.prototype.result = function result( ){
		return this[ RESULT ];
	};

	Catcher.prototype.valueOf = function valueOf( ){
		return this.result( );
	};

	Catcher.prototype.toString = function toString( ){
		return stringe( this.result( ) );
	};

	return Catcher;
};

module.exports = catcher;
