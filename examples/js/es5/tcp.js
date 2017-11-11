var net = require('net');
var gdCom = require('../lib/library.min');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log(JSON.stringify(gdCom.tcp.decode(data)));

    var buf = Buffer.from(gdCom.tcp.encode({
      3:2
    }));

    socket.write(buf);

  });

  socket.on('error', function () {
    console.log('Bye :(');
  });
});

server.on('error', function (err) {
  throw err;
});

server.listen(8080, '127.0.0.1', function () {
  console.log(`Server launched 127.0.0.1:${8080}`);
});
