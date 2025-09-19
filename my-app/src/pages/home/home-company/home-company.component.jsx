import React from 'react';
import clsx from 'clsx';
// import { FiAirplay } from "react-icons/fi";
import { Company } from 'constants/dummy';
import styles from './home-company.module.scss';


const HomeCompany = () => {

  const items = Company;
  return (
    <div className={styles.root}>
      <div className={styles.title}>Work Experience</div>
      <div className={styles.items}>
        {items.map(item => {
          return (
            <div className={styles.item}>

              <div className={styles.date}>
                <span>{item.range}</span>
              </div>

              <div className={styles.dot}></div>
              <div className={styles.content}>
                <div className={styles.company}>
                  <span className={styles.name}>{item.title}</span>
                </div>
                <div className={styles.role}>{item.role}</div>
                <ul className={styles.tasks}>
                  {item.tasks.map(task => {
                    return (
                      <li>{task}</li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCompany;