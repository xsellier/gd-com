import PACKET_PAD from '../constants';

/**
 * Decode Vector2
 * @param buf
 * @returns {Object}
 */
export default function decodeVector3(buf) {
  return {
    value: [
      [
        buf.readFloatLE(4),
        buf.readFloatLE(8)
      ], [
        buf.readFloatLE(12),
        buf.readFloatLE(16)
      ], [
        buf.readFloatLE(20),
        buf.readFloatLE(24)
      ]
    ],
    length: PACKET_PAD + (4 * 6)
  };
}
