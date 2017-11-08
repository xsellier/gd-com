import PACKET_PAD from '../constants';

/**
 * Decode Vector2
 * @param buf
 * @returns {Object}
 */
export default function decodeVector2(buf) {
  return {
    value: {
      x: buf.readFloatLE(4),
      y: buf.readFloatLE(8)
    },
    length: PACKET_PAD + (4 * 2)
  };
}
