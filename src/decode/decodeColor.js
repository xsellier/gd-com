/**
 * Decode Color
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: {
      r: buf.readFloatLE(4),
      g: buf.readFloatLE(8),
      b: buf.readFloatLE(12),
      a: buf.readFloatLE(16)
    },
    length: 4 * 4
  };
};
