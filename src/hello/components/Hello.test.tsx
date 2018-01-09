import * as React from 'react'
import {create} from 'react-test-renderer'
import {Hello} from './Hello'

test('Hello component should read message from MobX store', () => {
  const tree = create(<Hello />).toJSON()
  expect(tree).toMatchSnapshot()
})
