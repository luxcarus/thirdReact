import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Switch} from 'react-router'

import { createStore } from 'redux'
import { Provider  } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import loginReducers from './store/reducers/loginReducer'
// import registerServiceWorker from './registerServiceWorker';

import App from './App'
import Home from './containers/home'
import Login from './containers/login'


const history = createBrowserHistory()
const store = createStore(loginReducers);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
store.subscribe(render)
render()
// registerServiceWorker();
