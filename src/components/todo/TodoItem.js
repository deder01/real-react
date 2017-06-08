import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = ({id, isComplete, name}) => (
  <li>
    <input 
      type="checkbox" 
      defaultChecked={isComplete} 
    /> 
      {name}
  </li>
)

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
}
