import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = ({currentTodo, handleInputChange, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <input type="text"
      onChange={handleInputChange} 
      value={currentTodo} 
    />
  </form>
)

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
