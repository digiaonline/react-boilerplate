// @flow

import React, {createElement} from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './root/components/Root'
import './index.css'

//Gotta check for null to prevent flow from complaining
const rootElement = document.getElementById('root')
if (rootElement === null) {
  throw new Error('No #root element is found')
}

const renderApp = (component: any) =>
  render(<AppContainer>{createElement(component)}</AppContainer>, rootElement)

renderApp(Root)

// $FlowFixMe
if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./root/components/Root', () => {
    const nextRoot = require('./root/components/Root').default
    renderApp(nextRoot)
  })
}
