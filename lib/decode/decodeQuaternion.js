"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Decode Quaternion
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  return {
    value: {
      coordinate: {
        x: buf.readFloatLE(4),
        y: buf.readFloatLE(8),
        z: buf.readFloatLE(12)
      },
      size: {
        x: buf.readFloatLE(16),
        y: buf.readFloatLE(20),
        z: buf.readFloatLE(24)
      }
    },
    length: 4 * 6
  };
};

module.exports = exports["default"];