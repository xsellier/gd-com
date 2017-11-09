/**
 * Decode Vector2
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: {
      x: buf.readFloatLE(4),
      y: buf.readFloatLE(8)
    },
    length: 4 * 2
  };
};
