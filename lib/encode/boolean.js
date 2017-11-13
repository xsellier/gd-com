/**
 * Encode Boolean
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let buf = Buffer.alloc(8)

  buf.writeUInt32LE(1, 0)
  buf.writeUInt32LE(value ? 1 : 0, 4)

  return {
    value: buf,
    length: buf.length
  }
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'boolean'
}
