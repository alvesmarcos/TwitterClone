import produce from 'immer';

export const Types = {
  REQUEST_GET_TRENDS: '@trends/REQUEST_GET_TRENDS',
  SUCCESS_GET_TRENDS: '@trends/SUCCESS_GET_TRENDS',
  FAILURE_GET_TRENDS: '@trends/FAILURE_GET_TRENDS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function trendsReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.REQUEST_GET_TRENDS: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case Types.SUCCESS_GET_TRENDS: {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
        break;
      }
      case Types.FAILURE_GET_TRENDS: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
