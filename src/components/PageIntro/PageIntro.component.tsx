import React, { ReactElement } from 'react';
import cn from 'classnames';

import { Const } from 'config';
import IntroImage from 'components/IntroImage';
import Icon from 'components/Icon';
import { useIntl, FormattedMessage } from 'react-intl';

import styles from './PageIntro.module.scss';

interface PageIntroProps {
  button?: ReactElement;
  children?: React.ReactNode;
}

const PageIntro: React.FC<PageIntroProps> = ({ button, children }: PageIntroProps) => {
  const { formatMessage } = useIntl();
  return (
    <div className={styles['intro']}>
      <div className={cn(styles['intro-section'], styles['intro-section--image'])}>
        <IntroImage />
      </div>
      <div className={cn(styles['intro-section'], styles['intro-section--details'])}>
        <h2 className={styles['fullname']}>
          <FormattedMessage id="fullname" />
        </h2>
        <a href={`mailto:${Const.Email}`} className={styles['link-item']} title={formatMessage({ id: 'getInTouch' })}>
          <Icon name="mail" stroke="primary" />
          <span>{Const.Email}</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Const.HomeURI}
          className={styles['link-item']}
          title={formatMessage({ id: 'goToGoogleMaps' })}
        >
          <Icon name="home" stroke="primary" />
          <FormattedMessage id="home" />
        </a>
        {children ? children : null}
        {button && <div className={styles['btn']}>{button}</div>}
      </div>
    </div>
  );
};

export default PageIntro;
