/**
 * Encode string
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
export default (value) => {
  let len = Buffer.byteLength(value);
  let pad = len % 4 === 0 ? 0 : 4 - len % 4;
  let buf = new Buffer(8 + len + pad);

  buf.writeUInt32LE(4, 0);

  buf.writeUInt32LE(len, 4);
  buf.write(value, 8);
  if (pad !== 0) {
    let pos = 8 + len;

    for (let i = 0; i < pad; i++) {
      buf.write('\0', i + pos);
    }
  }

  return {
    value: buf,
    length: buf.length
  };
};
