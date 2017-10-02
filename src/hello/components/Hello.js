// @flow

import React, {Component} from 'react'
import {observer} from 'mobx-react'
import css from './Hello.css'
import helloStore from '../store'

@observer
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
