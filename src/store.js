import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'state';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStore = (initialState = {}) => {
  const middleware = [];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  return createStore(rootReducer, initialState, enhancer);
};

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
