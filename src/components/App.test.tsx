import * as React from 'react';
import * as sinon from 'sinon';

import { shallow } from 'enzyme';
import { Hello } from './App';
import { ShucanState, RepeatType } from './Shucan';

describe('index', () => {
  let wrapper:any;
  let actions:any;

  beforeEach(() => {
    actions = {
      addShucan: sinon.spy(),
    };
    const state: ShucanState = {
      shucan: [
        { title: 'hello1', repeat: RepeatType.day },
        { title: 'hello2', repeat: RepeatType.day },
      ],
    };
    wrapper = shallow(<Hello value={state} actions={actions} />);
  });

  test('change shucan title', () => {
    wrapper.find('[name="title"]').first()
      .simulate('change', { target: { name: 'title', value: 'value' } });
    expect(wrapper.state().title).toBe('value');
  });

  test('change shucan repeat', () => {
    wrapper.find('select').first()
      .simulate('change', { target: { name: 'repeat', value: 'value' } });
    expect(wrapper.state().repeat).toBe('value');
  });

  test('save Shucan', () => {
    wrapper.find('[name="title"]').first()
      .simulate('change', { target: { name: 'title', value: 'value' } });
    wrapper.find('button').first().simulate('click');
    expect(actions.addShucan.calledWith('value')).toBe(true);
  });

  test('save Shucan with endDate', () => {
    wrapper.find('[name="endDate"]').first()
      .simulate('change', { target: { name: 'title', value: 'value2' } });
    wrapper.find('button').first().simulate('click');
    console.log();
    expect(actions.addShucan.calledWith('value2')).toBe(true);
  });

  test('show Shucan List', () => {
    expect(wrapper.find('li').length).toBe(2);
  });
});
