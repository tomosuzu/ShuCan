import * as React from 'react';
import * as sinon from 'sinon';

import { shallow } from 'enzyme';
import { Hello } from './App';
import { ShucansState, RepeatType } from './Shucan';

describe('index', () => {
  let wrapper:any;
  let actions:any;

  beforeEach(() => {
    actions = {
      addShucan: sinon.spy(),
    };
    const state: ShucansState = {
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

describe('sort Shucan List', () => {
  let wrapper:any;
  let actions:any;

  beforeEach(() => {
    actions = {
      addShucan: sinon.spy(),
    };
    const state: ShucansState = {
      shucan: [
        { title: 'sort1', repeat: RepeatType.day, endDate: '20180101' },
        { title: 'sort2', repeat: RepeatType.day, endDate: '20181231'  },
        { title: 'sort3', repeat: RepeatType.day, endDate: '20110101' },
        { title: 'sort4', repeat: RepeatType.day, endDate: '20171231'  },
      ],
    };
    wrapper = shallow(<Hello value={state} actions={actions} />);
  });

  test('sort by endDate', () => {
    expect(wrapper.find('li').at(0).text()).toBe('sort3: 1: 20110101');
    expect(wrapper.find('li').at(1).text()).toBe('sort4: 1: 20171231');
    expect(wrapper.find('li').at(2).text()).toBe('sort1: 1: 20180101');
    expect(wrapper.find('li').at(3).text()).toBe('sort2: 1: 20181231');
  });
});
