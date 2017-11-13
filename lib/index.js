const decoders = require('./decode')
const encoders = require('./encode')
const objects = require('./object')

const CONNECTION_TYPES = {
  UDP: {
    offset: 0,
    name: 'UDP'
  },
  TCP: {
    offset: 4,
    name: 'TCP'
  }
}

module.exports = Object.keys(CONNECTION_TYPES).reduce((codecs, connectionType) => {
  let connectionTypeData = CONNECTION_TYPES[connectionType]

  codecs[connectionType] = {
    decode: decoders.bind(decoders, connectionTypeData.offset),
    encode: encoders.bind(decoders, connectionTypeData.offset)
  }

  return codecs
}, { objects })
