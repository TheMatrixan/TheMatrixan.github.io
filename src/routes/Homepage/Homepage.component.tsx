import React from 'react';
import { FormattedMessage } from 'react-intl';

import ButtonLink from 'components/ButtonLink';

import styles from './Homepage.module.scss';

const Homepage: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className={styles['hero']}>
          <span className={styles['introduction']}>
            <FormattedMessage id="homepage.introduction" />
          </span>
          <h1 className={styles['fullname']}>
            <FormattedMessage id="fullname" />
          </h1>
          <span className={styles['description']}>
            <FormattedMessage id="homepage.description" />
          </span>
          <ButtonLink href="/resume" title="homepage.btn" className={styles['btn']} />
        </div>
        <div className="hexagons hero-hexagons"></div>
      </div>
    </section>
  );
};

export default Homepage;
