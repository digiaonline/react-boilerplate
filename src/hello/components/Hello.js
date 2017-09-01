// @flow

import React, {Component} from 'react'
import css from './Hello.css'
import helloStore from '../store'

export class Hello extends Component {
  componentWillMount() {
    helloStore.sayHello()
  }

  render() {
    return (
      <div className={css.component}>
        <h1 className={css.title}>{helloStore.message}</h1>
      </div>
    )
  }
}

export default Hello
