import React from 'react'
import {render} from 'react-dom'
import renderer from 'react-test-renderer'
import Root from './Root'
import configureStore from '../configureStore'

test('Root component renders without crashing', () => {
  const store = configureStore()
  const div = document.createElement('div')
  render(<Root store={store}/>, div)
})

test('Root component matches snapshot', () => {
  const store = configureStore()
  const tree = renderer.create(
    <Root store={store}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
