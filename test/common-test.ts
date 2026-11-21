import * as chai from 'chai';
import { testBit } from '../src/common';

// eslint-disable-next-line import/extensions
import pkg from '../package.json';

const should = chai.should();

describe('the deprecated RE_ZONE_STRING export', () => {
  it('lasts only until 11.0.0', () => {
    const major = Number(pkg.version.split('.')[0]);

    major.should.be.below(
      11,
      'ip-address is at 11.x, so delete RE_ZONE_STRING from src/v6/constants.ts: nothing in ' +
        'the library uses it and it takes quadratic time on hostile input. Then delete this test.',
    );
  });
});

describe('testBit', () => {
  it('should return value per specific bit', () => {
    should.equal(testBit('0', 1), false);
    should.equal(testBit('1', 1), true);

    should.equal(testBit('1010', 1), false);
    should.equal(testBit('1010', 2), true);
    should.equal(testBit('1010', 3), false);
    should.equal(testBit('1010', 4), true);
    // Length bigger than the size of string
    should.equal(testBit('1010', 5), false);
  });
});
