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
    const state: ShucanState = { shucan: [{ title: 'hello1' }, { title: 'hello2' }] };
    wrapper = shallow(<Hello value={state} actions={actions} />);
  });

  test('change state', () => {
    wrapper.find('input').first().simulate('change', { target: { value: 'value' } });
    expect(wrapper.state().title).toBe('value');
  });

  test('save Shucan', () => {
    wrapper.find('input').first().simulate('change', { target: { value: 'value' } });
    wrapper.find('button').first().simulate('click');
    expect(actions.addShucan.calledWith('value')).toBe(true);
  });

  test('show Shucan List', () => {
    expect(wrapper.find('li').length).toBe(2);
  });
});
