import {reply} from './actions'
import {messageReducer} from './reducer'

test('Hello message reducer should update state on reply action', () => {
  const state = messageReducer('', reply('Hello from Jest.'))
  expect(state).toBe('Hello from Jest.')
})
