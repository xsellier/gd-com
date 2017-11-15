/**
 * Decode color
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return Promise.resolve({
    value: {
      r: buf.readFloatLE(4),
      g: buf.readFloatLE(8),
      b: buf.readFloatLE(12),
      a: buf.readFloatLE(16)
    },

    length: 16 + 4
  })
}

module.exports = {
  decode,
  type: 14
}
