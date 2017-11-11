'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rect = require('../object/Rect2');

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decode Rect2
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  return {
    value: new _Rect2.default(buf.readFloatLE(4), buf.readFloatLE(8), buf.readFloatLE(12), buf.readFloatLE(16)),
    length: 4 * 4
  };
};

module.exports = exports['default'];