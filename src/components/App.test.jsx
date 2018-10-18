import React from 'react'

import { shallow } from 'enzyme'
import App from './App'

describe('index', () => {
  test('show title', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('h1').length).toBe(1)
  })

})
