import React from 'react'
import renderer from 'react-test-renderer'
import {Hello} from './Hello'
import {sayHello} from '../actions'

test('Hello component should set message from props', () => {
  const tree = renderer.create(
    <Hello sayHello={sayHello} message="Hello from Jest."/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
