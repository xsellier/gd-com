/**
 * Encode array
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
function encode (value) {
  let len = 8

  for (let i in value) {
    if (value.hasOwnProperty(i)) {
      len += value[i].length
    }
  }

  let buf = Buffer.alloc(len)

  buf.writeUInt32LE(21, 0)
  buf.writeUInt32LE(value.length & 0x7FFFFFFF, 4)

  let bufPos = 8

  for (let i in value) {
    if (value.hasOwnProperty(i)) {
      value[i].value.copy(buf, bufPos)
      bufPos += value[i].length
    }
  }

  return {
    value: buf,
    length: buf.length
  }
}

module.exports = {
  encode: (prepare, array) => {
    let rawData = []

    for (let property in array) {
      if (array.hasOwnProperty(property)) {
        rawData.push(prepare(array[property]))
      }
    }

    return encode(rawData)
  },
  type: (typeName, value) => typeName === 'array'
}
