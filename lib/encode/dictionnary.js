/**
 * Encode dictionnary
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

  buf.writeUInt32LE(20, 0)
  buf.writeUInt32LE((value.length / 2) & 0x7FFFFFFF, 4)

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
  encode: (prepare, dictionary) => {
    let rawData = []

    for (let property in dictionary) {
      if (dictionary.hasOwnProperty(property)) {
        rawData.push(prepare(property))
        rawData.push(prepare(dictionary[property]))
      }
    }

    return encode(rawData)
  },
  type: (typeName, value) => typeName === 'object'
}
