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
const UseMemo = lazy(() => import('./components/UseMomo'));
const AaronTest = lazy(() => import('./components/AaronTest'));
const UseContext = lazy(() => import('./components/UseContext'));

const App = () => {
  return (
    <Fragment>
      <Route path="/" exact component={WaitingComponent(Index)} />
      <Route path="/useState" component={WaitingComponent(UseState)} />
      <Route path="/useEffect" component={WaitingComponent(UseEffect)} />
      <Route path="/useMemo" component={WaitingComponent(UseMemo)} />
      <Route path="/11" component={WaitingComponent(AaronTest)} />
      <Route path="/useContext" component={WaitingComponent(UseContext)} />
    </Fragment>
  );
}

export default App;
