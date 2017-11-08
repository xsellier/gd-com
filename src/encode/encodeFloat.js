import { writeType } from './';

/**
 * Encode Float
 * @returns {{value: Buffer, length: Number}}
 */

export default function encodeFloat(value) {
  let buf = new Buffer(8);

  writeType(buf, 3);
  buf.writeFloatLE(value, 4);

  return {
    value: buf,
    length: buf.length
  };
}
