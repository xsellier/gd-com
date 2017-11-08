import PACKET_PAD from '../constants';

/**
 * Decode String
 * @param buf
 * @returns {Object}
 */
export default function decodeString(buf) {
  const len = buf.readUInt32LE(4);
  const pad = len % 4 === 0 ? 0 : 4 - (len % 4);

  return {
    value: buf.toString('utf8', 8, 8 + len),
    length: PACKET_PAD + 4 + len + pad
  };
}
