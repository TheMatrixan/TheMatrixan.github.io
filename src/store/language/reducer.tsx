import { Reducer } from 'react';

import { Action } from 'store/types';
import { LanguageState, LanguageActions } from './types';
import { userLanguage } from 'languages';

const initialState: LanguageState = {
  language: userLanguage(),
};

const reducer: Reducer<LanguageState, Action<LanguageState>> = (state, action) => {
  switch (action.type) {
    case LanguageActions.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };

    default:
      return state;
  }
};

export { reducer as languageReducer, initialState };
