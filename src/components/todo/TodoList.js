import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem} from './TodoItem'

export const TodoList = ({todos, handleToggle}) => (
  <div className="Todo-list">
    <ul>
      {todos.map(todo => 
      <TodoItem 
        key={todo.id} 
        handleToggle={handleToggle}
        {...todo}
      />
      )}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
