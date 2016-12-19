// @flow

import {combineReducers} from 'redux'
import helloReducer from '../hello/reducer'

import type {RootState} from './types'

export default (): RootState =>
  combineReducers({
    hello: helloReducer,
  })
