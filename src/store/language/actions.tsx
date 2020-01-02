import { LanguageActions, Language, LanguageState } from './types';
import { Action } from 'store/types';

type ChangeLanguageParams = {
  language: Language;
};

const changeLanguage = ({ language }: ChangeLanguageParams): Action<LanguageState> => ({
  type: LanguageActions.CHANGE_LANGUAGE,
  payload: {
    language,
  },
});

export { changeLanguage };
