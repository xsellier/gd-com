import encodeBoolean from './encodeBoolean';
import encodeInteger from './encodeInteger';
import encodeFloat from './encodeFloat';
import encodeString from './encodeString';
import encodeDictionnary from './encodeDictionnary';
import encodeArray from './encodeArray';

function isObject(value) {
  const type = typeof value;

  return value !== null && (type === 'object' || type === 'function');
}

function isArray(value) {
  return Array.isArray(value);
}

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

        for (let i in value) {
          if (value.hasOwnProperty(i)) {
            encoded.push(prepare(i));
            encoded.push(prepare(value[i]));
          }
        }
        data = encodeDictionnary(encoded);
      }

      if (isArray(value)) {
        const encoded = [];

        for (let i in value) {
          if (value.hasOwnProperty(i)) {
            encoded.push(prepare(value[i]));
          }
        }
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
      data = {
        value: null,
        length: 4
      };
      break;
  }

  return data;
}

/**
 * Encode data
 * offset 4 => tcp, 0 => udp
 * @param offset
 * @param value
 * @returns {*}
 */
export default (offset, value) => {
  const packet = (data) => {
    const buf = new Buffer(data.length + offset);

    buf.writeUInt32LE(data.length, 0);
    data.value.copy(buf, offset);
    return buf;
  };

  return packet(prepare(value));
};
