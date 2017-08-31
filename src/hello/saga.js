// @flow

import {all, fork, put, takeLatest} from 'redux-saga/effects'
import {reply} from './actions'

export function* sayHelloSaga(): Generator<> {
  yield put(reply('Hello from Redux.'))
}

export default function*(): Generator<> {
  yield all([
    fork(function*(): Generator<> {
      yield takeLatest('SAY_HELLO', sayHelloSaga)
    }),
  ])
}
