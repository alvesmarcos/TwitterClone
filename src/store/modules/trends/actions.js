import { Types } from './reducer';

export function reqGetTrends() {
  return { type: Types.REQUEST_GET_TRENDS };
}

export function successGetTrends(data) {
  return { type: Types.SUCCESS_GET_TRENDS, payload: data };
}

export function failureGetTrends() {
  return { type: Types.FAILURE_GET_TRENDS };
}
