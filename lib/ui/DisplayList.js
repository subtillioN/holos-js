/**
 * Author jmorrison spinbitz.net
 * Date: 7/22/11
 * Time: 5:20 PM
 */

module.exports = function () {
    var _canvas;
    var _context;
    var _dirty = true;
    var _stage = [];

    var init = function ($canvas) {
        _canvas = $canvas;
        _context = _canvas.getContext("2d");
    };

    var addToStage = function ($child) {
        _stage.push($child);
    };

    this.invalidate = function () {
        _dirty = true;
    };
    this.checkValid = function () {
        return _dirty;
    };
    return this;
};