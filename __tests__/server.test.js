import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import React from 'react';
// import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Server', () => {
  it('should be able to run tests', () => {
    expect(2 + 2).toBe(4);
  });
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(4);
  // });
});
