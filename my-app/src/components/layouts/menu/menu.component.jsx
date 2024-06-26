import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.root}>
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/intro">Projects</Link>
        </li>
        <li>
          <Link to="/intro">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;