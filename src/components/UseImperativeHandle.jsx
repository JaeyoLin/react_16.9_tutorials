import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

let MyInput = (props, ref) => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      select(text) {
        console.log('select', text);
        inputRef.current.value = text;
      },
      updateCount(number) {
        setCount(number);
      },
    }
  });
  return (
    <div>
      <input ref={inputRef} {...props} />
      <span>{`Count: ${count}`}</span>
    </div>
  );
}

MyInput = forwardRef(MyInput);

const UseImperativeHandle = () => {
  const myInputRef = useRef();

  const handleFocus = () => {
    myInputRef.current.focus();
  }

  const handleClear = () => {
    myInputRef.current.select('Yes, I do.');
  }

  const handleChangeCount = () => {
    myInputRef.current.updateCount(Math.floor(Math.random()*10));
  }

  return (
    <>
      <button onClick={handleFocus}>Focus input</button>
      <button onClick={handleChangeCount}>Random count</button>
      <button onClick={handleClear}>Cleat input</button>
      <MyInput defaultValue="Hello World" ref={myInputRef} />
    </>
  );
}

export default UseImperativeHandle;
