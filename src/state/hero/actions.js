import { createAction } from 'redux-actions';
import types from './types';

const addHero = createAction(types.ADD_HERO);
const fetchHero = createAction(types.FETCH_HERO);
const loadingHero = createAction(types.LOADING_HERO);

export default {
  addHero,
  fetchHero,
  loadingHero
};
