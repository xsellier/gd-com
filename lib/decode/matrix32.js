/**
 * Decode Matrix32
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return Promise.resolve({
    value: [
      [
        buf.readFloatLE(4),
        buf.readFloatLE(8)
      ], [
        buf.readFloatLE(12),
        buf.readFloatLE(16)
      ], [
        buf.readFloatLE(20),
        buf.readFloatLE(24)
      ]
    ],

    length: 24 + 4
  })
}

module.exports = {
  decode,
  type: 8
}
