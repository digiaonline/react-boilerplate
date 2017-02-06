// @flow

import React from 'react'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import routes from './routes'

export type RootProps = {
  history: any,
  store: any,
}

const Root = ({history, store}: RootProps) =>
  <AppContainer key="root">
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
        key={Math.random()}
      />
    </Provider>
  </AppContainer>

export default Root
