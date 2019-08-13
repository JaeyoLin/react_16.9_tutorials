import React, { useContext, Fragment } from 'react';

const ContextStore = React.createContext({
  todos: [],
});

const Application = () => (
  <ContextStore.Provider value={{ todos: ['Run', 'Walk'] }}>
    <Todos />
    <hr />
    <Todos2 />
  </ContextStore.Provider>
);

const Todos = () => {
  return (
    <ContextStore.Consumer>
      {
        value => {
          return (
            value.todos.map(todo => <div>{todo}</div>)
          );
        }
      }
    </ContextStore.Consumer>
  );
}

const Todos2 = () => {
  const value = useContext(ContextStore);

  return (
    <Fragment>
    {
      value.todos.map(todo => <div>{todo}</div>)
    }
    </Fragment>
  );
}

const UseContext = () => {
  return (
    <div>
      <Application />
    </div>
  );
}

export default UseContext;
