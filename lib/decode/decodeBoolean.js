"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Decode boolean
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  return {
    value: buf.readUInt32LE(4) === 1,
    length: 8
  };
};

module.exports = exports["default"];