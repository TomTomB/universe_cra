import { mockCredentials, mockLockfile } from '../../mocks/lcu';
import { expect } from 'chai';
import LCUConnector from './lcu-connector';

describe('LCUConnector', () => {
  it('should get created', () => {
    expect(new LCUConnector());
  });

  describe('decryptLockfile', () => {
    it('should return a valid LCU credentials object if the input is valid', () => {
      expect(new LCUConnector().decryptLockfile(mockLockfile)).to.deep.equal(
        mockCredentials,
      );
    });

    it('should return null if the input is invalid', () => {
      expect(new LCUConnector().decryptLockfile('abc:test')).to.be.null;
    });
  });
});
