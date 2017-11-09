import { decode } from './index';

/**
 * Decode Array
 * @param offset
 * @param buf
 * @returns {Object}
 */
export default (offset, buf) => {
  const nrEntries = buf.readUInt32LE(4) & 0x7FFFFFFF;
  const arr = [];
  let bufPos = 8;

  for (let i = 0; i < nrEntries; i++) {
    const decodedKey = decode(offset, buf.slice(bufPos));

    bufPos += decodedKey.length;
    arr.push(decodedKey.value);
  }

  return {
    value: arr,
    length: bufPos
  };
};
