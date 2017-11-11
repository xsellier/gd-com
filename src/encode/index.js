import encodeBoolean from './encodeBoolean';
import encodeInteger from './encodeInteger';
import encodeFloat from './encodeFloat';
import encodeString from './encodeString';
import encodeDictionnary from './encodeDictionnary';
import encodeArray from './encodeArray';
import encodeVector2 from './encodeVector2';
import encodeRect2 from './encodeRect2';

function isObject(value) {
  const type = typeof value;

  return value !== null && (type === 'object' || type === 'function');
}

function isArray(value) {
  return Array.isArray(value);
}

function getType(value) {
  if (value.name !== undefined) {
    return value.name;
  }

  if (isArray(value)) {
    return 'array';
  }

  if (isObject(value)) {
    return 'object';
  }
  return typeof value;
}

/**
 * Prepare command message
 * @param value
 * @returns {*}
 */
function prepare(value) {
  let data;
  let type = getType(value);

  switch (type) {
    case 'undefined':
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

    case 'vector2':
      data = encodeVector2(value);
      break;

    case 'rect2':
      data = encodeRect2(value);
      break;

    case 'object':
      let encodedO = [];

      for (let i in value) {
        if (value.hasOwnProperty(i)) {
          encodedO.push(prepare(i));
          encodedO.push(prepare(value[i]));
        }
      }
      data = encodeDictionnary(encodedO);
      break;

    case 'array':
      let encodedA = [];

      for (let i in value) {
        if (value.hasOwnProperty(i)) {
          encodedA.push(prepare(value[i]));
        }
      }
      data = encodeArray(encodedA);
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
    let buf = new Buffer(data.length + offset);

    buf.writeUInt32LE(data.length, 0);
    data.value.copy(buf, offset);
    return buf;
  };

  return packet(prepare(value));
};
