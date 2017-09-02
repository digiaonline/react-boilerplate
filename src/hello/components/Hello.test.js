import React from 'react'
import renderer from 'react-test-renderer'
import {Hello} from './Hello'

test('Hello component should read message from MobX store', () => {
  const tree = renderer.create(<Hello />).toJSON()
  expect(tree).toMatchSnapshot()
})
