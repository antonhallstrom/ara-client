import { mount } from 'enzyme'
import * as React from 'react'
import Test from './hook'

describe('', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Test />)

    wrapper.find('button').simulate('click')
    expect(wrapper.text()).toBe('State updatedChange')
    // Calling state on the component will fail, since it can not
    // be called if it's not a class component. No support for Hooks yet.
    // expect(wrapper.state().myState).toEqual(10)
  })
})
