const fs = require('fs')
const path = require('path')

const files = fs.readdirSync(__dirname)

const gdObjects = files.reduce((gdObjectList, filename) => {
  const filePath = path.join(__dirname, filename)
  const extname = path.extname(filePath)

  if (fs.statSync(filePath).isFile() &&
      /^\.js$/i.test(extname) &&
      __filename !== filePath) {
    const basename = path.basename(filename, extname)

    gdObjectList[basename] = require(filePath)
  }

  return gdObjectList
}, {})

module.exports = gdObjects
