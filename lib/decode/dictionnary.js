/**
 * Decode Dictionnary
 * @param genericDecoder
 * @param offset
 * @param buf
 * @returns {Object}
 */
function decode (genericDecoder, offset, buf) {
  const nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF
  let promise = Promise.resolve({
    dictionary: {},
    bufferPosition: 8
  })

  for (let index = 0; index < nrEntries; index++) {
    // start from 8
    promise = promise.then(({dictionary, bufferPosition}) => genericDecoder(offset, buf.slice(bufferPosition))
      .then((decodedKey) => {
        bufferPosition += decodedKey.length

        return genericDecoder(offset, buf.slice(bufferPosition))
          .then((decodedValue) => {
            bufferPosition += decodedValue.length

            dictionary[decodedKey.value] = decodedValue.value

            return { dictionary, bufferPosition }
          })
      })
    )
  }

  return promise.then(({dictionary, bufferPosition}) => {
    return {
      value: dictionary,
      length: bufferPosition
    }
  })
}

module.exports = {
  decode,
  type: 20
}
