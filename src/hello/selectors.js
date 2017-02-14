import type {Selector} from '../../types'

const getMessage: Selector<string> = (state) =>
  state.hello.message

export const helloSelector: Selector<mixed> = (state) => ({
  message: getMessage(state),
})
