import React from 'react'
import PropTypes from 'prop-types';

TodoCompleteAllTodos.propTypes = {
  completeAllTodos: PropTypes.func.isRequired,
}

function TodoCompleteAllTodos(props) {
  return (
    <div onClick={props.completeAllTodos} className='button'>check all</div>
  )
}

export default TodoCompleteAllTodos