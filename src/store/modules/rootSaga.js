import { all } from 'redux-saga/effects';

import trendsSaga from './trends/sagas';
import tweetsSaga from './tweets/sagas';
import userSaga from './user/sagas';

export default function* rootSaga() {
  return yield all([trendsSaga, tweetsSaga, userSaga]);
}
