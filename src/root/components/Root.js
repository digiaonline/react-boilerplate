// @flow

import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Hello from '../../hello/components/Hello'
import css from './Root.css'

const Root = () => (
  <div className={css.component}>
    <Router>
      <div className={css.routes}>
        <Route exact path="/" component={Hello} />
      </div>
    </Router>
  </div>
)

export default Root
