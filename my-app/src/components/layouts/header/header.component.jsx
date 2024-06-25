import React, { useState } from 'react';
import Aside from 'components/layouts/aside/aside.component';
import { FiMenu } from "react-icons/fi";
import logo from 'assets/images/header-logo.png';
import styles from './header.module.scss';
//todo,, 경로

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className={styles.root}>
      <FiMenu onClick={handleClick} />
      <img className={styles.logo} alt="logo" src={logo} />

      {show && (
        <Aside onClose={handleClose} />
      )}
    </div>
  );
};

export default Header;