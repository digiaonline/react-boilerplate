// @flow

import {createAction} from 'redux-actions'

import type {SayHelloAction, ReplyAction} from './types'

export const sayHello: () => SayHelloAction =
  createAction('SAY_HELLO')

export const reply: (message: string) => ReplyAction =
  createAction('REPLY')
