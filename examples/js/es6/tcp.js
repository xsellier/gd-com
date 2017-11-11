import { createServer } from 'net';
import { tcp, object } from '../lib/library.min';

let server = createServer((socket) => {
  socket.on('data', (data) => {
    console.log(JSON.stringify(tcp.decode(data)));
    let result = tcp.encode(new object.Vector2(2, 3));

    console.log(
      typeof result,
      Buffer.isBuffer(result),
      result,
      result.buffer
    );
    let result2 = new Buffer(result.buffer);

    console.log(
      typeof result2,
      Buffer.isBuffer(result2),
      result2,
      result2.buffer
    );
    socket.write(result2);
  });

  socket.on('error', () => {
    console.log('Bye :(');
  });
});

server.on('error', (err) => {
  throw err;
});

server.listen(8080, '127.0.0.1', () => {
  console.log(`Server launched 127.0.0.1:${8080}`);
});
