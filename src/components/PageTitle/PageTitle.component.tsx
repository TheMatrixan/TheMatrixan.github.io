import React from 'react';
import usePageTitle from 'hooks/usePageTitle.hook';

import styles from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }: PageTitleProps) => {
  const [formattedTitle] = usePageTitle(title);
  return (
    <div className={styles['wrapper']}>
      <h1 className={styles['title']}>{formattedTitle}</h1>
      <span className={styles['border']} />
    </div>
  );
};

export default PageTitle;
