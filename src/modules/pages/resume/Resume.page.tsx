import ButtonLink from '@components/buttonLink/ButtonLink.component';
import Icon from '@components/icon/Icon.component';
import PageIntro from '@components/pageIntro/PageIntro.component';
import PageTitle from '@components/pageTitle/PageTitle.component';
import TimelineResumeSection from '@components/timelineResumeSection/TimelineResumeSection.component';
import { ORIGIN } from '@config/config';
import { ConstResume } from '@config/timeline';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Resume.module.scss';

const Resume: React.FC = () => {
  return (
    <section className="container">
      <PageTitle title="resume.title" />
      <PageIntro
        button={
          <ButtonLink href={`${ORIGIN}/assets/resume/Mateusz_Lesiak_CV.pdf`} target="_blank" title="resume.btn" />
        }>
        <span className={styles['description']}>
          <FormattedMessage id="resume.description" />
        </span>
      </PageIntro>
      <div className={styles['arrow-wrapper']}>
        <Icon className={styles['arrow']} name="arrow-down" stroke="primary" size={48} />
      </div>
      <div className={styles['details']}>
        <div className={styles['other']}></div>
        <div className={styles['experience']}>
          <TimelineResumeSection icon="education" name="resume.section.education" data={ConstResume.education} />
          <TimelineResumeSection icon="jobs" name="resume.section.jobs" data={ConstResume.jobs} />
          <TimelineResumeSection icon="projects" name="resume.section.projects" data={ConstResume.projects} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
