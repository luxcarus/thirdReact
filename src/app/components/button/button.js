import React from 'react'
// import PropTypes from 'prop-types';
export default class Button extends React.Component {
  render () {
    return (
      <div> 
        <button className={this.props.class} onClick={this.props.onClick}>{this.props.value||'button'}</button>
      </div>
    )
  }
}
