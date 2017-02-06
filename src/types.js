// @flow

import type {RootState} from './root/types'

export type Action<Type: string, Payload> = {
  type: Type,
  payload: Payload,
}

export type Reducer<State> = (state: State, action: any) => State

export type Selector<Value, Props> = (state: RootState, props: Props) => Value
