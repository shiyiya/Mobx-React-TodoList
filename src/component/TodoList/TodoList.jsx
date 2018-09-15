import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import './todolist.css'

@inject('AppStore')
@observer
export default class TodoItem extends Component {
  render() {
    const store = this.props.AppStore
    const { data } = this.props
    return (
      <div className="todo-list">
        <ul>
          {data.slice().length < 1 ? (
            <p style={{ textAlign: 'center' }}>No data.</p>
          ) : (
            data.map((item, key) => {
              return (
                <label htmlFor={item._key} key={item._key}>
                  <li>
                    <input
                      type="checkbox"
                      id={item._key}
                      onChange={() => store.selectTodo(item._key)}
                    />
                    <span>{item.text}</span>
                    <div className="single-todo-action">
                      <button
                        className={item.isDo ? 'done' : 'undo'}
                        onClick={() => store.toggleIsDo(item._key)}
                      >
                        {item.isDo ? 'done' : 'undo'}
                      </button>
                      <button
                        className="del-btn"
                        onClick={() => store.delCol(item._key)}
                      >
                        delete
                      </button>
                    </div>
                  </li>
                </label>
              )
            })
          )}
        </ul>
      </div>
    )
  }
}
