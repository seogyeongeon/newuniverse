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
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;