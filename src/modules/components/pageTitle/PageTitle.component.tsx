import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './PageTitle.module.scss';

interface IProps {
  title: string;
}

const PageTitle: React.FC<IProps> = memo(({ title }: IProps) => (
  <div className={styles['wrapper']}>
    <h1 className={styles['title']}>
      <FormattedMessage id={title} />
    </h1>
    <span className={styles['border']} />
  </div>
));

export default PageTitle;
