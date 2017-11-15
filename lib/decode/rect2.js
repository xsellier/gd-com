var Rect2 = require('../object/Rect2')

/**
 * Decode Rect2
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return Promise.resolve({
    value: new Rect2(
      buf.readFloatLE(4),
      buf.readFloatLE(8),
      buf.readFloatLE(12),
      buf.readFloatLE(16)
    ),

    length: 16 + 4
  })
}

module.exports = {
  decode,
  type: 6
}
