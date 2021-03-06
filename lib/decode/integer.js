/**
 * Decode integer
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return Promise.resolve({
    value: buf.readInt32LE(4),
    length: 4 + 4
  })
}

module.exports = {
  decode,
  type: 2
}
