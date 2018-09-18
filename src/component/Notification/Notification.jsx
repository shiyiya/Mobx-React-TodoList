import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Notice from './Notice'
import './notification.css'

class Notification extends Component {
  static defaultProps = {
    style: {
      top: 24,
      right: 24
    }
  }
  state = { msg: [] }
  render() {
    const msg = this.state.msg,
      style = this.props.style
    return msg.lenght < 1
      ? null
      : msg.map((item, i) => (
          <Notice key={i} _key={i} {...style}>
            {item}
          </Notice>
        ))
  }

  componentDidMount() {
    this.close()
  }

  add(msg) {
    this.setState(prevState => ({
      msg: prevState.msg.concat(msg)
    }))
    this.close()
  }

  close = () => {
    if (this.closeTimer) {
      return
    }
    this.closeTimer = setInterval(() => {
      if (this.state.msg.length < 1) {
        console.log('msg 0', this.closeTimer)
        clearInterval(this.closeTimer)
        this.closeTimer = null
        return
      }
      this.setState(prevState => {
        const state = prevState.msg
        state.shift()
        return { msg: state }
      })
    }, 2000)
  }
}

Notification.newInstance = function(msg) {
  const node = document.createElement('div')
  document.body.appendChild(node)
  const notification = ReactDOM.render(
    <Notification node={node} msg={msg} />,
    node
  )
  return {
    msg(msg) {
      notification.add(msg)
    }
  }
}

export default Notification
