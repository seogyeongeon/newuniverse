import React, { useState } from 'react';
import Aside from 'components/layouts/aside/aside.component';
import { FiMenu } from "react-icons/fi";
import logo from 'assets/images/header-logo.png';
import styles from './header.module.scss';
//todo,, 경로

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.menu}>

        <FiMenu className={styles.menuIcon} />
      </div>
      <img className={styles.logo} alt="logo" src={logo} />

      <div className={styles.name}>Seo GyeongEon</div>
      {/* {show && (
        <Aside onClose={handleClose} />
      )} */}
    </div>
  );
};

export default Header;