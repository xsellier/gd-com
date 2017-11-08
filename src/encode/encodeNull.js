import { writeType } from './';

/**
 * Encode null
 * @returns {{value: Buffer, length: Number}}
 */

export default function encodeNull() {
  let buf = new Buffer(4);

  writeType(buf, 0);

  return {
    value: buf,
    length: buf.length
  };
}
