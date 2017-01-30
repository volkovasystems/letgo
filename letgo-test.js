"use strict";

const letgo = require( "./letgo.js" );

let catcher = letgo.bind( { } )( function test( callback ){
	console.log( "testing called!" );

	callback( );
} );

catcher( function callback( ){
	console.log( "callback called!" );
} );

catcher.release( );
