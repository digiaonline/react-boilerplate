// @flow

import type {RootState as $RootState} from './root/types'
import type {Selector as ReselectSelector} from 'reselect'

export type RootState = $RootState

export type Action<Type: string, Payload> = {
  type: Type,
  payload: Payload,
}

export type Reducer<State> = (state: State, action: any) => State

export type Selector<Value, Props> = ReselectSelector<RootState, Props, Value>
