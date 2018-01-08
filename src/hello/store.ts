import {observable, action} from 'mobx'

class HelloStore {
  @observable message = 'Hello.'

  @action
  sayHello = () => {
    this.message = 'Hello from MobX!'
  }
}

export default new HelloStore()
