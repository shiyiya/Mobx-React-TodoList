import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import './todoaction.css'

@inject('AppStore')
@observer
export default class TodoItem extends Component {
  render() {
    const store = this.props.AppStore
    return (
      <div className="todo-action">
        <ul>
          <li>
            Todo
            {store.listCount}
          </li>
          <li>
            Done
            {store.doneCount}
          </li>
          <li>
            undo
            {store.todoCount}
          </li>
        </ul>
        <input
          type="text"
          placeholder="what do you want to do?"
          onChange={e => {
            e.persist()
            return (store.newTodoText = e.target.value)
          }}
        />
        <button onClick={store.newTodo}>new Todo</button>
        <button onClick={store.delSelectTodo}>del selected</button>
      </div>
    )
  }
}
