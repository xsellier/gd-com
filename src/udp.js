import decode from './decode';
import encode from './encode';

export default {
  decode: (buf) => decode(0, buf),
  encode: (buf) => encode(0, buf)
};
