import * as React from 'react'
import { observer } from 'mobx-react'
import helloStore from '../store'
import * as css from './Hello.css'

@observer
export class Hello extends React.Component {
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
