import decode from './decode';
import encode from './encode';

let nestedFunc = (type) => {
  let offset = null;

  switch (type) {
    case 'udp':
      offset = 0;
      break;
    case 'tcp':
    default:
      offset = 4;
      break;
  }
  return {
    decode: (buf) => {
      return decode(offset, buf);
    },
    encode: (buf) => {
      return encode(offset, buf);
    }
  };
};

export let udp = nestedFunc('udp');
export let tcp = nestedFunc('tcp');
