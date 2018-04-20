import { put, takeLatest } from 'redux-saga/effects';
import get from 'lodash/fp/get';

import { heroService } from 'services';
import types from './types';
import actions from './actions';

function* fetchHero() {
  try {
    yield put(actions.loadingHero(true));
    const { code, data } = yield heroService.get('hulk');
    const hero = get('results[0]', data);
    if (code === 200) {
      yield put(actions.addHero(hero));
    }
  } catch (e) {
    console.log(e);
  }
  yield put(actions.loadingHero(false));
}

function* watchFetchHero() {
  yield takeLatest(types.FETCH_HERO, fetchHero);
}

export default {
  watchFetchHero
};
