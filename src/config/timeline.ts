export interface ResumeData {
  education: TimelineData[];
  jobs: TimelineData[];
  projects: TimelineData[];
  skills: {
    languages: string[];
    libs: string[];
    tools: string[];
  };
  courses: string[];
}

const ConstResume: ResumeData = {
  education: [
    {
      name: 'resume.education.bachelor.school',
      subtitle: 'resume.education.bachelor.subtitle',
      text: 'resume.education.bachelor.text',
      // link: '/portfolio/system-bachelor',
    },
    {
      name: 'resume.education.engineer.school',
      subtitle: 'resume.education.engineer.subtitle',
      text: 'resume.education.engineer.text',
      // link: '/portfolio/system-engineer',
    },
  ],
  jobs: [
    {
      name: 'resume.jobs.appstract.position',
      subtitle: 'resume.jobs.appstract.subtitle',
      text: 'resume.jobs.appstract.text',
    },
    {
      name: 'resume.jobs.cmi.position',
      subtitle: 'resume.jobs.cmi.subtitle',
      text: 'resume.jobs.cmi.text',
    },
    {
      name: 'resume.jobs.celpl.position',
      subtitle: 'resume.jobs.celpl.subtitle',
      text: 'resume.jobs.celpl.text',
    },
    {
      name: 'resume.jobs.wordpress.position',
      subtitle: 'resume.jobs.wordpress.subtitle',
      text: 'resume.jobs.wordpress.text',
    },
  ],
  projects: [
    {
      name: 'resume.projects.idemia.name',
      subtitle: 'resume.projects.idemia.subtitle',
      text: 'resume.projects.idemia.text',
      // link: '/portfolio/delegation-assistant',
    },
    {
      name: 'resume.projects.ssbd.name',
      subtitle: 'resume.projects.ssbd.subtitle',
      text: 'resume.projects.ssbd.text',
      // link: '/portfolio/adventum',
    },
  ],
  skills: {
    languages: [],
    libs: [],
    tools: [],
  },
  // eslint-disable-next-line sort-keys
  courses: [],
};

export { ConstResume };
