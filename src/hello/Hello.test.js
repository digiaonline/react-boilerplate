import React from 'react'
import renderer from 'react-test-renderer'
import {Hello} from './Hello'

test('Hello component should set message from props', () => {
  const tree = renderer.create(
    <Hello sayHello={() => null} message="Hello from Jest."/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
