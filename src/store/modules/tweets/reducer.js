import produce from 'immer';

export const Types = {
  REQUEST_GET_TWEETS: '@tweets/REQUEST_GET_TWEETS',
  SUCCESS_GET_TWEETS: '@tweets/SUCCESS_GET_TWEETS',
  FAILURE_GET_TWEETS: '@tweets/FAILURE_GET_TWEETS',
  SET_TWEET_TOPIC: '@tweets/SET_TWEET_TOPIC',
};

const INITIAL_STATE = {
  data: [],
  topic: '',
  loading: false,
  error: false,
};

export default function tweetsReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.REQUEST_GET_TWEETS: {
        draft.topic = action.payload;
        draft.loading = true;
        draft.error = false;
        break;
      }
      case Types.SUCCESS_GET_TWEETS: {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
        break;
      }
      case Types.FAILURE_GET_TWEETS: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      case Types.SET_TWEET_TOPIC: {
        draft.topic = action.payload;
        draft.data = [];
        break;
      }
      default:
    }
  });
}
