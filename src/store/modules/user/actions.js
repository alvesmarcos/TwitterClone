import { Types } from './reducer';

export function reqGetUserTimeline(userId) {
  return { type: Types.REQUEST_GET_USER_TIMELINE, payload: userId };
}

export function successGetUserTimeline(timeline) {
  return { type: Types.SUCCESS_GET_USER_TIMELINE, payload: timeline };
}

export function failureGetUserTimeline() {
  return { type: Types.FAILURE_GET_USER_TIMELINE };
}

export function setUserData(user) {
  return { type: Types.SET_USER_DATA, payload: user };
}
