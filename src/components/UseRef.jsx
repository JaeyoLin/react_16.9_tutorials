import React, {
  useRef,
  forwardRef,
} from 'react';

let MyInput = (props, ref) => {
  return (
    <input ref={ref} {...props} />
  );
}

MyInput = forwardRef(MyInput);

const UseRef = () => {
  const myInputRef = useRef();

  const handleFocus = () => {
    myInputRef.current.focus();
  }

  const handleClear = () => {
    myInputRef.current.value = '';
  }

  return (
    <>
      <button onClick={handleFocus}>Focus input</button>
      <button onClick={handleClear}>Cleat input</button>
      <MyInput defaultValue="Hello World" ref={myInputRef} />
    </>
  );
}

export default UseRef;
