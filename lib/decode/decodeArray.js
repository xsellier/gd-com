'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

/**
 * Decode Array
 * @param offset
 * @param buf
 * @returns {Object}
 */
exports.default = function (offset, buf) {
  var nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF;
  var arr = [];
  var bufPos = 8;

  for (var i = 0; i < nrEntries; i++) {
    var decodedKey = (0, _index.decode)(offset, buf.slice(bufPos));

    bufPos += decodedKey.length;
    arr.push(decodedKey.value);
  }

  return {
    value: arr,
    length: bufPos
  };
};

module.exports = exports['default'];