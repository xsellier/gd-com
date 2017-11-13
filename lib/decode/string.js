/**
 * Decode String
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  const len = buf.readUInt32LE(4)
  const pad = len % 4 === 0 ? 0 : 4 - (len % 4)

  return {
    value: buf.toString('utf8', 8, 8 + len),
    length: 8 + len + pad
  }
}

module.exports = {
  decode,
  type: 4
}
