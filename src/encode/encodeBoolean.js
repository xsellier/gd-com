/**
 * Encode Boolean
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

export default (value) => {
  let buf = new Buffer(8);

  buf.writeUInt32LE(1, 0);
  buf.writeUInt32LE(value ? 1 : 0, 4);

  return {
    value: buf,
    length: buf.length
  };
};
