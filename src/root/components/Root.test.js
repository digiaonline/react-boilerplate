import React from 'react'
import {render} from 'react-dom'
import renderer from 'react-test-renderer'
import Root from './Root'

test('Root component renders without crashing', () => {
  const div = document.createElement('div')
  render(<Root />, div)
})

test('Root component matches snapshot', () => {
  const tree = renderer.create(<Root />).toJSON()
  expect(tree).toMatchSnapshot()
})
