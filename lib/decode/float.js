/**
 * Decode float
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return Promise.resolve({
    value: buf.readFloatLE(4),
    length: 4 + 4
  })
}

module.exports = {
  decode,
  type: 3
}
