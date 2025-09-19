import React from 'react';
import { useHistory } from 'react-router-dom';
import ProjectItem from '../../../components/contents/project-item/project-item.component.jsx';
import HomeGrapth from '../home-graph/home-graph.component.jsx';
import HomeCompany from 'pages/home/home-company/home-company.component.jsx';
import { useProjectContext } from 'hooks/useProjectContext';
import styles from './home.module.scss';

const Home = () => {
  const { items: projectItems } = useProjectContext();
  const items = projectItems.slice(0, 2);

  const history = useHistory();

  const handleMoreClick = () => {
    history.push('/project'); // 이동하고 싶은 경로
  };

  return (
    <div className={styles.root}>
      <div className={styles.project}>

        <div className={styles.projectWrap}>
          <div className={styles.title}>Popular Projects</div>
          <div className={styles.btn} onClick={handleMoreClick}>More</div>
        </div>

        <div className={styles.container}>
          {items.map((item) => {
            return (
              <ProjectItem item={item} />
            );
          })}
        </div>

        <HomeGrapth />
        <HomeCompany />
      </div>
    </div>
  )
};

export default Home;