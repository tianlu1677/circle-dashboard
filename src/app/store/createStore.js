import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers';

const loggerMiddleware = createLogger();

const composeEnhancers = composeWithDevTools({
  
});

const configureStore = (preloadedState) => {
  return createStore(
    rootReducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, loggerMiddleware)  
    )
  )
}

export default configureStore;