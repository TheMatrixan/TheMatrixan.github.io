import messagesPL from './pl.language';
import messagesEN from './en.language';

enum Languages {
  English = 'en',
  Polish = 'pl',
}

const messages = {
  [Languages.Polish]: messagesPL,
  [Languages.English]: messagesEN,
};

const defaultLanguage = Languages.Polish;

export { messages, Languages, defaultLanguage };
