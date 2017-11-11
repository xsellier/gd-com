'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _encodeBoolean = require('./encodeBoolean');

var _encodeBoolean2 = _interopRequireDefault(_encodeBoolean);

var _encodeInteger = require('./encodeInteger');

var _encodeInteger2 = _interopRequireDefault(_encodeInteger);

var _encodeFloat = require('./encodeFloat');

var _encodeFloat2 = _interopRequireDefault(_encodeFloat);

var _encodeString = require('./encodeString');

var _encodeString2 = _interopRequireDefault(_encodeString);

var _encodeDictionnary = require('./encodeDictionnary');

var _encodeDictionnary2 = _interopRequireDefault(_encodeDictionnary);

var _encodeArray = require('./encodeArray');

var _encodeArray2 = _interopRequireDefault(_encodeArray);

var _encodeVector = require('./encodeVector2');

var _encodeVector2 = _interopRequireDefault(_encodeVector);

var _encodeRect = require('./encodeRect2');

var _encodeRect2 = _interopRequireDefault(_encodeRect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return value !== null && (type === 'object' || type === 'function');
}

function isArray(value) {
  return Array.isArray(value);
}

function getType(value) {
  if (value.name !== undefined) {
    return value.name;
  }

  if (isArray(value)) {
    return 'array';
  }

  if (isObject(value)) {
    return 'object';
  }
  return typeof value === 'undefined' ? 'undefined' : _typeof(value);
}

/**
 * Prepare command message
 * @param value
 * @returns {*}
 */
function prepare(value) {
  var data = void 0;
  var type = getType(value);

  switch (type) {
    case 'undefined':
      break;

    case 'boolean':
      data = (0, _encodeBoolean2.default)(value);
      break;

    case 'number':
      if (Number(value) === value && value % 1 === 0) {
        data = (0, _encodeInteger2.default)(value);
      }
      if (value === Number(value) && value % 1 !== 0) {
        data = (0, _encodeFloat2.default)(value);
      }
      break;

    case 'string':
      data = (0, _encodeString2.default)(value);
      break;

    case 'vector2':
      data = (0, _encodeVector2.default)(value);
      break;

    case 'rect2':
      data = (0, _encodeRect2.default)(value);
      break;

    case 'object':
      var encodedO = [];

      for (var i in value) {
        if (value.hasOwnProperty(i)) {
          encodedO.push(prepare(i));
          encodedO.push(prepare(value[i]));
        }
      }
      data = (0, _encodeDictionnary2.default)(encodedO);
      break;

    case 'array':
      var encodedA = [];

      for (var _i in value) {
        if (value.hasOwnProperty(_i)) {
          encodedA.push(prepare(value[_i]));
        }
      }
      data = (0, _encodeArray2.default)(encodedA);
      break;

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
 * Encode data
 * offset 4 => tcp, 0 => udp
 * @param offset
 * @param value
 * @returns {*}
 */

exports.default = function (offset, value) {
  var packet = function packet(data) {
    var buf = new Buffer(data.length + offset);

    buf.writeUInt32LE(data.length, 0);
    data.value.copy(buf, offset);
    return buf;
  };

  return packet(prepare(value));
};

module.exports = exports['default'];