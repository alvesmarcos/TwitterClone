import { Types } from './reducer';

export function setTheme(colors) {
  return { type: Types.SET_THEME_COLOR, payload: colors };
}
