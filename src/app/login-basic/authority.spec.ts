/* eslint-disable @typescript-eslint/no-unused-vars */

import {Authority} from './authority';

describe('Authority', () => {

  it('should create an instance', () => {
    expect(new Authority()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const authority = new Authority({
      authority: 'ROLE_USER'
    });
    expect(authority.authority).toEqual('ROLE_USER');
  });

});
