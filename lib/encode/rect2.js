/**
 * Encode Rect2
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let buf = Buffer.alloc(20)

  buf.writeUInt32LE(6, 0)
  buf.writeFloatLE(value.cx, 4)
  buf.writeFloatLE(value.cy, 8)
  buf.writeFloatLE(value.sx, 12)
  buf.writeFloatLE(value.sy, 16)

  return Promise.resolve({
    value: buf,
    length: buf.length
  })
}

module.exports = {
  encode: (prepare, value) => encode(value),
  type: (typeName, value) => typeName === 'rect2'
}
