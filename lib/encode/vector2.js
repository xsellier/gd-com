/**
 * Encode Vector2
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let buf = Buffer.alloc(12)

  buf.writeUInt32LE(5, 0)
  buf.writeFloatLE(value.x, 4)
  buf.writeFloatLE(value.y, 8)

  return {
    value: buf,
    length: buf.length
  }
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'vector2'
}
