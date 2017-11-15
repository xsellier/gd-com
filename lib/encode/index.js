const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname)

const encoderList = files.reduce((encoders, filename) => {
  const filePath = path.join(__dirname, filename)
  const extname = path.extname(filePath)

  if (fs.statSync(filePath).isFile() &&
      /^\.js$/i.test(extname) &&
      __filename !== filePath) {
    encoders.push(require(filePath))
  }

  return encoders
}, [])

function isObject (value) {
  const type = typeof value

  return value != null && (type === 'object' || type === 'function')
}

function isArray (value) {
  return Array.isArray(value)
}

function getType (value) {
  if (isArray(value)) {
    return 'array'
  }

  if (isObject(value)) {
    return 'object'
  }
  return typeof value
}

/**
 * Prepare command message
 * @param value
 * @returns {*}
 */
function prepare (value) {
  let typeName = getType(value)
  let encoder = encoderList.filter((encoder) => encoder.type(typeName, value))

  if (encoder.length !== 1) {
    return new Error(`Invalid value: no matching encoder found ${value}:${typeName}`)
  }

  return encoder[0].encode(prepare, value)
}

/**
 * Encode data
 * If connection is TCP, then offset = 4, otherwise, its UDP and offset = 0
 * @param offset
 * @param value
 * @returns {*}
 */
module.exports = (offset, value) => {
  const packet = (data) => {
    let buf = Buffer.alloc(data.length + offset)

    buf.writeUInt32LE(data.length, 0)
    data.value.copy(buf, offset)

    return buf
  }

  return prepare(value)
    .then(packet)
}
