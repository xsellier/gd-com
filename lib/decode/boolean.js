/**
 * Decode boolean
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  return {
    value: buf.readUInt32LE(4) === 1,
    length: 8
  }
}

module.exports = {
  decode,
  type: 1
}
