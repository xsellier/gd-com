import { writeType } from './';

/**
 * Encode string
 * @param value
 * @returns {{value: Buffer, length: Number}}
 */
export default function encodeString(value) {
  let len = 8;

  for (let i in value) {
    if (value.hasOwnProperty(i)) {
      len += value[i].length;
    }
  }

  let buf = new Buffer(len);

  writeType(buf, 20);
  buf.writeUInt32LE((value.length / 2) & 0x7FFFFFFF, 4);

  let bufPos = 8;

  for (let i in value) {
    if (value.hasOwnProperty(i)) {
      value[i].value.copy(buf, bufPos);
      bufPos += value[i].length;
    }
  }

  return {
    value: buf,
    length: buf.length
  };
}