import { createAction } from 'redux-actions';
import types from './types';

const increment = createAction(types.INCREMENT);
const decrement = createAction(types.DECREMENT);

export default {
  increment,
  decrement
};
