import { combineReducers } from 'redux';

import trendsReducer from './trends/reducer';
import tweetsReducer from './tweets/reducer';
import userReducer from './user/reducer';

export default combineReducers({
  trendsReducer,
  tweetsReducer,
  userReducer,
});
