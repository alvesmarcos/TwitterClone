import produce from 'immer';

export const Types = {
  SET_USER_DATA: '@user/SET_USER_DATA',
  REQUEST_GET_USER_TIMELINE: '@user/REQUEST_GET_USER_TIMELINE',
  FAILURE_GET_USER_TIMELINE: '@user/FAILURE_GET_USER_TIMELINE',
  SUCCESS_GET_USER_TIMELINE: '@user/SUCCESS_GET_USER_TIMELINE',
};

const INITIAL_STATE = {
  data: null,
  timeline: [],
  loading: false,
  error: false,
};

export default function userReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_USER_DATA: {
        draft.data = action.payload;
        draft.timeline = [];
        break;
      }
      case Types.REQUEST_GET_USER_TIMELINE: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case Types.SUCCESS_GET_USER_TIMELINE: {
        draft.timeline = action.payload;
        draft.loading = false;
        draft.error = false;
        break;
      }
      case Types.FAILURE_GET_USER_TIMELINE: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
