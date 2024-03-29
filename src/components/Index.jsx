import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <ul>
        <li><Link to="/useState">useState</Link></li>
        <li><Link to="/useEffect">useEffect</Link></li>
        <li><Link to="/useLayoutEffect">useLayoutEffect</Link></li>
        <li><Link to="/useLayoutEffect2">useLayoutEffect2</Link></li>
        <li><Link to="/useMemo">useMemo</Link></li>
        <li><Link to="/useCallback">useCallback</Link></li>
        <li><Link to="/useRef">useRef</Link></li>
        <li><Link to="/useImperativeHandle">useImperativeHandle</Link></li>
        <li><Link to="/useContext">useContext</Link></li>
        <li><Link to="/useReducer">useReducer</Link></li>
        <li><Link to="/globalStateManager">globalStateManager</Link></li>
      </ul>
    </div>
  )
}

export default Index;
