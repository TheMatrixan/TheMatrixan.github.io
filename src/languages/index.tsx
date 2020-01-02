import messagesPL from './pl.language';
import messagesEN from './en.language';

enum Languages {
  English = 'en',
  Polish = 'pl',
}

const LanguageCodes = Object.keys(Languages).map(key => Languages[key]);

const messages = {
  [Languages.Polish]: messagesPL,
  [Languages.English]: messagesEN,
};

const defaultLanguage = Languages.Polish;

const userLanguage = (): Languages => {
  const browserLang = window.navigator.language.split(/[-_]/)[0];
  if (LanguageCodes.includes(browserLang)) {
    return browserLang as Languages;
  }
  return defaultLanguage;
};

export { messages, Languages, userLanguage, defaultLanguage };
