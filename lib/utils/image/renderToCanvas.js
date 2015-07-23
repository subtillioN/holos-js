/**
 * Author jmorrison spinbitz.net
 * Date: 7/22/11
 * Time: 1:31 PM
 *
 * originally from http://kaioa.com/
 */

SZ.renderToCanvas = function (width, height, renderFunction) {
    var buffer = document.createElement('canvas');
    buffer.width = width;
    buffer.height = height;
    renderFunction(buffer.getContext('2d'));
    return buffer;
};