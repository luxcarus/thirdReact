import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components'
import styles from 'components/button/button.css'
export default class App extends React.Component {
  constructor () {
    super()
    this.signIn = this.signIn.bind(this)
  }
  signIn () {
    this.context.router.history.push("signin");
  }
  render () {
    return (
      <div>
        {/* <div className = "app"> */}
        <div className = {styles.app}>
          This is App
        </div>
        <Button class="tt-button" value="sign in" onClick={this.signIn}></Button>
      </div>
    )
  }
}
App.contextTypes = {
  router: PropTypes.object.isRequired
}
