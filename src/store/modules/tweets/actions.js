import { Types } from './reducer';

export function reqGetTweets(topic) {
  return { type: Types.REQUEST_GET_TWEETS, payload: topic };
}

export function successGetTweets(data) {
  return { type: Types.SUCCESS_GET_TWEETS, payload: data };
}

export function failureGetTweets() {
  return { type: Types.FAILURE_GET_TWEETS };
}

export function setTweetTopic(topic) {
  return { type: Types.SET_TWEET_TOPIC, payload: topic };
}
