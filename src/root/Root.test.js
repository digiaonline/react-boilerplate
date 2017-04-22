import React from 'react'
import {render} from 'react-dom'
import Root from './Root'
import configureStore from './configureStore'
import {browserHistory} from 'react-router'

it('renders without crashing', () => {
  const store = configureStore()
  const div = document.createElement('div')
  render(<Root history={browserHistory} store={store}/>, div)
})
