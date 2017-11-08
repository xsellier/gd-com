import PACKET_PAD from '../constants';

/**
 * Decode Vector2
 * @param buf
 * @returns {Object}
 */
export default function decodeQuaternion(buf) {
  return {
    value: {
      coordinate: {
        x: buf.readFloatLE(4),
        y: buf.readFloatLE(8),
        z: buf.readFloatLE(12)
      },
      size: {
        x: buf.readFloatLE(16),
        y: buf.readFloatLE(20),
        z: buf.readFloatLE(24)
      }
    },
    length: PACKET_PAD + (4 * 6)
  };
}
