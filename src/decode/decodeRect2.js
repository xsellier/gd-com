import PACKET_PAD from '../constants';

/**
 * Decode Vector2
 * @param buf
 * @returns {Object}
 */
export default function decodeRect2(buf) {
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
    length: PACKET_PAD + (4 * 4)
  };
}
