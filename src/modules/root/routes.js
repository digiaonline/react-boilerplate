// @flow

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Hello from '../hello/Hello'

export default
  <Route path="/">
    <IndexRoute component={Hello}/>
  </Route>
