'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Encode string
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
exports.default = function (value) {
  var len = Buffer.byteLength(value);
  var pad = len % 4 === 0 ? 0 : 4 - len % 4;
  var buf = new Buffer(8 + len + pad);

  buf.writeUInt32LE(4, 0);

  buf.writeUInt32LE(len, 4);
  buf.write(value, 8);
  if (pad !== 0) {
    var pos = 8 + len;

    for (var i = 0; i < pad; i++) {
      buf.write('\0', i + pos);
    }
  }

  return {
    value: buf,
    length: buf.length
  };
};

module.exports = exports['default'];