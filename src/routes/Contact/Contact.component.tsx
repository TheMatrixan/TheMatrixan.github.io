import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import cn from 'classnames';

import PageTitle from 'components/PageTitle';
import Icon from 'components/Icon';
import ButtonLink from 'components/ButtonLink';
import { Const } from 'config';

import styles from './Contact.module.scss';

import imageJPG from 'assets/img/mateusz_lesiak.jpg';
import image2xJPG from 'assets/img/mateusz_lesiak@2x.jpg';
import imageWebP from 'assets/img/mateusz_lesiak.webp';
import image2xWebP from 'assets/img/mateusz_lesiak@2x.webp';

const Contact: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="container">
      <PageTitle title="contact.title" />
      <div className={styles['intro']}>
        <div className={cn(styles['intro-section'], styles['intro-section--image'])}>
          <picture>
            <source srcSet={`${image2xWebP} 2x, ${imageWebP} 1x`} type="image/webp" />
            <source srcSet={`${image2xJPG} 2x, ${imageJPG} 1x`} type="image/jpeg" />
            <img src={imageJPG} alt={formatMessage({ id: 'fullname' })} height="500" width="462" />
          </picture>
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
          <ButtonLink href="/resume" title="contact.btn" className={styles['btn']} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
