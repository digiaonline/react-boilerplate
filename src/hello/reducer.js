// @flow

import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import type {Reducer} from '../types'
import type {ReplyAction} from './types'

export const messageReducer: Reducer<string> = handleActions({
  REPLY: (state, {payload: message}: ReplyAction) => message,
}, '')

export default combineReducers({
  message: messageReducer,
})
