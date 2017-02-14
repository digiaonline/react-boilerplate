// @flow

import React, {createElement} from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import type {RootProps} from './Root'

export default (component: any, props: RootProps) =>
  render(
    <AppContainer>
      {createElement(component, props)}
    </AppContainer>,
    document.getElementById('root')
  )
