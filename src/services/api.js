import axios from 'axios';

const BASE_API_URL = 'https://api.twitter.com/1.1';
const TOKEN =
  'AAAAAAAAAAAAAAAAAAAAAOOH%2FQAAAAAAn3KJFdxEWREM4s8GJoXGIVFqNsU%3DKOxSICk8vFJXLMoMh2VqoHA3W6chcKRRTcfx1Dhf1MkeBfgRcY';

const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
  timeout: 20000,
});

export default api;
