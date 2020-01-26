import { lazy } from 'react';

import { ConstPortfolio } from './portfolio';

import About from 'routes/About';
import Contact from 'routes/Contact';
import Homepage from 'routes/Homepage';
import Portfolio from 'routes/Portfolio';
import Resume from 'routes/Resume';
// const About = React.lazy(() => import('routes/About'));
// const Contact = React.lazy(() => import('routes/Contact'));
// const Portfolio = React.lazy(() => import('routes/Portfolio'));
// const Resume = React.lazy(() => import('routes/Resume'));
const PortfolioItem = lazy(() => import('routes/PortfolioItem'));
const NotFound = lazy(() => import('routes/NotFound'));

interface PathRoute {
  path: string;
  component: React.FC;
}

const portfolioRoutes = ConstPortfolio.map(
  ({ path }) =>
    ({
      path: `/portfolio/${path}`,
      component: PortfolioItem,
    } as PathRoute),
);

const routes: PathRoute[] = [
  { path: '/', component: Homepage },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: Portfolio },
  ...portfolioRoutes,

  // 404 Not found
  { path: '/**', component: NotFound },
];

export { routes };
