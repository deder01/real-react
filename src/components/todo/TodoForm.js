import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = ({currentTodo, handleInputChange}) => (
  <form>
    <input type="text"
      onChange={handleInputChange} 
      value={currentTodo} 
    />
  </form>
)

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}
