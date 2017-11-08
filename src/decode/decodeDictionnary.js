/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint no-bitwise: ["error", { "allow": ["&"] }] */

import PACKET_PAD from '../constants';
import { decode } from './index';

/**
 * Decode boolean
 * @param buf
 * @returns {Object}
 */
export default function decodeDictionnary(buf) {
  const nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF;
  const dict = {};
  let bufPos = PACKET_PAD;

  for (let i = 0; i < nrEntries; i++) {
    // start from 8
    const decodedKey = decode(buf.slice(bufPos));

    bufPos += decodedKey.length;

    const decodedValue = decode(buf.slice(bufPos));

    bufPos += decodedValue.length;
    dict[decodedKey.value] = decodedValue.value;
  }

  return {
    value: dict,
    length: PACKET_PAD + bufPos
  };
}
