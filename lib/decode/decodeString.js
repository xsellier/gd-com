'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Decode String
 * @param buf
 * @returns {Object}
 */
exports.default = function (buf) {
  var len = buf.readUInt32LE(4);
  var pad = len % 4 === 0 ? 0 : 4 - len % 4;

  return {
    value: buf.toString('utf8', 8, 8 + len),
    length: 8 + len + pad
  };
};

module.exports = exports['default'];