// @flow

import {combineReducers} from 'redux'
import helloReducer from '../hello/reducer'

import type {Reducer} from '../types'
import type {RootState} from './types'

export default (): Reducer<RootState> =>
  combineReducers({
    hello: helloReducer,
  })
