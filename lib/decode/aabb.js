/**
 * Decode Aabb
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return Promise.resolve({
    value: {
      coordinate: {
        x: buf.readFloatLE(4),
        y: buf.readFloatLE(8),
        z: buf.readFloatLE(12)
      },

      size: {
        x: buf.readFloatLE(16),
        y: buf.readFloatLE(20),
        z: buf.readFloatLE(24)
      },

      length: 4 * 6
    }
  })
}

module.exports = {
  decode,
  type: 11
}
