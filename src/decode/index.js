import PACKET_PAD from '../constants';

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
 * @param pBuf
 * @returns {*}
 */
export function decode(pBuf) {
  const buf = pBuf.slice(4);
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
      data = decodeDictionnary(buf);
      break;
    case 21:
      data = decodeArray(buf);
      break;
    case 0:
    default:
      data = {
        value: null,
        length: PACKET_PAD
      };
      break;
  }
  return data;
}

/**
 * Decode data and return it's value
 * @param buf
 * @returns {*}
 */
export default function decodeValue(buf) {
  return decode(buf).value;
}
