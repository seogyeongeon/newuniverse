import React from 'react';
import styles from './aside.module.scss';

const Aside = ({
  onClose
}) => {
  return (
    <div className={styles.root}>
      Aside
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default Aside;