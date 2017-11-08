import PACKET_PAD from '../constants';

/**
 * Decode boolean
 * @param buf
 * @returns {Object}
 */
export default function decodeBoolean(buf) {
  return {
    value: buf.readUInt32LE(4) === 1,
    length: PACKET_PAD + 4
  };
}
