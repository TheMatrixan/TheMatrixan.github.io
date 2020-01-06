import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Icon from 'components/Icon';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { formatMessage } = useIntl();
  const [stars, setStars] = useState<number | string>(0);
  const [forks, setForks] = useState<number | string>(0);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/TheMatrixan/TheMatrixan.github.io')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setStars(data.stargazers_count);
        setForks(data.forks_count);
      })
      .catch(() => {
        setStars('?');
        setForks('?');
      });
  }, []);

  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['row']}>
          <span className={styles['info']}>
            <span className={styles['icon-num']}>
              <FormattedMessage id="footer.designedIn" />
              &nbsp;
              <Icon size={20} name="adobeXd" fill="icon-adobeXd" title="icon.adobeXd" />
            </span>
            <br />
            <span className={styles['icon-num']}>
              <FormattedMessage id="footer.createdWith" />
              &nbsp;
              <Icon size={20} name="react" fill="icon-react" title="icon.reactJs" />
              &nbsp;
              <Icon size={20} name="typescript" fill="icon-typescript" title="icon.typeScript" />
            </span>
          </span>
          <a
            href="https://github.com/TheMatrixan/TheMatrixan.github.io"
            className={styles['link']}
            title={formatMessage({ id: 'footer.viewRepository' })}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles['icon-num']}>
              <Icon name="github-star" fill="primary" title="icon.githubStar" />
              &nbsp;{stars}
            </span>
            <span className={styles['icon-num']}>
              <Icon name="github-fork" fill="primary" title="icon.githubFork" />
              &nbsp;{forks}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
