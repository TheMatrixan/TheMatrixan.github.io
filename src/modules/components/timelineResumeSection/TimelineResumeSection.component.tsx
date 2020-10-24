import ButtonLink from '@components/buttonLink/ButtonLink.component';
import Hexagon from '@components/hexagon/Hexagon.component';
import Icon from '@components/icon/Icon.component';
import React, { Fragment } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import styles from './TimelineResumeSection.module.scss';

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
  const { formatMessage } = useIntl();

  return (
    <Fragment>
      <div className={styles['header']}>
        <Icon size={40} fill="primary" name={icon} />
        <h2 className={styles['heading']}>
          <FormattedMessage id={name} />
        </h2>
      </div>
      <div className={styles['timeline']}>
        {data.map(({ name, subtitle, text, link }: TimelineData) => (
          <section className={styles['timeline-event']} key={name}>
            <Hexagon className={styles['timeline-event-hex']} />
            <h3 className={styles['title']} dangerouslySetInnerHTML={{ __html: formatMessage({ id: name }) }} />
            <h4 className={styles['subtitle']} dangerouslySetInnerHTML={{ __html: formatMessage({ id: subtitle }) }} />
            <div className={styles['text']} dangerouslySetInnerHTML={{ __html: formatMessage({ id: text }) }} />
            {link ? <ButtonLink className={styles['btn']} href={link} title="btn.viewSystem" /> : null}
          </section>
        ))}
      </div>
    </Fragment>
  );
};

export default TimelineResumeSection;
