import { observable, action, computed } from 'mobx'

export default class AppStore {
  @observable
  todoList = [
    /* { isDo: false, text: 'default todo1.', _key: 0 },
    { isDo: true, text: 'default todo2.', _key: 1 } */
  ]
  @observable
  newTodoText = ''
  @observable
  _key = 1
  @observable
  selectedTodo = []

  @computed
  get listCount() {
    return this.todoList.length
  }
  @computed
  get doneCount() {
    return this.todoList.filter(v => v.isDo === true).length
  }
  @computed
  get todoCount() {
    return this.listCount - this.doneCount
  }

  @action
  newTodo = () => {
    this._key = this._key + 1
    if (!this.newTodoText) {
      console.log('write some')
      return
    }
    this.todoList.push({
      _key: this._key + 1,
      text: this.newTodoText
    })
    this.newTodoText = ''
  }

  @action
  toggleIsDo(key) {
    this.todoList = this.todoList.map(item => {
      if (item._key === key) item.isDo = !item.isDo
      return item
    })
  }

  @action
  selectTodo(key) {
    this.selectedTodo.push(key)
  }

  @action
  delCol(key) {
    this.delTodoList([key])
  }

  @action
  delSelectTodo = () => {
    this.delTodoList(this.selectedTodo)
  }

  @action
  delTodoList(key) {
    this.todoList = this.todoList.filter(item => !key.includes(item._key))
    this.selectedTodo = []
  }
}
