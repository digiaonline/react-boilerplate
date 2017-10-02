// @flow

import React, {createElement} from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './root/components/Root'
import './index.css'

const renderApp = (component: any) =>
  render(
    <AppContainer>{createElement(component)}</AppContainer>,
    document.getElementById('root')
  )

renderApp(Root)

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./root/components/Root', () => {
    const nextRoot = require('./root/components/Root').default
    renderApp(nextRoot)
  })
}
