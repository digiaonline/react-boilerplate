// @flow

import {createElement} from 'react'
import {render} from 'react-dom'

import type {RootProps} from './Root'

export default (component: any, props: RootProps) =>
  render(
    createElement(component, props),
    document.getElementById('root')
  )
