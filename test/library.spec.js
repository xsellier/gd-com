/* global describe, it, before */
import chai from 'chai';
import { encode, decode } from '../lib/library.min.js';

chai.expect();

const expect = chai.expect;

describe('Encode', () => {
  describe('Null', () => {
    it('should return ', () => {
      expect(encode(null)).to.be.equal(encode(null));
    });
  });
});
