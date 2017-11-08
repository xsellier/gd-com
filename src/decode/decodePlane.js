import PACKET_PAD from '../constants';

/**
 * Decode Vector2
 * @param buf
 * @returns {Object}
 */
export default function decodePlane(buf) {
  return {
    value: {
      x: buf.readFloatLE(4),
      y: buf.readFloatLE(8),
      z: buf.readFloatLE(12),
      dist: buf.readFloatLE(16)
    },
    length: PACKET_PAD + (4 * 4)
  };
}
