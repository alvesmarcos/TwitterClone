import { Types } from './reducer';

export function setLightTheme(isLight) {
  return { type: Types.CHANGE_THEME_MODE, payload: isLight };
}
