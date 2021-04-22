import { LINKED_IN_URL } from 'config';
import React, { VoidFunctionComponent } from 'react';

import Arrow from 'assets/images/Arrow';
import Incentive from 'assets/images/Incentive';
import './HomePage.scss';

const HomePage: VoidFunctionComponent = () => (
  <main>
    <h1 className="Home-heading">I'm coding right&nbsp;now</h1>
    <Incentive className="Home-incentive" />
    <div className="Home-row">
      <h2 className="Home-subtitle">Contact me&nbsp;on</h2>
      <Arrow className="Home-arrow" />
      <h2 className="Home-link-wrapper">
        <a className="Home-link" href={LINKED_IN_URL} title="My profile on LinkedIn">
          LinkedIn
        </a>
      </h2>
    </div>
  </main>
);

export default HomePage;
