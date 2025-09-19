import React from 'react';
import { useHistory } from 'react-router-dom';
import ProjectItem from 'components/contents/project-item/project-item.component.jsx';
import { useProjectContext } from 'hooks/useProjectContext';
import styles from './home-popular.module.scss';

const HomePopular = () => {
  const { items: projectItems } = useProjectContext();
  const items = projectItems.slice(0, 2);

  const history = useHistory();

  const handleMoreClick = () => {
    history.push('/project');
  };

  return (
    <section className={styles.root} aria-labelledby="popular-projects">
      <header className={styles.projectWrap}>
        <h2 id="popular-projects" className={styles.title}>Popular Projects</h2>
        <button
          type="button"
          className={styles.btn}
          onClick={handleMoreClick}
          aria-label="View more projects"
        >
          More
        </button>
      </header>

      <ul className={styles.container}>
        {items.map((item) => (
          <li key={item.id}>
            <ProjectItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePopular;
