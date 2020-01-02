import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Portfolio.module.scss';

const Portfolio: React.FC = () => {
  return (
    <div className={styles['temp']}>
      <h1>Mateusz Lesiak</h1>
      <h2>
        <FormattedMessage id="pageInBuilding" />
      </h2>
      <a className="btn" href="https://www.linkedin.com/in/mateusz-lesiak-tul/">
        <FormattedMessage id="viewLinkedIn" />
      </a>
    </div>
  );
};

export default Portfolio;
