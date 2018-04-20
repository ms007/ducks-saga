import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import types from './types';

function* incrementAsync() {
  console.log('asy');
  yield delay(1000);
  yield put({ type: types.INCREMENT });
}

function* watchIncrementAsync() {
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync);
}

export default {
  watchIncrementAsync
};
