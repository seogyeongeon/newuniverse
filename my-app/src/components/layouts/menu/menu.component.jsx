import React from 'react';
import clsx from 'clsx';
import { useProjectContext } from 'hooks/useProjectContext';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './menu.module.scss';

const Menu = () => {
  const history = useHistory();
  const location = useLocation(); // 현재 URL 가져오기
  const { items } = useProjectContext();

  const tabs = [
    { name: 'Overview', icon: '📖', url: '/' },
    { name: 'Project', icon: '📂', count: items?.length, url: '/project' },
    { name: 'About', icon: '⭐', url: '/about' },
  ];

  const handleClick = (tab) => {
    history.push(tab.url);
  };

  // URL 기반 active 
  const activeTab = tabs.find(tab => tab.url === location.pathname)?.name;

  return (
    <nav className={styles.root} aria-label="Main menu">
      <ul className={styles.items}>
        {tabs.map((tab) => (
          <li key={tab.name} className={styles.item}>
            <button
              type="button"
              onClick={() => handleClick(tab)}
              className={clsx(activeTab === tab.name && styles.active)}
              aria-current={activeTab === tab.name ? 'page' : undefined}
            >
              <span className={styles.icon}>{tab.icon}</span>
              {tab.name}
              {tab.count !== undefined && (
                <span className={styles.count}>{tab.count}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
