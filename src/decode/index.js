import decodeBoolean from './decodeBoolean';
import decodeInteger from './decodeInteger';
import decodeFloat from './decodeFloat';
import decodeString from './decodeString';
import decodeVector2 from './decodeVector2';
import decodeRect2 from './decodeRect2';
import decodeVector3 from './decodeVector3';
import decodeMatrix32 from './decodeMatrix32';
import decodePlane from './decodePlane';
import decodeQuaternion from './decodeQuaternion';
import decodeAabb from './decodeAabb';
import decodeMatrix33 from './decodeMatrix33';
import decodeTransform from './decodeTransform';
import decodeColor from './decodeColor';
import decodeDictionnary from './decodeDictionnary';
import decodeArray from './decodeArray';

/**
 * Decode data
 * @param offset
 * @param pBuf
 * @returns {*}
 */
export function decode(offset, pBuf) {
  const buf = pBuf.slice(offset);
  const type = buf.readUInt32LE(0);
  let data = null;

  switch (type) {
    case 1:
      data = decodeBoolean(buf);
      break;
    case 2:
      data = decodeInteger(buf);
      break;
    case 3:
      data = decodeFloat(buf);
      break;
    case 4:
      data = decodeString(buf);
      break;
    case 5:
      data = decodeVector2(buf);
      break;
    case 6:
      data = decodeRect2(buf);
      break;
    case 7:
      data = decodeVector3(buf);
      break;
    case 8:
      data = decodeMatrix32(buf);
      break;
    case 9:
      data = decodePlane(buf);
      break;
    case 10:
      data = decodeQuaternion(buf);
      break;
    case 11:
      data = decodeAabb(buf);
      break;
    case 12:
      data = decodeMatrix33(buf);
      break;
    case 13:
      data = decodeTransform(buf);
      break;
    case 14:
      data = decodeColor(buf);
      break;
    case 20:
      data = decodeDictionnary(offset, buf);
      break;
    case 21:
      data = decodeArray(offset, buf);
      break;
    case 0:
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
 * Decode data and return it's value
 * offset 4 => tcp, 0 => udp
 * @param offset
 * @param buf
 * @returns {*}
 */
export default (offset, buf) => {
  return decode(offset, buf).value;
};
