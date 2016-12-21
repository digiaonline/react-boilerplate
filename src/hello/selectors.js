import type {Selector} from '../../types'

export const getMessage: Selector<string, void> = (state) =>
  state.hello.message
