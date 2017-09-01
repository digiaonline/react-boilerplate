// @flow

import {observable, action} from 'mobx'

class HelloStore {
  @observable message: string = 'Hello.'

  @action
  sayHello = () => {
    this.message = 'Hello from MobX!'
  }
}

export default new HelloStore()
