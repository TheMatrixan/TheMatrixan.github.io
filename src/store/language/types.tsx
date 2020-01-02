import { Languages } from 'languages';

export enum LanguageActions {
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
}

export type Language = Languages;

export interface LanguageState {
  language: Language;
}
