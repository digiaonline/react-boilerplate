import type {Action} from '../types'

export type HelloState = {
  message: string,
}

export type HelloAction = Action<'HELLO', void>
export type ReplyAction = Action<'REPLY', string>
