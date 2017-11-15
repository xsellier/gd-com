/**
 * Decode Plane
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return Promise.resolve({
    value: {
      x: buf.readFloatLE(4),
      y: buf.readFloatLE(8),
      z: buf.readFloatLE(12),
      distance: buf.readFloatLE(16)
    },
    length: 16 + 4
  })
}

module.exports = {
  decode,
  type: 9
}
