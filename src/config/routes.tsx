import React from 'react';

import Homepage from '../routes/Homepage';
// const About = React.lazy(() => import('../routes/About'));
// const Contact = React.lazy(() => import('../routes/Contact'));
// const Resume = React.lazy(() => import('../routes/Resume'));
// const Portfolio = React.lazy(() => import('../routes/Portfolio'));
import About from '../routes/About';
import Contact from '../routes/Contact';
import Portfolio from '../routes/Portfolio';
import Resume from '../routes/Resume';

interface PathRoute {
  path: string;
  component: React.FC;
}

const routes: PathRoute[] = [
  { path: '/', component: Homepage },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: Portfolio },
];

export { routes };
