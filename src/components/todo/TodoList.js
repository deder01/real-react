import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem} from './TodoItem'

export const TodoList = ({todos}) => (
  <div className="Todo-list">
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
