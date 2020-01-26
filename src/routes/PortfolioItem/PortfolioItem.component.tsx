import React from 'react';

import PageTitle from 'components/PageTitle';

import styles from './PortfolioItem.module.scss';

const PortfolioItem: React.FC = () => {
  return (
    <section>
      <div className="container">
        <PageTitle title="portfolio.title" />
        <div className={styles['temp']}>portfolio item</div>
      </div>
    </section>
  );
};

export default PortfolioItem;
