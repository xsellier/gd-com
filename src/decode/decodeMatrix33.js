/**
 * Decode Matrix33
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: [
      [
        buf.readFloatLE(4),
        buf.readFloatLE(8),
        buf.readFloatLE(12)
      ], [
        buf.readFloatLE(16),
        buf.readFloatLE(20),
        buf.readFloatLE(24)
      ], [
        buf.readFloatLE(28),
        buf.readFloatLE(32),
        buf.readFloatLE(36)
      ]
    ],
    length: 4 * 9
  };
};
