import React, { Component } from 'react'

export default class Notice extends Component {
  render() {
    const { _key, top } = this.props
    return (
      <div style={{ top: top + 40 * _key }} className="notification">
        {this.props.children}
        {_key}
      </div>
    )
  }
}
