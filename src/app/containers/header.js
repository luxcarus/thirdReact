import React from 'react'
export default class Header extends React.Component {
  render() {
    return (
      // <div className="header">
      <div className={this.props.class || 'header'}>
        <div>
          THIS IS HEADER
        </div>
      </div>
    )
  }
}