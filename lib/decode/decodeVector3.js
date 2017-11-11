"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Decode Vector3
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  return {
    value: [[buf.readFloatLE(4), buf.readFloatLE(8)], [buf.readFloatLE(12), buf.readFloatLE(16)], [buf.readFloatLE(20), buf.readFloatLE(24)]],
    length: 4 * 6
  };
};

module.exports = exports["default"];