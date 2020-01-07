import React from 'react';
import { FormattedMessage } from 'react-intl';

import PageTitle from 'components/PageTitle';

import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <section>
      <div className="container">
        <PageTitle title="about.title" />
        <div className={styles['temp']}>
          <h2>
            <FormattedMessage id="pageInBuilding" />
          </h2>
          <a className="btn" href="https://www.linkedin.com/in/mateusz-lesiak-tul/">
            <FormattedMessage id="viewLinkedIn" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
