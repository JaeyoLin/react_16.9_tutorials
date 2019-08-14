import React, { Fragment, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

export const WaitingComponent = Component => props => (
  <Suspense fallback={<div>Module loading....</div>}>
    <Component {...props} />
  </Suspense>
);

const Index = lazy(() => import('./components/Index'));
const UseState = lazy(() => import('./components/UseState'));
const UseEffect = lazy(() => import('./components/UseEffect'));
const UseLayoutEffect = lazy(() => import('./components/UseLayoutEffect'));
const UseLayoutEffect2 = lazy(() => import('./components/UseLayoutEffect2'));
const UseMemo = lazy(() => import('./components/UseMomo'));
const UseCallback = lazy(() => import('./components/UseCallback'));
const UseRef = lazy(() => import('./components/UseRef'));
const UseImperativeHandle = lazy(() => import('./components/UseImperativeHandle'));
const UseContext = lazy(() => import('./components/UseContext'));
const UseReducer = lazy(() => import('./components/UseReducer'));
const GlobalStateManager = lazy(() => import('./components/GlobalStateManager/GlobalStateManager'));

const App = () => {
  return (
    <Fragment>
      <Route path="/" exact component={WaitingComponent(Index)} />
      <Route path="/useState" component={WaitingComponent(UseState)} />
      <Route path="/useEffect" component={WaitingComponent(UseEffect)} />
      <Route path="/useLayoutEffect" component={WaitingComponent(UseLayoutEffect)} />
      <Route path="/useLayoutEffect2" component={WaitingComponent(UseLayoutEffect2)} />
      <Route path="/useMemo" component={WaitingComponent(UseMemo)} />
      <Route path="/useCallback" component={WaitingComponent(UseCallback)} />
      <Route path="/useRef" component={WaitingComponent(UseRef)} />
      <Route path="/useImperativeHandle" component={WaitingComponent(UseImperativeHandle)} />
      <Route path="/useContext" component={WaitingComponent(UseContext)} />
      <Route path="/useReducer" component={WaitingComponent(UseReducer)} />
      <Route path="/globalStateManager" component={WaitingComponent(GlobalStateManager)} />
    </Fragment>
  );
}

export default App;
