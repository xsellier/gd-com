'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Vector = require('../object/Vector2');

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (buf) {
  return {
    value: new _Vector2.default(buf.readFloatLE(4), buf.readFloatLE(8)),
    length: 4 * 2
  };
}; /**
    * Decode Vector2
    * @param buf
    * @returns {Object}
    */


module.exports = exports['default'];