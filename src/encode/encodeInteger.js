/**
 * Encode Integer
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

export default (value) => {
  let buf = new Buffer(8);

  buf.writeUInt32LE(2, 0);
  buf.writeInt32LE(value, 4);

  return {
    value: buf,
    length: buf.length
  };
};
