// @flow

import {createSelector} from 'reselect'
import type {Selector, RootState} from '../types'

export const getMessage: Selector<*, *> = (state: RootState) =>
  state.hello.message

export const helloSelector = createSelector(
  getMessage,
  (message: string) => ({
    message,
  })
)
