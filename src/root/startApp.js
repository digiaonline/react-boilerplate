// @flow

import {browserHistory} from 'react-router'
import configureStore from './configureStore'
import renderApp from './renderApp'
import Root from './Root'

export default () => {
  const store = configureStore()

  const rootProps = {
    history: browserHistory,
    store,
  }

  renderApp(Root, rootProps)

  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./Root', () => {
      const nextRoot = require('./Root').default
      renderApp(nextRoot, rootProps)
    })
  }

  if (process.env.NODE_ENV === 'production') {
    require('./enableOfflineMode')
  }
}
