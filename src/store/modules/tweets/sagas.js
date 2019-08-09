import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { failureGetTweets, successGetTweets } from './actions';
import { Types } from './reducer';

function* getTweets({ payload }) {
  try {
    const response = yield call(api.get, '/search/tweets.json', {
      params: {
        q: payload,
        count: 15,
        include_entities: false,
      },
    });
    const { statuses } = response.data;
    yield put(successGetTweets(statuses));
  } catch (error) {
    // console.tron.log(error.message);
    yield put(failureGetTweets());
  }
}

export default all([takeLatest(Types.REQUEST_GET_TWEETS, getTweets)]);
