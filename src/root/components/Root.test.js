import React from 'react'
import {render} from 'react-dom'
import Root from './Root'

test('Root component renders without crashing', () => {
  const div = document.createElement('div')
  render(<Root />, div)
})
