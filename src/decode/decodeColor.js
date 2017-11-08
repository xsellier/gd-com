import PACKET_PAD from '../constants';

/**
 * Decode boolean
 * @param buf
 * @returns {Object}
 */
export default function decodeColor(buf) {
  return {
    value: {
      r: buf.readFloatLE(4),
      g: buf.readFloatLE(8),
      b: buf.readFloatLE(12),
      a: buf.readFloatLE(16)
    },
    length: PACKET_PAD + (4 * 4)
  };
}
