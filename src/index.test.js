import React from 'react'

import { shallow } from 'enzyme'
import App from './index'

describe('index', () => {
  test('first test', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.text()).toEqual('Hello!')
  })
})
