var Vector2 = require('../object/Vector2')

/**
 * Decode Vector2
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return {
    value: new Vector2(buf.readFloatLE(4), buf.readFloatLE(8)),
    length: 4 * 2
  }
}

module.exports = {
  decode,
  type: 5
}
