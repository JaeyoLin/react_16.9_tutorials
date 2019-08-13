import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(10);
  }, []);

  useEffect(() => {
    console.log(`Listen Count: ${count}`);
  }, [count])

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

export default UseEffect;
