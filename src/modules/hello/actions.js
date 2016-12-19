// @flow

import type {SayHelloAction, ReplyAction} from './types'

export const sayHello = (): SayHelloAction => ({
  type: 'SAY_HELLO',
})

export const reply = (message: string): ReplyAction => ({
  type: 'REPLY',
  payload: message,
})
