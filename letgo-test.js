
const assert = require( "assert" );
const letgo = require( "./letgo.js" );

let calls = [ ];
let catcher = letgo.bind( { "hello": 12345 }  )( function test( callback, value ){
	calls.push( "test" );

	assert.equal( value, "hello world", "should be equal" );

	assert.deepEqual( this, { "hello": 12345 } , "should be equal" );

	console.log( "called", calls );

	return callback( null, value, "hello yeah" );
} );

catcher = catcher( function callback( error, result, value ){
	calls.push( "callback" );

	assert.deepEqual( calls, [ "test", "callback" ], "should be deeply equal" );

	assert.equal( result, "hello world", "should be equal" );

	assert.equal( value, "hello yeah", "should be equal" );

	assert.deepEqual( this, { "hello": 12345 } , "should be equal" );

	console.log( "called", calls );

	return Array.from( arguments );
}, "hello world" );

catcher.then( function callback2( error, result, value ){
	calls.push( "callback2" );

	assert.deepEqual( calls, [ "test", "callback", "callback2" ], "should be deeply equal" );

	assert.deepEqual( result, [ null, "hello world", "hello yeah" ], "should be deeply equal" );

	assert.equal( arguments.length, 3, "should be equal" );

	assert.deepEqual( this, { "hello": 12345 } , "should be equal" );

	console.log( "called", calls );

	return catcher.pass( null, 123, 456 );
} )

.then( function callback3( error, result, value ){
	calls.push( "callback3" );

	assert.deepEqual( calls, [ "test", "callback", "callback2", "callback3" ], "should be deeply equal" );

	assert.deepEqual( Array.from( arguments ), [ null, 123, 456 ], "should be deeply equal" );

	assert.deepEqual( this, { "hello": 12345 } , "should be equal" );

	console.log( "called", calls );

	return true;
} )

.then( function callback4( error, result, value ){
	console.log( "called callback 4" );

	throw new Error( "sample error" );
} )

.then( function callback5( error, result, value ){
	console.log( "this should not be called" );
} )

.defer( function handler( error ){
	assert.deepEqual( error.message, "sample error", "should be equal" );

	console.log( "called error" );
}, true )

.lastly( function laslty( ){
	console.log( "ok" );
} );

let catcherTest = letgo.bind( { "hello": "world" } )( );
catcherTest = catcherTest( function hello( ){
	assert.deepEqual( Array.from( arguments ), [ null, "hello", 1, 2, 3 ], "should be deeply equal" );

	console.log( "ok" );
} );

catcherTest.pass( null, "hello", 1, 2, 3 );

let test = letgo.bind( { "hello": "world" } )( function later( callback ){
	return callback( null, "hello", 123 )
} ).push( function testA( error, result, value ){
	console.log( "testA", arguments );

	return test.through( "testE", null, 123, 456 );
} ).then( function testB( error, result, value ){
	console.log( "testB", arguments );

	return test.through( "testD", null, "world", 789 );
} ).then( function testC( error, result, value ){
	console.log( "testC", arguments );

	return test.pass( null, "final", 1234567890 );
} ).flow( "testD", function testD( error, result, value ){
	console.log( "testD", arguments );

	return test.pass( null, "nice", 456 );
} ).flow( "testE", function testE( error, result, value ){
	console.log( "testE", arguments );

	return test.pass( null, "yehey", 456 );
} );

test( function hello( error, result, value ){
	console.log( "hello", arguments );
} );
