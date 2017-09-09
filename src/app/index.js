import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router'

import { createStore } from 'redux'
import { Provider  } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import signinR from 'reducers/signin'
// import registerServiceWorker from './registerServiceWorker';

import App from './App'
import Home from 'containers/home'
import Signin from 'containers/signin'

const history = createBrowserHistory()
const store = createStore(signinR);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact name="app" path='/' component={App}/>
          <Route exact name="home" path='/home' component={Home}/>
          <Route path='/signin' component={Signin}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
store.subscribe(render)
render()
// registerServiceWorker();
