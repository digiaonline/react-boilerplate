// @flow

import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './createRootReducer'
import createRootSaga from './createRootSaga'

export default () => {
  const rootReducer = createRootReducer()
  const rootSaga = createRootSaga()
  const sagaMiddleware = createSagaMiddleware()

  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  const store = createStore(rootReducer, enhancer)

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./createRootReducer', () => {
      const nextRootReducer = require('./createRootReducer').default()
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
