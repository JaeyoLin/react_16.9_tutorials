import React, {
  useState,
  useCallback,
  useRef,
} from 'react';

// import './styles.css';

const Button = React.memo(({ handleClick, text }) => {
  const refCount = useRef(0);
  console.log('Button render');
  return (
    <button
      onClick={handleClick}
    >
      {`${text}`}
      <span className={"renderCount"}>
        self render count {refCount.current++}
      </span>
    </button>
  );
});

const AaronTest = () => {
  const [numA, setNumA] = useState(0);
  const handlePlusAClick = useCallback(
    () => setNumA(prevNumA => prevNumA + 1),
    []
  );
  const handleMinusAClick = useCallback(
    () => setNumA(prevNumA => prevNumA - 1),
    []
  );
  const [numB, setNumB] = useState(0);
  const handlePlusBClick = useCallback(
    () => setNumB(prevNumB => prevNumB + 1),
    []
  );
  const handleMinusBClick = useCallback(
    () => setNumB(prevNumB => prevNumB - 1),
    []
  );
  const [result, setResult] = useState(null);
  const handleAPlusB = useCallback(() => setResult(numA + numB), [numA, numB]);
  const handleAMinusB = useCallback(() => setResult(numA - numB), [numA, numB]);

  return (
    <div className="App">
      <div className="num">NumA: {numA}</div>
      <Button text={"+"} handleClick={handlePlusAClick} />
      <Button text={"-"} handleClick={handleMinusAClick} />
      <div className="num">NumB: {numB}</div>
      <Button text={"+"} handleClick={handlePlusBClick} />
      <Button text={"-"} handleClick={handleMinusBClick} />
      <div className="num">Result: {result}</div>
      <Button text={"A + B"} handleClick={handleAPlusB} />
      <Button text={"A - B"} handleClick={handleAMinusB} />
    </div>
  );
}

export default AaronTest;
