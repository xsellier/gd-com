"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Encode Vector2
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

exports.default = function (value) {
  var buf = new Buffer(12);

  buf.writeUInt32LE(5, 0);
  buf.writeFloatLE(value.x, 4);
  buf.writeFloatLE(value.y, 8);

  return {
    value: buf,
    length: buf.length
  };
};

module.exports = exports["default"];