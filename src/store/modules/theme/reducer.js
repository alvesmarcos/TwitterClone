import produce from 'immer';

import { colors } from '~/styles';

export const Types = {
  CHANGE_THEME_MODE: '@theme/CHANGE_THEME_MODE',
};

const INITIAL_STATE = {
  mode: colors.light,
  isLight: true,
};

export default function themeReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.CHANGE_THEME_MODE: {
        draft.isLight = action.payload;
        draft.mode = action.payload ? colors.light : colors.dark;
        break;
      }
      default:
    }
  });
}
