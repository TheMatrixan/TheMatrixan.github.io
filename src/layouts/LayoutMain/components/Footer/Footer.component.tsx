import React, { useState, useEffect } from 'react';
import { FormattedMessage, injectIntl, useIntl } from 'react-intl';

import adobeXdIcon from 'assets/img/adobe-xd.svg';
import reactIcon from 'assets/img/react.svg';
import typescriptIcon from 'assets/img/typescript.svg';
import githubStarIcon from 'assets/img/github-star.svg';
import githubForkIcon from 'assets/img/github-fork.svg';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { formatMessage } = useIntl();
  const [stars, setStars] = useState<number | string>(0);
  const [forks, setForks] = useState<number | string>(0);
  useEffect(() => {
    fetch('https://api.github.com/repos/TheMatrixan/TheMatrixan.github.io', {
      method: 'GET',
    })
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
              <img
                className={styles['icon']}
                src={adobeXdIcon}
                alt={formatMessage({ id: 'icon.adobeXd' })}
                title={formatMessage({ id: 'icon.adobeXd' })}
              />
            </span>
            <br />
            <span className={styles['icon-num']}>
              <FormattedMessage id="footer.createdWith" />
              &nbsp;
              <img
                className={styles['icon']}
                src={reactIcon}
                alt={formatMessage({ id: 'icon.reactJs' })}
                title={formatMessage({ id: 'icon.reactJs' })}
              />
              <img
                className={styles['icon']}
                src={typescriptIcon}
                alt={formatMessage({ id: 'icon.typeScript' })}
                title={formatMessage({ id: 'icon.typeScript' })}
              />
            </span>
            <br />
          </span>
          <a
            href="https://github.com/TheMatrixan/TheMatrixan.github.io"
            className={styles['link']}
            title={formatMessage({ id: 'footer.viewRepository' })}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles['icon-num']}>
              <img className={styles['icon']} src={githubStarIcon} alt={formatMessage({ id: 'icon.githubStar' })} />
              {stars}
            </span>
            <span className={styles['icon-num']}>
              <img className={styles['icon']} src={githubForkIcon} alt={formatMessage({ id: 'icon.githubFork' })} />
              {forks}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default injectIntl(Footer);
