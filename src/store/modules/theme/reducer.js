import produce from 'immer';

import { colors } from '~/styles';

export const Types = {
  SET_THEME_COLOR: '@theme/SET_THEME_COLOR',
};

const INITIAL_STATE = {
  mode: colors.dark,
};

export default function themeReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_THEME_COLOR: {
        draft.mode = action.payload;
        break;
      }
      default:
    }
  });
}
