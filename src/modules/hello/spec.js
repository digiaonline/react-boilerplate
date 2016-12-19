import {expect} from 'chai'
import {reply} from './actions'
import {messageReducer} from './reducer'

describe('Hello module', () => {

  describe('Reducer', () => {

    describe('messageReducer', () => {

      it('should update state on reply action', () => {
        const state = messageReducer('', reply('Hello from Mocha.'))
        expect(state).to.equal('Hello from Mocha.')
      })

    })

  })

})
