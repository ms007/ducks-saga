import { createAction } from 'redux-actions';
import types from './types';

const increment = createAction(types.INCREMENT);
const incrementAsync = createAction(types.INCREMENT_ASYNC);
const decrement = createAction(types.DECREMENT);

export default {
  increment,
  incrementAsync,
  decrement
};
