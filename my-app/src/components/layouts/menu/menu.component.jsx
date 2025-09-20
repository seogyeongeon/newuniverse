import React, { useState } from 'react';
import clsx from 'clsx';
import { useProjectContext } from 'hooks/useProjectContext';
import { useHistory } from 'react-router-dom';
import styles from './menu.module.scss';

const Menu = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('Overview');
  const { items } = useProjectContext();

  const tabs = [
    { name: 'Overview', icon: '📖', url: '/' },
    { name: 'Project', icon: '📂', count: items?.length, url: '/project' },
    { name: 'About', icon: '⭐', url: '/about' },
  ];

  const handleClick = (tab) => {
    history.push(tab.url); // id를 URL에 포함시켜 이동
    setActiveTab(tab.name);
  };

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
