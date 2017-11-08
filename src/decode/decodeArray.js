import PACKET_PAD from '../constants';
import decode from './index';

/**
 * Decode boolean
 * @param buf
 * @returns {Object}
 */
export default function decodeArray(buf) {
  const nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF;
  const arr = [];
  let bufPos = PACKET_PAD;

  for (let i = 0; i < nrEntries; i++) {
    const decodedKey = decode(buf.slice(bufPos));

    bufPos += decodedKey.length;
    arr.push(decodedKey.value);
  }

  return {
    value: arr,
    length: PACKET_PAD + bufPos
  };
}
