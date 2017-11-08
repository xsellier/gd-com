import { writeType } from './';

/**
 * Encode Integer
 * @returns {{value: Buffer, length: Number}}
 */

export default function encodeInteger(value) {
  let buf = new Buffer(8);

  writeType(buf, 2);
  buf.writeInt32LE(value, 4);

  return {
    value: buf,
    length: buf.length
  };
}
