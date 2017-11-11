'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = decode;

var _decodeBoolean = require('./decodeBoolean');

var _decodeBoolean2 = _interopRequireDefault(_decodeBoolean);

var _decodeInteger = require('./decodeInteger');

var _decodeInteger2 = _interopRequireDefault(_decodeInteger);

var _decodeFloat = require('./decodeFloat');

var _decodeFloat2 = _interopRequireDefault(_decodeFloat);

var _decodeString = require('./decodeString');

var _decodeString2 = _interopRequireDefault(_decodeString);

var _decodeVector = require('./decodeVector2');

var _decodeVector2 = _interopRequireDefault(_decodeVector);

var _decodeRect = require('./decodeRect2');

var _decodeRect2 = _interopRequireDefault(_decodeRect);

var _decodeVector3 = require('./decodeVector3');

var _decodeVector4 = _interopRequireDefault(_decodeVector3);

var _decodeMatrix = require('./decodeMatrix32');

var _decodeMatrix2 = _interopRequireDefault(_decodeMatrix);

var _decodePlane = require('./decodePlane');

var _decodePlane2 = _interopRequireDefault(_decodePlane);

var _decodeQuaternion = require('./decodeQuaternion');

var _decodeQuaternion2 = _interopRequireDefault(_decodeQuaternion);

var _decodeAabb = require('./decodeAabb');

var _decodeAabb2 = _interopRequireDefault(_decodeAabb);

var _decodeMatrix3 = require('./decodeMatrix33');

var _decodeMatrix4 = _interopRequireDefault(_decodeMatrix3);

var _decodeTransform = require('./decodeTransform');

var _decodeTransform2 = _interopRequireDefault(_decodeTransform);

var _decodeColor = require('./decodeColor');

var _decodeColor2 = _interopRequireDefault(_decodeColor);

var _decodeDictionnary = require('./decodeDictionnary');

var _decodeDictionnary2 = _interopRequireDefault(_decodeDictionnary);

var _decodeArray = require('./decodeArray');

var _decodeArray2 = _interopRequireDefault(_decodeArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decode data
 * @param offset
 * @param pBuf
 * @param firstCall
 * @returns {*}
 */
function decode(offset, pBuf) {
  var firstCall = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var buf = firstCall ? pBuf.slice(offset) : pBuf;
  var type = buf.readUInt32LE(0);
  var data = null;

  switch (type) {
    case 1:
      data = (0, _decodeBoolean2.default)(buf);
      break;
    case 2:
      data = (0, _decodeInteger2.default)(buf);
      break;
    case 3:
      data = (0, _decodeFloat2.default)(buf);
      break;
    case 4:
      data = (0, _decodeString2.default)(buf);
      break;
    case 5:
      data = (0, _decodeVector2.default)(buf);
      break;
    case 6:
      data = (0, _decodeRect2.default)(buf);
      break;
    case 7:
      data = (0, _decodeVector4.default)(buf);
      break;
    case 8:
      data = (0, _decodeMatrix2.default)(buf);
      break;
    case 9:
      data = (0, _decodePlane2.default)(buf);
      break;
    case 10:
      data = (0, _decodeQuaternion2.default)(buf);
      break;
    case 11:
      data = (0, _decodeAabb2.default)(buf);
      break;
    case 12:
      data = (0, _decodeMatrix4.default)(buf);
      break;
    case 13:
      data = (0, _decodeTransform2.default)(buf);
      break;
    case 14:
      data = (0, _decodeColor2.default)(buf);
      break;
    case 20:
      data = (0, _decodeDictionnary2.default)(offset, buf);
      break;
    case 21:
      data = (0, _decodeArray2.default)(offset, buf);
      break;
    case 0:
    default:
      data = {
        value: null,
        length: 4
      };
      break;
  }
  return data;
}

/**
 * Decode data and return it's value
 * offset 4 => tcp, 0 => udp
 * @param offset
 * @param buf
 * @returns {*}
 */

exports.default = function (offset, buf) {
  return decode(offset, buf, true).value;
};