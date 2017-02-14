import {expect} from 'chai'
import React from 'react'
import {shallow} from 'enzyme'
import {mockRootState} from '../root/mock'
import {reply} from './actions'
import {Hello} from './Hello'
import {helloSelector} from './selectors'
import {messageReducer} from './reducer'

describe('Hello module', () => {

  describe('hello component', () => {
    it('should set message from props', () => {
      const wrapper = shallow(<Hello sayHello={() => null} message="Hello from Mocha."/>)
      expect(wrapper).to.contain('Hello from Mocha.')
    })
  })

  describe('message reducer', () => {
    it('should update state on reply action', () => {
      const state = messageReducer('', reply('Hello from Mocha.'))
      expect(state).to.equal('Hello from Mocha.')
    })
  })

  describe('hello selector', () => {
    it('should select message from state', () => {
      const state = mockRootState()
      const props = helloSelector(state)
      expect(props).to.have.property('message', state.hello.message)
    })
  })

})
