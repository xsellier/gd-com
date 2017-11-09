/**
 * Decode Rect2
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: {
      coordinate: {
        x: buf.readFloatLE(4),
        y: buf.readFloatLE(8)
      },
      size: {
        x: buf.readFloatLE(12),
        y: buf.readFloatLE(16)
      }
    },
    length: 4 * 4
  };
};
