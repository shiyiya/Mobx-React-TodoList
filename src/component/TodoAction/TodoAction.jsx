import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

//import Notification from '../Notification'
import './todoaction.css'

@inject('AppStore')
@observer
export default class TodoItem extends Component {
  render() {
    // /Notification.newInstance().alert('111')
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
        <form
          onSubmit={e => {
            e.preventDefault()
            store.newTodo()
          }}
        >
          <input
            type="text"
            placeholder="what do you want to do?"
            value={store.newTodoText}
            onChange={e => {
              e.persist()
              return (store.newTodoText = e.target.value)
            }}
          />
        </form>

        <button onClick={store.newTodo}>new Todo</button>
        <button onClick={store.delSelectTodo}>del selected</button>
      </div>
    )
  }
}
