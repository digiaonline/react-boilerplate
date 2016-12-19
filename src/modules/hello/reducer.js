// @flow

import {combineReducers} from 'redux'

import type {ReplyAction} from './types'

export const messageReducer = (state: string = '', {type, payload: message}: ReplyAction) => {
  switch (type) {
    case 'REPLY':
      return message
    default:
      return state
  }
}

export default combineReducers({
  message: messageReducer,
})
