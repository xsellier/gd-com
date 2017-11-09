/**
 * Encode Float
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

export default (value) => {
  let buf = new Buffer(8);

  buf.writeUInt32LE(3, 0);
  buf.writeFloatLE(value, 4);

  return {
    value: buf,
    length: buf.length
  };
};
