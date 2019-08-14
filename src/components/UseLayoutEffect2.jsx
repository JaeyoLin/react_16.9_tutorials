import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';

import '../index.css';

const UseLayoutEffect2 = () => {
  const [name, setName] = useState('');
  const inputGroupRef = useRef();
  const inputRef = useRef();

  useLayoutEffect(() => {
    const { current } = inputRef;

    const handleFocus = () => {
      inputGroupRef.current.classList.add("active");
    };
    const handleBlur = () => {
      inputGroupRef.current.classList.remove("active");
    };

    current.addEventListener('focus', handleFocus);
    current.addEventListener('blur', handleBlur);

    return () => {
      current.removeEventListener('focus', handleFocus);
      current.removeEventListener('blur', handleBlur);
    }
  }, []);

  return (
    <div className="container">
      <div ref={inputGroupRef} className="inputGroup">
        <label className="label">{ (name === '') ? 'Your Name' : '' }</label>
        <input className="input" ref={inputRef} onChange={(e) => setName(e.target.value)} />
        <div className="border" />
      </div>
    </div>
  )
}

export default UseLayoutEffect2;
