// @flow

import {createSelector} from 'reselect'
import type {Selector} from '../types'

export const getMessage: Selector<string, void> = (state) =>
  state.hello.message

export const helloSelector: Selector<any> = createSelector(
  [getMessage],
  (message: string) => ({
    message,
  })
)
