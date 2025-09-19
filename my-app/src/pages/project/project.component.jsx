import React from 'react';
import ProjectItem from 'components/contents/project-item/project-item.component.jsx';
import { useProjectContext } from 'hooks/useProjectContext';
import styles from './project.module.scss';

const Project = () => {
  const { items } = useProjectContext();

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.icon}>🗂️</div>
        <h2 className={styles.title}>Get Started with My Projects</h2>
        <p className={styles.subTitle}>Choose a project</p>
      </div>

      <div className={styles.container}>

        {items.map((item) => (
          <ProjectItem item={item} showImg={true} />
        ))}
      </div>
    </div>
  );
};

export default Project;