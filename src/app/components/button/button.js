import React from 'react'
import './button.css'
export default class Button extends React.Component {
  render () {
    return (
      <div> 
        <button className={this.props.class||'tt-button'} onClick={this.props.onClick}>{this.props.value||'button'}</button>
      </div>
    )
  }
}
