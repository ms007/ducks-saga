import { all, fork } from 'redux-saga/effects';
import map from 'lodash/fp/map';

import { counterSagas } from './counter';

const sagas = {
  ...counterSagas
};

export default function* startSagas() {
  yield all(map(fork, sagas));
}
