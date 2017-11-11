"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Decode integer
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  return {
    value: buf.readInt32LE(4),
    length: 8
  };
};

module.exports = exports["default"];