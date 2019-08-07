import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { failureGetUserTimeline, successGetUserTimeline } from './actions';
import { Types } from './reducer';

function* getUserTimeline({ payload }) {
  try {
    const response = yield call(api.get, '/statuses/user_timeline.json', {
      params: {
        user_id: payload,
        count: 50,
      },
    });
    yield put(successGetUserTimeline(response.data));
  } catch (error) {
    // console.tron.log(error.message);
    yield put(failureGetUserTimeline());
  }
}

export default all([
  takeLatest(Types.REQUEST_GET_USER_TIMELINE, getUserTimeline),
]);
