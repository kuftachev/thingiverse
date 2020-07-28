import React, {Fragment} from 'react'
import {Router} from '@reach/router'

import Things from './pages/Things'
import Thing from './pages/Thing'
import Header from './components/Header'
import Login from './components/Login'
import {isLogged} from './auth'


export default function App() {
  const main = <Router component="main" className="container">
    <Things path="/"/>
    <Thing path="/:id"/>
  </Router>
  const login = <div className="container"><Login/></div>

  return (
    <Fragment>
      <Header/>
      {isLogged ? main : login}
    </Fragment>
  )
}

