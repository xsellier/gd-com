/**
 * Decode Array
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  const nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF
  let promise = Promise.resolve({
    array: [],
    bufferPosition: 8
  })

  for (let index = 0; index < nrEntries; index++) {
    promise = promise.then(({array, bufferPosition}) => genericDecoder(offset, buf.slice(bufferPosition))
      .then((decodedKey) => {
        bufferPosition += decodedKey.length
        array.push(decodedKey.value)

        return { array, bufferPosition }
      })
    )
  }

  return promise.then(({array, bufferPosition}) => {
    return {
      value: array,
      length: bufferPosition
    }
  })
}

module.exports = {
  decode,
  type: 21
}
