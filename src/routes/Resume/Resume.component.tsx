import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ConstResume } from 'config';
import ButtonLink from 'components/ButtonLink';
import Icon from 'components/Icon';
import PageIntro from 'components/PageIntro';
import PageTitle from 'components/PageTitle';
import TimelineResumeSection from 'components/TimelineResumeSection';

import resumePDF from 'assets/resume/Mateusz_Lesiak_CV.pdf';

import styles from './Resume.module.scss';

const Resume: React.FC = () => {
  console.log(ConstResume);
  return (
    <section className="container">
      <PageTitle title="resume.title" />
      <PageIntro button={<ButtonLink href={resumePDF} target="_blank" title="resume.btn" />}>
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
