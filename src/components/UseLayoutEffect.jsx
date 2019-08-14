import React, {
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';

const UseLayoutEffect = () => {
  const [lapse, setLapse] = useState(0)
  const [running, setRunning] = useState(false)

  useLayoutEffect(
    () => {
      if (running) {
        const startTime = Date.now() - lapse
        const intervalId = setInterval(() => {
          setLapse(Date.now() - startTime)
        }, 2)
        console.log(intervalId)
        return () => clearInterval(intervalId)
      }
    },
    [running],
  )

  function handleRunClick() {
    setRunning(r => !r)
  }

  function handleClearClick() {
    setRunning(false)
    setLapse(0)
  }

  return (
    <div>
      <label>{lapse}ms</label>
      <button onClick={handleRunClick}>
        {running ? 'End' : 'Start'}
      </button>
      <button onClick={handleClearClick}>
        Stop and clean
      </button>
    </div>
  )
}

export default UseLayoutEffect;
