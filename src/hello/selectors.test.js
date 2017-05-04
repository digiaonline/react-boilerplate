import {getMessage, helloSelector} from './selectors'

test('Message selector returns message', () => {
  const state = {
    hello: {
      message: 'Hello from Jest.',
    },
  }
  const message = getMessage(state)
  expect(message).toEqual('Hello from Jest.')
})

test('Hello selector props matches snapshot', () => {
  const state = {
    hello: {
      message: 'Hello from Jest.',
    },
  }
  const props = helloSelector(state)
  expect(props).toMatchSnapshot()
})
