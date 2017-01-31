// @flow

import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import type {ReplyAction} from './types'

export const messageReducer = handleActions({
  ['REPLY']: (state: mixed, {payload: message}: ReplyAction) => message,
}, '')

export default combineReducers({
  message: messageReducer,
})
