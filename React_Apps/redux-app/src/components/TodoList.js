// components/TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todoActions';

const TodoList = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  };
};

export default connect(mapStateToProps)(TodoList);
