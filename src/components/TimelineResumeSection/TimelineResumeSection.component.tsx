import React, { Fragment } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import ScrollAnimation from 'react-animate-on-scroll';

import Icon from 'components/Icon';
import { TimelineData } from 'config';
import Hexagon from 'components/Hexagon';

import styles from './TimelineResumeSection.module.scss';
import ButtonLink from 'components/ButtonLink';

interface TimelineResumeSectionProps {
  icon: string;
  name: string;
  data: TimelineData[];
}

const TimelineResumeSection: React.FC<TimelineResumeSectionProps> = ({
  icon,
  name,
  data,
}: TimelineResumeSectionProps) => {
  return (
    <Fragment>
      <ScrollAnimation animateIn="fadeIn" animateOnce offset={200}>
        <div className={styles['header']}>
          <Icon size={40} fill="primary" name={icon} />
          <h2 className={styles['heading']}>
            <FormattedMessage id={name} />
          </h2>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className={styles['timeline']}>
          {data.map(({ name, subtitle, text, link }: TimelineData) => (
            <section className={styles['timeline-event']} key={name}>
              <Hexagon className={styles['timeline-event-hex']} />
              <h3 className={styles['title']}>
                <FormattedMessage id={name} />
              </h3>
              <h4 className={styles['subtitle']}>
                <FormattedHTMLMessage id={subtitle} />
              </h4>
              <div className={styles['text']}>
                <FormattedHTMLMessage id={text} />
              </div>
              {link ? <ButtonLink className={styles['btn']} href={link} title="btn.viewSystem" /> : null}
            </section>
          ))}
        </div>
      </ScrollAnimation>
    </Fragment>
  );
};

export default TimelineResumeSection;
