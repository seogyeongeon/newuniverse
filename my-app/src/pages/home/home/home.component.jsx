import React from 'react';
import HomeGrapth from '../home-graph/home-graph.component.jsx';
import HomeCompany from 'pages/home/home-company/home-company.component.jsx';
import HomePopular from '../home-popular/home-popular.component.jsx';
import styles from './home.module.scss';

const Home = () => {
  return (
    <main className={styles.root}>
      <HomePopular />
      <HomeGrapth />
      <HomeCompany />
    </main>
  );
};

export default Home;
