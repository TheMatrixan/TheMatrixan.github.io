import ButtonLink from '@components/buttonLink/ButtonLink.component';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Home.module.scss';

const Homepage: React.FC = () => (
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
          <FormattedMessage id="description" />
        </span>
        <ButtonLink href="./resume" title="homepage.btn" className={styles['btn']} />
      </div>
      <div className="hexagons hero-hexagons" />
    </div>
  </section>
);

export default Homepage;
