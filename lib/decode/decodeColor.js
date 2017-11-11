"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Decode Color
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  return {
    value: {
      r: buf.readFloatLE(4),
      g: buf.readFloatLE(8),
      b: buf.readFloatLE(12),
      a: buf.readFloatLE(16)
    },
    length: 4 * 4
  };
};

module.exports = exports["default"];