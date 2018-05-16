import * as React from 'react'
import { observer } from 'mobx-react'
import helloStore from '../store'
import * as css from './Hello.css'

type Props = {}
type State = {}

@observer
export class Hello extends React.Component<Props, State> {
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
