/**
 * Author jmorrison spinbitz.net
 * Date: 7/22/11
 * Time: 4:18 PM
 */


module.exports = function () {
    var _name = SZ.childIDCount++;
    SZ.log("_name = " + _name);
    var _x = 0;
    var _y = 0;
    var _scaleX = 0;
    var _scaleY = 0;
    var _scale = 0;
    var _parent = null;
    var _children = [];
    var graphics;

    var _addChild = function ($child) {
        $child.parent = this;
        _children.push($child);
    };
    var _removeChild = function ($child) {
        $child.parent = null;
        var c;
        for (var i in _children) {
            c = _children[i];
            if (c === $child) {
                _children = _children.splice(i, 1);
                SZ.log("_children = " + _children);
            }
        }
    };

    var _setX = function ($x) {
        var tx = $x;
        var p = this.parent;
        do {
            p = p.parent;
            tx += p.x;
            SZ.log("tx = " + tx);
        } while (p & p.x);
        _x = tx;
    };

    var _getX = function () {
        return 0 + _x;
    };

    var _setY = function ($y) {
        _y = $y;

    };

    var _getScaleY = function () {
        return 0 + _y;
    };

    var _setScaleY = function ($scaleY) {
        var tsy = $scaleY;
        var p = this.parent;
        do {
            p = p.parent;
            tsy += p.y;
            SZ.log("ty = " + tsy);
        } while (p & p.y);
        _y = tsy;
    };

    var _getY = function () {
        return 0 + _y;
    };

    var _invalidate = function () {
        _parent.invalidate();

    };

//	var _bubbleValue = function($prop,$val,$op){
//		SZ.log("_bubbleValue");
//		var p = this.parent;
//		var val = this[$prop];
//		SZ.log("val = " + val);
//		while(p){
//			p = p.parent;
//			tsy += p.y;
//			SZ.log("ty = " + tsy);
//		};
//		_y = tsy;
//
//
//	};

    return {
        id: _name,
        x: _getX,
        y: _getY,
        setX: _setX,
        setY: _setY,
        parent: _parent,
        children: _children,
        addChild: _addChild,
        removeChild: _removeChild,
        graphics: graphics,
        invalidate: _invalidate
    };
};