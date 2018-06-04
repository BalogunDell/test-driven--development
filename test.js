import { mocha } from 'mocha';
import { chai, expect } from 'chai';
import { arraySum } from './index';

describe('SimpleOperations', () => {
  it('should return the sum of an array', (done) => {
    const operationResult = arraySum([1,2,3,4,5,6,7,8,9,10]);
    expect(operationResult).to.equal(55);
    done();
  });
});