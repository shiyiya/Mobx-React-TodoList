import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import TodoList from '../../component/TodoList/'
import TodoAction from '../../component/TodoAction'

import './todo.css'

@inject(['AppStore'])
@observer
export default class Todo extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    const { todoList } = this.props.AppStore
    return (
      <div className="todo">
        <TodoAction />
        <TodoList data={todoList} />
      </div>
    )
  }
}
