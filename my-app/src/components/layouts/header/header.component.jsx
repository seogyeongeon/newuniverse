import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logo from 'assets/images/header-logo.png';
import styles from './header.module.scss';

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/'); // id를 URL에 포함시켜 이동
  }
  return (
    <header className={styles.root}>
      <div className={styles.menu} >
        <FiMenu className={styles.icon} />
      </div>
      <img className={styles.logo} src={logo} alt="Logo" />
      <button className={styles.name} onClick={handleClick}>
        SeoGyeongEon
      </button>
    </header>
  );
};

export default Header;
