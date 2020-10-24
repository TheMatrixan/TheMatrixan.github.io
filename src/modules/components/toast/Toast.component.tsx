import React from 'react';

import styles from './Toast.module.scss';

const Toast: React.FC<IToastProps> = ({ onClick }: IToastProps) => {
  return (
    <div className={styles.wrapper}>
      toast
      <button type="button" onClick={onClick}>
        button
      </button>
    </div>
  );
};

export default Toast;
