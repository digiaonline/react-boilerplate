import {sayHello, reply} from './actions'

test('Say hello action matches snapshot', () => {
  const action = sayHello('Hello Jest!')
  expect(action).toMatchSnapshot()
})

test('Reply action matches snapshot', () => {
  const action = reply('What\'s up?')
  expect(action).toMatchSnapshot()
})
