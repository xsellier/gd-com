'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect2 = function () {
  function Rect2(cx, cy, sx, sy) {
    _classCallCheck(this, Rect2);

    this._name = 'rect2';
    this._cx = cx;
    this._cy = cy;
    this._sx = sx;
    this._sy = sy;
  }

  _createClass(Rect2, [{
    key: 'toString',
    value: function toString() {
      return 'Rect2[cx=' + this.cx + ',cy=' + this.cy + ',sx=' + this.sy + ',sy=' + this.sy + ']';
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      console.log('Forbidden set name to ' + value);
    }
  }, {
    key: 'cx',
    get: function get() {
      return this._cx;
    },
    set: function set(value) {
      this._cx = value;
    }
  }, {
    key: 'cy',
    get: function get() {
      return this._cy;
    },
    set: function set(value) {
      this._cy = value;
    }
  }, {
    key: 'sx',
    get: function get() {
      return this._sx;
    },
    set: function set(value) {
      this._sx = value;
    }
  }, {
    key: 'sy',
    get: function get() {
      return this._sy;
    },
    set: function set(value) {
      this._sy = value;
    }
  }]);

  return Rect2;
}();

exports.default = Rect2;
module.exports = exports['default'];