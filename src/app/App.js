import React from 'react'
import PropTypes from 'prop-types';
import {Button} from 'components/button'
export default class App extends React.Component {
  constructor () {
    super()
    this.states = {}
    this.signIn = this.signIn.bind(this)
  }
  signIn () {
    this.context.router.history.push("signin");
  }
  render () {
    return (
      <div>
        <div className = "app">
          This is App
        </div>
        <Button value="sign in" onClick={this.signIn}></Button>
      </div>
    )
  }
}
App.contextTypes = {
  router: PropTypes.object.isRequired
}
