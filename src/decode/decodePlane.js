/**
 * Decode Plane
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: {
      x: buf.readFloatLE(4),
      y: buf.readFloatLE(8),
      z: buf.readFloatLE(12),
      dist: buf.readFloatLE(16)
    },
    length: 4 * 4
  };
};
