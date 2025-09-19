import React, { useState } from 'react';
import clsx from 'clsx';
import { useProjectContext } from 'hooks/useProjectContext';
import { useHistory } from 'react-router-dom';
import styles from './menu.module.scss';

const Menu = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("Overview");
  const { items } = useProjectContext();

  const tabs = [
    { name: "Overview", icon: "📖", url: '/' },
    { name: "Project", icon: "📂", count: items?.length, url: '/project' },
    { name: "About", icon: "⭐", url: '/resume' },
    // { name: "Projects", icon: "📦" },
    // { name: "Packages", icon: "📦" },
  ];

  const handleClick = (tab) => {
    history.push(tab.url); // id를 URL에 포함시켜 이동
    setActiveTab(tab.name);
  };

  return (
    <div className={styles.root}>
      <div className={styles.profileNav}>
        {/* <div className={styles.profileInfo}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/00000000?v=4"
            alt="profile"
          />
          <span className={styles.username}>seogyeongeon</span>
        </div> */}

        <ul className={styles.tabs}>
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={clsx(styles.tabItem, activeTab === tab.name && styles.active)}
              // onClick={() => setActiveTab(tab.name)}
              onClick={() => handleClick(tab)}
            >
              {/* <Link to={tab.url}> */}
              <span className={styles.icon}>{tab.icon}</span>
              {tab.name}
              {tab.count && <span className={styles.count}>{tab.count}</span>}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;