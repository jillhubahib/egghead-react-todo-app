import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(todo => <TodoItem key={todo.id} handleToggle={props.handleToggle} {...todo}
        handleRemove={props.handleRemove}/> )}
    </ul>
  )
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
}
