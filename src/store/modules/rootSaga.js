import { all } from 'redux-saga/effects';

import trendsSaga from './trends/sagas';
import tweetsSaga from './tweets/sagas';

export default function* rootSaga() {
  return yield all([trendsSaga, tweetsSaga]);
}
