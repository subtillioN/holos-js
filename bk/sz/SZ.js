/**
 * Created by IntelliJ IDEA.
 * User: jmorrison
 * Date: 7/22/11
 * Time: 10:49 AM
 * To change this template use File | Settings | File Templates.
 */

var SZ = SZ || {};

SZ.childIDCount = 0;

SZ.log = function ($message) {
	try {console.log($message)}catch (ex) {}
};

if ( ! window.Int32Array ) {

	window.Int32Array = Array;
	window.Float32Array = Array;

}