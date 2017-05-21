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

		Passing a custom method to letgo executes the method after consuming the callback
			and after executing the catcher function. This will provide for a more
			specific flow of procedures.

		Passing a custom method will change the flow of the procedure. The method
			is executed once and the result will be saved forever.
	@end-module-documentation

	@include:
		{
			"protype": "protype",
			"truly": "truly",
			"zelf": "zelf",
		}
	@end-include
*/

const protype = require( "protype" );
const truly = require( "truly" );
const zelf = require( "zelf" );

const catcher = require( "./catcher.js" );

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

	return catcher( method, self );
};

module.exports = letgo;
