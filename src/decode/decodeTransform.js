import PACKET_PAD from '../constants';

/**
 * Decode boolean
 * @param buf
 * @returns {Object}
 */
export default function decodeTransform(buf) {
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
      ], [
        buf.readFloatLE(40),
        buf.readFloatLE(44),
        buf.readFloatLE(48)
      ]
    ],
    length: PACKET_PAD + (4 * 12)
  };
}