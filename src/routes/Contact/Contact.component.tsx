import React from 'react';

import PageTitle from 'components/PageTitle';
import Icon from 'components/Icon';
import ButtonLink from 'components/ButtonLink';
import Hexagon from 'components/Hexagon';
import { Const } from 'config';

import styles from './Contact.module.scss';
import PageIntro from 'components/PageIntro';

const Contact: React.FC = () => {
  return (
    <>
      <div className="container">
        <PageTitle title="contact.title" />
        <PageIntro button={<ButtonLink href="/resume" title="contact.btn" />}>
          <>
            <div className={styles['hr']}></div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Const.LinkedInURI}
              className={styles['link-item']}
              title={Const.LinkedInName}
            >
              <Icon name="linkedIn" stroke="primary" />
              <span>LinkedIn</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Const.GithubURI}
              className={styles['link-item']}
              title={Const.GithubName}
            >
              <Icon name="github" stroke="primary" />
              <span>Github</span>
            </a>
          </>
        </PageIntro>
      </div>
      <div className="hexagons">
        <div className={styles['hex-wrapper']}>
          <Hexagon className={styles['hex-default']} />
          <Hexagon className={styles['hex-white']} />
        </div>
      </div>
    </>
  );
};

export default Contact;
