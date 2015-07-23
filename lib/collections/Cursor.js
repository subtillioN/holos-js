/**
 * jmorrison    spinbitz.net
 * Date: 7/22/11
 * Time: 10:44 AM
 */

/**
 *
 * @param $last {Number (int)}
 * @param $first {Number (int)}
 * @param $loop  {Boolean }
 */
module.exports = function ($last, $first, $loop) {
    var _first = 0;
    var _last = 9;
    var _loop = true;
    var _i = 0;
    var _length
    var _updateHandler;

    _setBounds($first, $last);
    _loop = $loop;


    function _dispatchUpdate() {
        if (_updateHandler != null)_updateHandler(_i);
    }

    function _setBounds($first, $last) {
        if ($last < $first) {
            console.log(this + " ERROR :: BOUNDS, LAST (" + $last + ") SHOULD BE GREATER THAN FIRST (" + $first + ").");
            return;
        }
        _first = $first;
        _last = $last;
        _length = _last - _first;
    }

    function _clipMin() {
        if (_i < _first) {
            if (_loop)_i = _last;
            else _i = _first;
        }
    }

    function _clipMax() {
        if (_i > _last) {
            if (_loop)_i = _first;
            else _i = _last;
        }
    }

    //TODO:: put the methods on the prototype

    this.prev = function () {
        _i--;
        _clipMin();
        _dispatchUpdate();
        return _i;
    };

    this.next = function () {
        _i++;
        _clipMax();
        _dispatchUpdate();
        return _i;
    };

    this.at = function ($newPos) {
        if ($newPos != -1)_i = $newPos;
        _clipMax();
        _clipMin();
        _dispatchUpdate();
        return _i;
    };

    this.setBounds = function ($first, $last) {
        _setBounds($first, $last);

    };

    this.getFirst = function () {
        return _first;
    };

    this.getLast = function () {
        return _last;
    };

    this.hasPrev = function () {
        return (_i - 1 >= _first);
    };

    this.hasNext = function () {
        return (_i + 1 <= _last);
    };

    this.getLength = function () {
        return _length;
    };

    this.i = function () {
        return _i;
    };

    this.setUpdateHandler = function (value) {
        _updateHandler = value;
    };

    this.goNext = function () {
        console.log("next");
        _i = this.next();
    };

    this.goPrev = function () {
        console.log("prev");
        _i = this.prev();
    };

    this.doesLoop = function (loop) {
        _loop = loop;
    };

    return this;
};




