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
			"called": "called",
			"diatom": "diatom",
			"edo": "edo",
			"execd": "execd",
			"falzy": "falzy",
			"filled": "filled",
			"heredito": "heredito",
			"kein": "kein",
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
*/

const arid = require( "arid" );
const asea = require( "asea" );
const backd = require( "backd" );
const called = require( "called" );
const diatom = require( "diatom" );
const edo = require( "edo" );
const execd = require( "execd" );
const falzy = require( "falzy" );
const filled = require( "filled" );
const heredito = require( "heredito" );
const kein = require( "kein" );
const protype = require( "protype" );
const raze = require( "raze" );
const shft = require( "shft" );
const statis = require( "statis" );
const stringe = require( "stringe" );
const symbiote = require( "symbiote" );
const truly = require( "truly" );
const wichis = require( "wichis" );
const zelf = require( "zelf" );

const CACHE = Symbol( "cache" );
const CALLBACK = Symbol( "callback" );
const DEFER = Symbol( "defer" );
const EVENT = Symbol( "event" );
const INSTANCE = Symbol( "instance" );
const RESULT = Symbol( "result" );
const STOPPED = Symbol( "stopped" );

const catcher = function catcher( method ){
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

	let context = zelf( this );

	if( truly( method ) ){
		method = called.bind( context )( method );
	}

	let Catcher = diatom( "Catcher" );

	/*;
		@note:
			We should create an instance of the Event here.
		@end-note
	*/
	let event = edo.bind( context )( )( );

	statis( Catcher )
		.attach( EVENT, event )
		.attach( CACHE, { } )
		.attach( CALLBACK, [ ] )
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
		} )
		.implement( "record", function record( result ){
			/*;
				@meta-configuration:
					{
						"result:required": "*"
					}
				@end-meta-configuration
			*/

			if( !kein( INSTANCE, this ) ){
				throw new Error( "cannot record result on inactive catcher" );
			}

			return this[ INSTANCE ].record( result );
		} )
		.implement( "pass", function pass( parameter ){
			/*;
				@meta-configuration:
					{
						"parameter:required": "..."
					}
				@end-meta-configuration
			*/

			parameter = raze( arguments );

			if( kein( INSTANCE, this ) ){
				return this[ INSTANCE ].pass.apply( this[ INSTANCE ], parameter );
			}

			this.emit.apply( context, [ "pass:catcher" ].concat( parameter ) );

			return this;
		} )
		.implement( "stop", function stop( ){
			if( kein( INSTANCE, this ) ){
				this.release( );
			}

			this.emit( "release" );
			this.flush( );

			return this;
		} )
		.implement( "set", function set( property, value ){
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

			if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
				throw new Error( "invalid property" );
			}

			this[ CACHE ][ property ] = value;

			return this;
		} )
		.implement( "get", function get( property ){
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

			if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
				throw new Error( "invalid property" );
			}

			return this[ CACHE ][ property ];
		} )
		.implement( "lastly", function lastly( callback ){
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

			this.once( "lastly", callback );

			return this;
		} )
		.implement( "push", function push( callback ){
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

			if( kein( INSTANCE, this ) ){
				return this[ INSTANCE ].push( callback );
			}

			this[ CALLBACK ].push( backd.bind( context )( callback ) );

			return this;
		} )
		.implement( "then", function then( callback ){
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

			if( kein( INSTANCE, this ) ){
				return this[ INSTANCE ].then( callback );
			}

			this[ CALLBACK ].push( backd.bind( context )( callback ) );

			return this;
		} )
		.merge( event );

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
			this.set( "result", result );

			this.emit( "lastly" );

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

				this.set( "result", result );

				return result;

			}else{
				parameter = shft( arguments, 2 );

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

		this.set( "result", result );

		/*;
			@note:
				The result of the last callback is passed on the next callback.

				If the callback encounters an error, it is up for the next callback
					to continue the chain or halts the chain.
			@end-note
		*/
		if( !( result instanceof Catcher ) && filled( this[ CALLBACK ] ) ){
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

		this.set( "parameter", parameter );

		if( falzy( method ) ){
			return this;
		}

		try{
			if( asea.server ){
				process.nextTick( function later( ){
					let { self, context, parameter, method, next } = this;

					self.record( method.apply( context, [
						backd.bind( self )( next )
					].concat( parameter ) ) );

				}.bind( {
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"next": next
				} ) );

			}else if( asea.client ){
				let timeout = setTimeout( function later( ){
					let { self, context, parameter, method, next } = this;

					self.record( method.apply( context, [
						backd.bind( self )( next )
					].concat( parameter ) ) );

					clearTimeout( timeout );

				}.bind( {
					"self": this,
					"context": context,
					"parameter": parameter,
					"method": method,
					"next": next
				} ) );

			}else{
				throw new Error( "cannot determine platform, platform not supported" );
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

		parameter = shft( arguments );

		let self = Catcher[ INSTANCE ] = this;

		this[ CALLBACK ] = wichis( Catcher[ CALLBACK ], [ ] );

		this[ CACHE ] = Catcher[ CACHE ];

		try{
			this.merge( Catcher[ EVENT ] );

			if( protype( callback, FUNCTION ) ){
				push.bind( this )( callback );
			}

			if( truly( method ) && !execd( method ) ){
				flow.apply( this, parameter );
			}

			this.on( "pass:catcher", function pass( ){
				self.pass.apply( self, raze( arguments ) );
			} );

			this.lastly( function lastly( ){
				self.stop( );
			} );

			return this;

		}catch( error ){
			next.bind( this )( new Error( `failed catcher, ${ parameter }, ${ error.stack }` ) );

		}finally{
			delete this.initialize;
		}
	};

	Catcher.prototype.done = function done( ){
		if( truly( method ) ){
			return arid( this[ CALLBACK ] ) && execd( method );

		}else{
			return arid( this[ CALLBACK ] );
		}
	};

	Catcher.prototype.push = function push( callback ){
		/*;
			@meta-configuration:
				{
					"callback": "function"
				}
			@end-meta-configuration
		*/

		if( !kein( CALLBACK, this ) ){
			throw new Error( "catcher has been released, cannot push callback" );
		}

		if( filled( this[ CALLBACK ] ) ){
			throw new Error( "push callback once, cannot push callback again" );
		}

		if( falzy( callback ) || !protype( callback, FUNCTION ) ){
			throw new Error( "invalid callback" );
		}

		push.bind( this )( callback );

		return this;
	};

	Catcher.prototype.then = function then( callback ){
		/*;
			@meta-configuration:
				{
					"callback:required": "function"
				}
			@end-meta-configuration
		*/

		if( !kein( CALLBACK, this ) ){
			throw new Error( "catcher has been released, cannot push callback" );
		}

		if( falzy( method ) ){
			throw new Error( "empty later method, cannot follow with callback" );
		}

		if( execd( method ) ){
			throw new Error( "later method executed, cannot follow with callback" );
		}

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

		parameter = raze( arguments );

		/*;
			@note:
				Flow the method if not yet called.

				It is the developer responsibility to push a callback
					before passing flow.
			@end-note
		*/
		if( truly( method ) && !execd( method ) ){
			return flow.apply( this, parameter );
		}

		next.apply( this, parameter );

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

	Catcher.prototype.record = function record( result ){
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

	Catcher.prototype.release = function release( ){
		flush.bind( this )( );

		delete this[ CALLBACK ];
		delete this[ DEFER ];

		let result = this[ RESULT ];
		delete this[ RESULT ];

		return result;
	};

	Catcher.prototype.stop = function stop( ){
		this.release( );

		this.emit( "release" );

		return this;
	};

	Catcher.prototype.result = function result( ){
		return this[ RESULT ];
	};

	Catcher.prototype.set = function set( property, value ){
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

		if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
			throw new Error( "invalid property" );
		}

		this[ CACHE ][ property ] = value;

		return this;
	};

	Catcher.prototype.get = function get( property ){
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

		if( falzy( property ) || !protype( property, NUMBER + STRING + SYMBOL ) ){
			throw new Error( "invalid property" );
		}

		return this[ CACHE ][ property ];
	};

	Catcher.prototype.lastly = function lastly( callback ){
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

		this.once( "lastly", callback );

		return this;
	};

	Catcher.prototype.valueOf = function valueOf( ){
		return this.result( );
	};

	Catcher.prototype.toString = function toString( ){
		return stringe( this.result( ) );
	};

	Catcher = heredito( Catcher, edo.bind( context )( ) );

	Catcher = symbiote( Catcher, "Event" );

	return Catcher;
};

module.exports = catcher;
