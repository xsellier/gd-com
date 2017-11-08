import PACKET_PAD from '../constants';

/**
 * Decode integer
 * @param buf
 * @returns {Object}
 */
export default function decodeInteger(buf) {
  return {
    value: buf.readInt32LE(4),
    length: PACKET_PAD + 4
  };
}
