
const assert = require( "assert" );
const letgo = require( "./letgo.js" );

let calls = [ ];
let catcher = letgo.bind( 12345 )( function test( callback, value ){
	calls.push( "test" );

	assert.equal( value, "hello world", "should be equal" );

	assert.equal( this, 12345, "should be equal" );

	return callback( null, value, "hello yeah" );
} );

catcher = catcher( function callback( error, result, value ){
	calls.push( "callback" );

	assert.deepEqual( calls, [ "test", "callback" ], "should be deeply equal" );

	assert.equal( result, "hello world", "should be equal" );

	assert.equal( value, "hello yeah", "should be equal" );

	assert.equal( this, 12345, "should be equal" );

	return Array.from( arguments );
}, "hello world" )

.then( function callback2( error, result, value ){
	calls.push( "callback2" );

	assert.deepEqual( calls, [ "test", "callback", "callback2" ], "should be deeply equal" );

	assert.deepEqual( result, [ null, "hello world", "hello yeah" ], "should be deeply equal" );

	assert.equal( arguments.length, 3, "should be equal" );

	assert.equal( this, 12345, "should be equal" );

	return catcher.pass( null, 123, 456 );
} )

.then( function callback3( error, result, value ){
	calls.push( "callback3" );

	assert.deepEqual( calls, [ "test", "callback", "callback2", "callback3" ], "should be deeply equal" );

	assert.deepEqual( Array.from( arguments ), [ null, 123, 456 ], "should be deeply equal" );

	assert.equal( this, 12345, "should be equal" );

	return true;
} )

.then( function callback4( error, result, value ){
	throw new Error( "sample error" );
} )

.then( function callback5( error, result, value ){
	console.log( "this should not be called" );
} )

.defer( function handler( error ){
	assert.deepEqual( error.message, "sample error", "should be equal" );

	console.log( "ok" );
}, true );
