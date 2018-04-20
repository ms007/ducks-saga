import { all, fork } from 'redux-saga/effects';
import map from 'lodash/fp/map';

import { heroSagas } from './hero';
import { counterSagas } from './counter';

const sagas = {
  ...heroSagas,
  ...counterSagas
};

export default function* startSagas() {
  yield all(map(fork, sagas));
}
