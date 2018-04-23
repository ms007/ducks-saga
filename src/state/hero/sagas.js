import { put, call, takeLatest } from 'redux-saga/effects';
import get from 'lodash/fp/get';

import { heroService } from 'services';
import actions from './actions';

function* fetchHero() {
  try {
    yield put(actions.loadingHero(true));
    const { code, data } = yield call(heroService.get, 'hulk');
    const hero = get('results[0]', data);
    if (code === 200) {
      yield put(actions.addHero(hero));
    }
  } catch (e) {
    console.log(e);
  } finally {
    yield put(actions.loadingHero(false));
  }
}

function* watchFetchHero() {
  yield takeLatest(actions.fetchHero, fetchHero);
}

export default {
  watchFetchHero
};
