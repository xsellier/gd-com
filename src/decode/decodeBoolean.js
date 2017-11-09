/**
 * Decode boolean
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: buf.readUInt32LE(4) === 1,
    length: 8
  };
};
