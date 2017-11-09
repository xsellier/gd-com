/**
 * Decode float
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: buf.readFloatLE(4),
    length: 8
  };
};
