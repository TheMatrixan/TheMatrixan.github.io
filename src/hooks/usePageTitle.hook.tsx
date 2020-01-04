import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

export default (title: string): [string] => {
  const [formattedTitle, setFormattedTitle] = useState<string>(title);
  const { formatMessage } = useIntl();

  useEffect(() => {
    setFormattedTitle(formatMessage({ id: title }));
  }, [title, formatMessage]);

  useEffect(() => {
    document.title = `${formattedTitle} - Mateusz Lesiak`;
    return (): void => {
      document.title = 'Mateusz Lesiak';
    };
  }, [formattedTitle]);

  return [formattedTitle];
};
