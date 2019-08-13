import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <p>{ `Conut: ${count}` }</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default UseState;
