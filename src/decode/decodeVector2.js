/**
 * Decode Vector2
 * @param buf
 * @returns {Object}
 */
import Vector2 from '../object/Vector2';

export default (buf) => {
  return {
    value: new Vector2(buf.readFloatLE(4), buf.readFloatLE(8)),
    length: 4 * 2
  };
};
