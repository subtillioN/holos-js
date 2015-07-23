/**
 * Author: Joel Morrison http://www.spinbitz.net
 * Date: 7/22/11
 * Time: 1:22 PM
 */

SZ.imageGetFlipped = function(rgbImage, $isHorizontal) {

	var width = rgbImage.width, height = rgbImage.height;
	return SZ.renderToCanvas(width, height, function (ctx) {
		if($isHorizontal)ctx.translate(width, 0);
		else ctx.translate(0, height);// ???
		ctx.scale(-1, 1);
		ctx.drawImage(rgbImage, 0, 0);
	});
};