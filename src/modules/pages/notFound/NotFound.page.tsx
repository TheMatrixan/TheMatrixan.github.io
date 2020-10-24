import ButtonLink from '@components/buttonLink/ButtonLink.component';
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './NotFound.module.scss';

const NotFound: React.FC = memo(() => (
  <section>
    <div className="container">
      <div className={styles['intro']}>
        <h1 className={styles['title']}>
          <FormattedMessage id="notFound.title" />
        </h1>
        <ButtonLink href="./" title="notFound.btn" />
      </div>
    </div>
  </section>
));

export default NotFound;
