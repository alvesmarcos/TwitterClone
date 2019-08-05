import { combineReducers } from 'redux';

import trendsReducer from './trends/reducer';
import tweetsReducer from './tweets/reducer';

export default combineReducers({
  trendsReducer,
  tweetsReducer,
});
