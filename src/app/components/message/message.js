import React from 'react'
import PropTypes from 'prop-types';
export default class Message extends React.Component {
  render () {
    return (
      <div className="tt-message">
        <div className={this.props.type}>
          {this.props.message}
        </div>
      </div>
    )
  }
}
