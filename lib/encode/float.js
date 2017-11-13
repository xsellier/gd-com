/**
 * Encode Float
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let buf = Buffer.alloc(8)

  buf.writeUInt32LE(3, 0)
  buf.writeFloatLE(value, 4)

  return {
    value: buf,
    length: buf.length
  }
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'number' && !Number.isInteger(value)
}
