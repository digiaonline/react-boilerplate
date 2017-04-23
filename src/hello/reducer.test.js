import {reply} from './actions'
import {messageReducer} from './reducer'

test('Message reducer state matches snapshot', () => {
  const state = messageReducer('', reply('Hello from Jest.'))
  expect(state).toMatchSnapshot()
})
