import PACKET_PAD from '../constants';

/**
 * Decode float
 * @param buf
 * @returns {Object}
 */
export default function decodeFloat(buf) {
  return {
    value: buf.readFloatLE(4),
    length: PACKET_PAD + 4
  };
}
