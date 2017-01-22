const letgo = require( "./letgo.js" );

letgo.bind( { } )( function test( callback ){
	console.log( "testing called!" );

	callback( );
	
} )( function callback( ){
	console.log( "callback called!" );
} );
