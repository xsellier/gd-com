import { writeType } from './';

/**
 * Encode Boolean
 * @returns {{value: Buffer, length: Number}}
 */

export default function encodeBoolean(value) {
  let buf = new Buffer(8);

  writeType(buf, 1);
  buf.writeUInt32LE(value ? 1 : 0, 4);

  return {
    value: buf,
    length: buf.length
  };
}
