import {put} from 'redux-saga/effects'
import {reply} from './actions'
import {sayHelloSaga} from './saga'

test('Say hello saga', () => {
  const generator = sayHelloSaga()
  expect(generator.next().value).toEqual(
    put(reply('Hello from Redux.'))
  )
})
