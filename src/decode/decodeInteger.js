/**
 * Decode integer
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: buf.readInt32LE(4),
    length: 8
  };
};
