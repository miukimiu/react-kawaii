[![Circle CI](https://circleci.com/gh/arnaudbenard/redux-mock-store/tree/master.svg?style=svg)](https://circleci.com/gh/arnaudbenard/redux-mock-store/tree/master)

![npm](https://nodei.co/npm/redux-mock-store.png?downloads=true&downloadRank=true&stars=true)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# redux-mock-store

A mock store for testing your redux async action creators and middleware. The mock store will store the dispatched actions in an array to be used in your tests.

## Old version documentation (`< 1.x.x`)

https://github.com/arnaudbenard/redux-mock-store/blob/v0.0.6/README.md

## Install

```
npm install redux-mock-store --save-dev
```

## How to use

```js

// actions.test.js

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

// Test example with mocha and expect
it('should dispatch action', () => {
  const initialState = {}
  const addTodo = { type: 'ADD_TODO' }

  const store = mockStore(initialState)
  store.dispatch(addTodo)

  const actions = store.getActions()

  expect(actions).toEqual([addTodo])
});

// Promise test example with mocha and expect
it('should execute promise', () => {
    function success() {
      return {
        type: 'FETCH_DATA_SUCCESS'
      }
    }

    function fetchData () {
      return dispatch => {
        return fetch('/users.json') // Some async action with promise
          .then(() => dispatch(success()))
      };
    }

    const store = mockStore({})

    // Return the promise
    return store.dispatch(fetchData())
      .then(() => {
        expect(store.getActions()[0]).toEqual(success())
      })
})
```

## API

```
- configureStore(middlewares?: Array) => mockStore: Function
- mockStore(getState?: Object,Function) => store: Function
- store.dispatch(action) => action
- store.getState() => state: Object
- store.getActions() => actions: Array
- store.clearActions()
- store.subscribe(callback: Function) => unsubscribe: Function
- store.replaceReducer(nextReducer: Function)
```

## License

MIT
