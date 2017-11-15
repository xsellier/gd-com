const net = require('net')
const gdCom = require('../lib')

let server = net.createServer(function (socket) {
  socket.on('data', function (data) {
    let vector = gdCom.objects.Vector2(2, 3)

    return gdCom.TCP.encode(vector)
      .then(Buffer.from)
      .then(socket.write)
  })

  socket.on('error', () => console.log('Bye :('))
})

server.on('error', function (err) {
  throw err
})

server.listen(8080, '127.0.0.1', () => {
  console.log(`Server launched 127.0.0.1:${8080}`)
})
