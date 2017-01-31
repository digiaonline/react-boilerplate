// @flow

import type {RootState} from './root/types'

export type Action<Type: string, Payload> = {
  type: Type,
  payload: Payload,
}

export type Selector<Value, Props> = (state: RootState, props: Props) => Value
