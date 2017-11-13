const net = require('net')
const gdCom = require('../lib')

let server = net.createServer(function (socket) {
  socket.on('data', function (data) {
    console.log(JSON.stringify(gdCom.TCP.decode(data)))

    let vector = gdCom.objects.Vector2(2, 3)
    let buf = Buffer.from(gdCom.TCP.encode(vector))

    socket.write(buf)
  })

  socket.on('error', () => console.log('Bye :('))
})

server.on('error', function (err) {
  throw err
})

server.listen(8080, '127.0.0.1', () => {
  console.log(`Server launched 127.0.0.1:${8080}`)
})
