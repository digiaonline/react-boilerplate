// @flow

import {all, fork} from 'redux-saga/effects'
import helloSaga from '../hello/saga'

export default () =>
  // $FlowFixMe
  function* rootSaga() {
    yield all([fork(helloSaga)])
  }
