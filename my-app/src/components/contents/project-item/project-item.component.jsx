import React from 'react';
import clsx from 'clsx';
import { FiAirplay } from "react-icons/fi";
import styles from './project-item.module.scss';

const ProjectItem = ({ item }) => {

  const title = item?.title || 'react-wedding-card';
  const info = item?.info || 'Next.js 로 누구나 쉽게 만드는 Static HTML 이력서';
  const tool = item?.tool || 'javascript';

  return (
    <div className={styles.root}>
      <div className={styles.detail}>

        <div className={styles.title}>
          <FiAirplay /><span> {title}</span>
        </div>
        <div className={styles.info}>
          {/* {info}
           */}
          Forked from iamshaunjp/react-context-hooks

          All the course files for the React Context API & Hooks tutorial series on the Net Ninja YouTube channel.
        </div>
        <div className={clsx(styles.tool, [item?.tool])}>
          {tool}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;