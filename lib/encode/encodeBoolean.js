"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Encode Boolean
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

exports.default = function (value) {
  var buf = new Buffer(8);

  buf.writeUInt32LE(1, 0);
  buf.writeUInt32LE(value ? 1 : 0, 4);

  return {
    value: buf,
    length: buf.length
  };
};

module.exports = exports["default"];