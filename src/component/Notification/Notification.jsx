import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('AppStore')
@observer
export default class Notification extends Component {
  render() {
    return <div className="notification" />
  }
}
