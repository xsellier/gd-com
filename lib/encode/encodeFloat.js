"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Encode Float
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

exports.default = function (value) {
  var buf = new Buffer(8);

  buf.writeUInt32LE(3, 0);
  buf.writeFloatLE(value, 4);

  return {
    value: buf,
    length: buf.length
  };
};

module.exports = exports["default"];