import React from 'react';
import clsx from 'clsx';
import ProjectItem from '../../../components/contents/project-item/project-item.component.jsx';
import HomeGrapth from '../home-graph/home-graph.component.jsx';
import { useProjectContext } from 'hooks/useProjectContext';
import styles from './home.module.scss';

const Home = () => {
  const { items: projectItems } = useProjectContext();
  const items = projectItems.slice(0, 6);

  // const historyItems = [
  //   { name: '대동', start: 2017, end: 2017 },
  //   { name: '엠텍', start: 2018, end: 2020 },
  //   { name: '디케이', start: 2021, end: 2024 },
  // ];

  // const max = historyItems.map(o => o.end).reduce((max, curr) => max < curr ? curr : max);
  // const min = historyItems.map(o => o.start).reduce((min, curr) => min > curr ? curr : min);
  // const tableMax = max - min + 1;

  return (
    <div className={styles.root}>
      <div className={styles.project}>

        <div>Popular repositories</div>
        <div className={styles.container}>
          {items.map((item) => {
            return (
              <ProjectItem item={item} />
            );
          })}
        </div>

        <HomeGrapth />

        <div className={styles.skills}>
          <span>javascript</span>
          <span>html</span>
          <span>css</span>
          <div className={styles.graph}>
            <div className={styles.line}>
            </div>
            <div className={clsx(styles.line, styles.horizon)}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;