import React, { useReducer, useEffect, createContext, Dispatch } from 'react';
import { IntlProvider } from 'react-intl';

import { messages, defaultLanguage } from 'languages';
import { languageReducer, initialState } from 'store/language/reducer';
import { LanguageState } from 'store/language/types';
import { Action } from 'store/types';

interface LanguageContextDefault {
  state: LanguageState;
  dispatch: Dispatch<Action<LanguageState>>;
}

export const LanguageContext = createContext({} as LanguageContextDefault);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }: LanguageProviderProps) => {
  const [{ language }, dispatch] = useReducer(languageReducer, initialState);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ state: { language }, dispatch }}>
      <IntlProvider locale={language} messages={messages[language]} defaultLocale={defaultLanguage}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
