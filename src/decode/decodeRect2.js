import Rect2 from '../object/Rect2';

/**
 * Decode Rect2
 * @param buf
 * @returns {Object}
 */
export default (buf) => {
  return {
    value: new Rect2(
      buf.readFloatLE(4),
      buf.readFloatLE(8),
      buf.readFloatLE(12),
      buf.readFloatLE(16)
    ),
    length: 4 * 4
  };
};
