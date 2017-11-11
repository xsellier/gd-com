/**
 * Encode Vector2
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

export default (value) => {
  let buf = new Buffer(12);

  buf.writeUInt32LE(5, 0);
  buf.writeFloatLE(value.x, 4);
  buf.writeFloatLE(value.y, 8);

  return {
    value: buf,
    length: buf.length
  };
};
