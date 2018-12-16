import * as React from 'react';

import { shallow } from 'enzyme';
import { Hello } from './App';

describe('index', () => {
  test('show title and description', () => {
    const wrapper = shallow(<Hello compiler="TypeScript" framework="React"/>);

    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });
});
