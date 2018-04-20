import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from 'state/reducers';
import startSagas from 'state/sagas';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const rootReducer = combineReducers(reducers);
  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();
sagaMiddleware.run(startSagas);

// export store singleton instance
export default store;
