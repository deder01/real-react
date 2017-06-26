import React from 'react'
import PropTypes from 'prop-types'
import {partial, pipe} from '../../lib/utils'

export const TodoItem = ({id, isComplete, handleToggle, name}) => {
  const toggleHandler = partial(handleToggle, id)
  return (
    <li>
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
