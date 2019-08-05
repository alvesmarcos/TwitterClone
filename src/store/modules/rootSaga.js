import { all } from 'redux-saga/effects';

import trendsSaga from './trends/sagas';

export default function* rootSaga() {
  return yield all([trendsSaga]);
}
