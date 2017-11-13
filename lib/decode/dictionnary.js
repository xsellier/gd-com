/**
 * Decode Dictionnary
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  const nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF
  const dict = {}
  let bufPos = 8

  for (let i = 0; i < nrEntries; i++) {
    // start from 8
    const decodedKey = genericDecoder(offset, buf.slice(bufPos))

    bufPos += decodedKey.length

    const decodedValue = genericDecoder(offset, buf.slice(bufPos))

    bufPos += decodedValue.length
    dict[decodedKey.value] = decodedValue.value
  }

  return {
    value: dict,
    length: bufPos
  }
}

module.exports = {
  decode,
  type: 20
}
