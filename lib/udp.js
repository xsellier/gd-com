'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decode2 = require('./decode');

var _decode3 = _interopRequireDefault(_decode2);

var _encode2 = require('./encode');

var _encode3 = _interopRequireDefault(_encode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  decode: function decode(buf) {
    return (0, _decode3.default)(0, buf);
  },
  encode: function encode(buf) {
    return (0, _encode3.default)(0, buf);
  }
};
module.exports = exports['default'];