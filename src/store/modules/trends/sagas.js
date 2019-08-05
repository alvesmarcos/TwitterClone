import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { failureGetTrends, successGetTrends } from './actions';
import { Types } from './reducer';

function* getTrends() {
  try {
    const response = yield call(api.get, '/trends/place.json', {
      params: {
        id: '23424768',
      },
    });
    const { trends } = response.data[0];
    yield put(successGetTrends(trends));
  } catch (error) {
    // console.tron.log(error.message);
    yield put(failureGetTrends());
  }
}

export default all([takeLatest(Types.REQUEST_GET_TRENDS, getTrends)]);
