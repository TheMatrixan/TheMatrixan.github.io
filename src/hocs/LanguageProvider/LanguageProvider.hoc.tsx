import React from 'react';
import { IntlProvider } from 'react-intl';

import { messages, defaultLanguage } from '../../languages';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }: LanguageProviderProps) => {
  document.documentElement.lang = defaultLanguage;
  return (
    <IntlProvider locale={defaultLanguage} messages={messages.pl} defaultLocale={defaultLanguage}>
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
