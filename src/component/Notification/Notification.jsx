import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { inject, observer } from 'mobx-react'
import './notification.css'

/**
 * 实现一个简单的 小提示 组建
 */
@inject('AppStore')
@observer
export default class Notification extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      duration: 2,
      notices: []
    }
    const doc = window.document
    this.node = doc.createElement('div')
    this.node.className = 'notification'
    doc.body.appendChild(this.node)
  }

  static defaultProps = {
    animation: 'fade',
    style: {
      top: 24,
      right: 24
    }
  }

  componentDidMount() {
    this.startCloseTimer()
  }

  startCloseTimer = () => {
    this.closeTimer = setTimeout(() => {
      this.close()
    }, this.state.duration * 1000)
  }

  close = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer)
      this.closeTimer = null
    }
  }

  render() {
    return createPortal(
      <React.Fragment>
        11
        {this.props.children}
      </React.Fragment>,
      this.node
    )
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node)
  }
}
