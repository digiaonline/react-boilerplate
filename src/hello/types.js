// @flow

import type {Action} from '../types'

export type HelloState = {
  message: string,
}

export type SayHelloAction = Action<'SAY_HELLO', void>
export type ReplyAction = Action<'REPLY', string>
