var dgram = require('dgram');
var gdCom = require('gd-com');


var server = dgram.createSocket('udp4');

server.on('listening', function() {
  let address = server.address();
  console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (buf, remote) {
  console.log(gdCom.udp.decode(buf));

  server.send(gdCom.udp.encode(['HELLO WORLD']),remote.port,remote.host,function(error){
    if(error){
      client.close();
    } else{
      console.log('Data sent !!!');
    }

  });

});

server.bind(8081, '127.0.0.1');
