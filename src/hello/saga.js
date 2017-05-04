// @flow

import {takeLatest} from 'redux-saga/effects'
import {fork, put} from 'redux-saga/effects'
import {reply} from './actions'

export function* sayHelloSaga(): Generator<> {
  yield put(reply('Hello from Redux.'))
}

export default function* (): Generator<> {
  yield [
    fork(function* (): Generator<> {
      yield takeLatest('SAY_HELLO', sayHelloSaga)
    }),
  ]
}
