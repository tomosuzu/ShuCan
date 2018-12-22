import * as React from 'react';
import * as sinon from 'sinon';

import { shallow } from 'enzyme';
import { Hello } from './App';
import { ShucanState } from './Shucan';

describe('index', () => {
  let wrapper:any;
  let actions:any;

  beforeEach(() => {
    actions = {
      addShucan: sinon.spy(),
    };
    const state: ShucanState = { title: 'hello' };
    wrapper = shallow(<Hello value={state} actions={actions} />);
  });

  test('show title and description', () => {
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });

  test('change text', () => {
    wrapper.find('input').first().simulate('change', { currentTarget: { value: 'value' } });
    wrapper.update();
    expect(actions.addShucan.calledWith('value')).toBe(true);
  });
});
