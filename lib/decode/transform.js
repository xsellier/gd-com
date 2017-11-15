/**
 * Decode Boolean
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
        buf.readFloatLE(8),
        buf.readFloatLE(12)
      ], [
        buf.readFloatLE(16),
        buf.readFloatLE(20),
        buf.readFloatLE(24)
      ], [
        buf.readFloatLE(28),
        buf.readFloatLE(32),
        buf.readFloatLE(36)
      ], [
        buf.readFloatLE(40),
        buf.readFloatLE(44),
        buf.readFloatLE(48)
      ]
    ],

    length: 4 * 12
  })
}

module.exports = {
  decode,
  type: 13
}
