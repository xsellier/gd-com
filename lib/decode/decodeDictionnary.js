'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

/**
 * Decode Dictionnary
 * @param offset
 * @param buf
 * @returns {Object}
 */
exports.default = function (offset, buf) {
  var nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF;
  var dict = {};
  var bufPos = 8;

  for (var i = 0; i < nrEntries; i++) {
    // start from 8
    var decodedKey = (0, _index.decode)(offset, buf.slice(bufPos));

    bufPos += decodedKey.length;

    var decodedValue = (0, _index.decode)(offset, buf.slice(bufPos));

    bufPos += decodedValue.length;
    dict[decodedKey.value] = decodedValue.value;
  }

  return {
    value: dict,
    length: bufPos
  };
}; /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint no-bitwise: ["error", { "allow": ["&"] }] */

module.exports = exports['default'];