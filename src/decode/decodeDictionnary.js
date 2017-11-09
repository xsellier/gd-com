/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint no-bitwise: ["error", { "allow": ["&"] }] */

import { decode } from './index';

/**
 * Decode Dictionnary
 * @param offset
 * @param buf
 * @returns {Object}
 */
export default (offset, buf) => {
  const nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF;
  const dict = {};
  let bufPos = 8;

  for (let i = 0; i < nrEntries; i++) {
    // start from 8
    const decodedKey = decode(offset, buf.slice(bufPos));

    bufPos += decodedKey.length;

    const decodedValue = decode(offset, buf.slice(bufPos));

    bufPos += decodedValue.length;
    dict[decodedKey.value] = decodedValue.value;
  }

  return {
    value: dict,
    length: bufPos
  };
};
