import React from 'react';
import clsx from 'clsx';
import { FiAirplay } from "react-icons/fi";
import styles from './home-graph.module.scss';

const HomeGrapth = ({ item }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>0 contributions in 2025</div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* <div className={clsx(styles.cell)}>Mon</div> */}
          <div>Mon</div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
          <div className={clsx(styles.cell, styles.level1)}></div>
        </div>

        <div className={styles.grid}>
          <div className={clsx(styles.cell)}>wed</div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
          <div className={clsx(styles.cell, styles.level2)}></div>
        </div>

        <div className={styles.grid}>
          <div className={clsx(styles.cell)}>Fri</div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
          <div className={clsx(styles.cell, styles.level3)}></div>
        </div>
      </div>

    </div>
  );
};

export default HomeGrapth;