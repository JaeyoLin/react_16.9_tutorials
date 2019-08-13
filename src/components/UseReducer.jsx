import React, { useState, useReducer } from 'react';

const ACTION_TYPE = {
  'ADD_TODO': 'ADD_TODO',
  'REMOVE_TODO': 'REMOVE_TODO',
};

const initState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat('eat'),
      }
    case ACTION_TYPE.REMOVE_TODO:
        state.todos.splice(0, 1);
      return {
        ...state,
      }
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleAdd = () => {
    dispatch({ type: ACTION_TYPE.ADD_TODO });
  }

  const handleRemove = () => {
    dispatch({ type: ACTION_TYPE.REMOVE_TODO });
  }

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      {
        state.todos.map((todo, index) => <div>{`${index + 1}: ${todo}`}</div>)
      }
    </div>
  );
}

export default UseReducer;
