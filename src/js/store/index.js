import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers'
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(browserHistory))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}
