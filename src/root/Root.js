// @flow

import React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import routes from './routes'

export type RootProps = {
  history: any,
  store: any,
}

const Root = ({history, store}: RootProps) =>
  <Provider store={store}>
    <Router history={history} routes={routes} key={Math.random()}/>
  </Provider>

export default Root
