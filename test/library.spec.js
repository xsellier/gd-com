/* global describe, it, before */
import chai from 'chai';
import { udp, tcp } from '../lib/library.min.js';

chai.expect();

const expect = chai.expect;

let data = {
  'Boolean': [
    true,
    false
  ],
  'Integer': [
    42,
    -42
  ],
  'Float': [
    -42.4,
    42.4
  ],
  'String': [
    'test',
    'test2'
  ],
  'Dictionary': [
    {
      true: false,
      12: -12,
      'test': 'test'
    }
  ],
  'Array': [
    [
      true,
      false,
      12,
      -12,
      'test',
      'test2'
    ]
  ]
};

describe('UDP test', () => {
  for (let i in data) {
    describe(i, () => {
      for (let j = 0; j < data[i].length; j++) {
        let value = data[i][j];

        it(`encode(${value.toString()}) == encode(${value.toString()})`, () => {
          expect(udp.encode(value)).to.deep.equal(udp.encode(value));
        });

        it(`${value.toString()} ==  decode(encode(${value.toString()}))`, () => {
          expect(value).to.deep.equal(udp.decode(udp.encode(value)));
        });
      }
    });
  }
});

describe('TCP test', () => {
  for (let i in data) {
    describe(i, () => {
      for (let j = 0; j < data[i].length; j++) {
        let value = data[i][j];

        it(`encode(${value.toString()}) == encode(${value.toString()})`, () => {
          expect(tcp.encode(value)).to.deep.equal(tcp.encode(value));
        });

        it(`${value.toString()} ==  decode(encode(${value.toString()}))`, () => {
          expect(value).to.deep.equal(tcp.decode(tcp.encode(value)));
        });
      }
    });
  }
});
