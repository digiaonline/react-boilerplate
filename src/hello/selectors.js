import type {Selector} from '../../types'

export const getMessage: Selector<string> = (state) =>
  state.hello.message
