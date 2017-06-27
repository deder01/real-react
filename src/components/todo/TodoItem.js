import React from 'react'
import PropTypes from 'prop-types'
import {partial, pipe} from '../../lib/utils'

export const TodoItem = ({id, isComplete, handleToggle, handleRemove, name}) => {
  const toggleHandler = partial(handleToggle, id)
  const removeHandler = partial(handleRemove, id)
  return (
    <li>
      <span className='delete-item'><a  
        href="#" 
        onClick={removeHandler}>
        x
      </a></span>
      <input 
        type="checkbox" 
        onChange={toggleHandler}
        checked={isComplete}
      /> 
        {name}
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
  name: PropTypes.string.isRequired,
}
