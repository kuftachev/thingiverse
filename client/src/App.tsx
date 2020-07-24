import React, {Fragment} from 'react'
import {Router} from '@reach/router'

import Things from './pages/Things'
import Thing from './pages/Thing'
import Header from './components/Header'


export default function App() {
  return (
    <Fragment>
      <Header/>
      <Router component="main" className="container">
        <Things path="/"/>
        <Thing path="/:id"/>
      </Router>
    </Fragment>
  )
}

