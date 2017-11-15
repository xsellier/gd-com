const dgram = require('dgram')
const gdCom = require('../../lib')

let server = dgram.createSocket('udp4')

server.on('listening', function () {
  let address = server.address()

  console.log(`UDP Server listening on ${address.address}:${address.port}`)
})

server.on('message', function (buf, remote) {
  return gdCom.UDP.encode(['HELLO WORLD'])
    .then((encodedBuffer) => {
      server.send(encodedBuffer, remote.port, remote.host, (err) => {
        if (err) {
          console.error(`Error: ${err}`)
        } else {
          console.log('Data sent !!!')
        }
      })
    })
})

server.bind(8081, '127.0.0.1')
