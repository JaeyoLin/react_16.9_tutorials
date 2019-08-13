import React, { useState, useMemo } from 'react';

const UseMomo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const compute = useMemo(() => {
    console.log('compute');
    return count * count;
  }, [count])

  const plus = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{`Count: ${count}`}</p>
      <p>{`Count Square: ${compute}`}</p>
      <button onClick={plus}>+</button>
      <p>{`Text: ${text}`}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default UseMomo;
