"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Encode array
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
exports.default = function (value) {
  var len = 8;

  for (var i in value) {
    if (value.hasOwnProperty(i)) {
      len += value[i].length;
    }
  }

  var buf = new Buffer(len);

  buf.writeUInt32LE(21, 0);
  buf.writeUInt32LE(value.length & 0x7FFFFFFF, 4);

  var bufPos = 8;

  for (var _i in value) {
    if (value.hasOwnProperty(_i)) {
      value[_i].value.copy(buf, bufPos);
      bufPos += value[_i].length;
    }
  }

  return {
    value: buf,
    length: buf.length
  };
};

module.exports = exports["default"];