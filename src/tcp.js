import decode from './decode';
import encode from './encode';

export default {
  decode: (buf) => decode(4, buf),
  encode: (buf) => encode(4, buf)
};
