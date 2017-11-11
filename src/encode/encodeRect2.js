/**
 * Encode Rect2
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */

export default (value) => {
  let buf = new Buffer(20);

  buf.writeUInt32LE(6, 0);
  buf.writeFloatLE(value.cx, 4);
  buf.writeFloatLE(value.cy, 8);
  buf.writeFloatLE(value.sx, 12);
  buf.writeFloatLE(value.sy, 16);

  return {
    value: buf,
    length: buf.length
  };
};
