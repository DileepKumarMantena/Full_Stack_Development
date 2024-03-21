// components/AddTodo.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo({
      id: Date.now(),
      text
    }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect()(AddTodo);
