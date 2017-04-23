import {helloSelector} from './selectors'

test('Hello selectors should get message from state', () => {
  const state = {hello: ''}
  const props = helloSelector(state)
  expect(props).toHaveProperty('message', state.hello.message)
})
