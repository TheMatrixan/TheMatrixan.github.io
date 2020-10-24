import ButtonLink from '@components/buttonLink/ButtonLink.component';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Portfolio.module.scss';

const Portfolio: React.FC = () => (
  <section>
    <div className="container">
      <div className={styles['temp']}>
        <h1>
          <FormattedMessage id="pageInBuilding" />
        </h1>
        <ButtonLink
          className="btn"
          title="viewLinkedIn"
          href="https://www.linkedin.com/in/mateusz-lesiak-tul/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  </section>
);

export default Portfolio;
