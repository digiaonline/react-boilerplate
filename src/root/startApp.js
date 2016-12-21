// @flow

import {browserHistory} from 'react-router'
import renderApp from './renderApp'
import Root from './Root'

import type {RootProps} from './Root'

const rootProps: RootProps = {
  history: browserHistory,
}

export default () => {
  renderApp(Root, rootProps)

  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./Root', () => {
      const nextRootComponent = require('./Root').default
      renderApp(nextRootComponent, rootProps)
    })
  }

  if (process.env.NODE_ENV === 'production') {
    require('./enableOfflineMode')
  }
}
