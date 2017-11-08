import { each, isObject, isArray } from 'lodash';

import encodeNull from './encodeNull';
import encodeBoolean from './encodeBoolean';
import encodeInteger from './encodeInteger';
import encodeFloat from './encodeFloat';
import encodeString from './encodeString';
import encodeDictionnary from './encodeDictionnary';
import encodeArray from './encodeArray';

/**
 * Prepare command message
 * @param value
 * @returns {*}
 */
function prepare(value) {
  let data;

  switch (typeof value) {
    case 'undefined':
      break;

    case 'object':
      if (isObject(value)) {
        const encoded = [];

        each(value, (v, i) => {
          encoded.push(prepare(i));
          encoded.push(prepare(v));
        });

        data = encodeDictionnary(encoded);
      }

      if (isArray(value)) {
        const encoded = [];

        each(value, (v) => {
          encoded.push(prepare(v));
        });
        data = encodeArray(encoded);
      }
      break;

    case 'boolean':
      data = encodeBoolean(value);
      break;

    case 'number':
      if (Number(value) === value && value % 1 === 0) {
        data = encodeInteger(value);
      }
      if (value === Number(value) && value % 1 !== 0) {
        data = encodeFloat(value);
      }
      break;

    case 'string':
      data = encodeString(value);
      break;

    default:
      data = encodeNull();
      break;
  }

  return data;
}

/**
 * Write type
 * @param buf
 * @param type
 */
export function writeType(buf, type) {
  buf.writeUInt32LE(type, 0);
}

/**
 * Encode data
 * @param value
 * @returns {*}
 */
export default function encode(value) {
  const packet = (data) => {
    const buf = new Buffer(data.length + 4);

    buf.writeUInt32LE(data.length, 0);
    data.value.copy(buf, 4);
    return buf;
  };

  return packet(prepare(value));
};
