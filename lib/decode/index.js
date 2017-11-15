const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname)

const DEFAULT_DECODER = () => {
  return {
    value: null,
    length: 4
  }
}

const decoderList = files.reduce((decoders, filename) => {
  const filePath = path.join(__dirname, filename)
  const extname = path.extname(filePath)

  if (fs.statSync(filePath).isFile() &&
      /^\.js$/i.test(extname) &&
      __filename !== filePath) {
    let decoder = require(filePath)

    decoders[decoder.type] = decoder.decode
  }

  return decoders
}, { 0: DEFAULT_DECODER })

/**
 * Decode data
 * @param offset
 * @param pBuf
 * @param firstCall
 * @returns {*}
 */
function decode (offset, pBuf, firstCall = false) {
  const buf = firstCall ? pBuf.slice(offset) : pBuf
  const type = buf.readUInt32LE(0)

  if (decoderList[type] == null) {
    throw new Error(`Decode buffer error: Invalid type ${type}`)
  }

  return decoderList[type](decode, offset, buf)
}

/**
 * Decode data and return its value
 * offset 4 => tcp, 0 => udp
 * @param offset
 * @param buf
 * @returns {*}
 */
module.exports = (offset, buf) => decode(offset, buf, true).then((data) => data.value)
