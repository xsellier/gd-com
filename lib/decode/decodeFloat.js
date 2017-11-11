"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Decode float
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  return {
    value: buf.readFloatLE(4),
    length: 8
  };
};

module.exports = exports["default"];