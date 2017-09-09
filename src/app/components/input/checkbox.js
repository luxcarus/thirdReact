import React from 'react'
import PropTypes from 'prop-types';
export default class Checkbox extends React.Component {
  render () {
    return (
      <div>
        <label htmlFor="remberMe">Remember me</label>
        <input type="checkbox" id="remberMe"></input>
      </div>
    )
  }
}
Checkbox.PropTypes = {
  onChange: PropTypes.func
}
