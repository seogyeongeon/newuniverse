import React from 'react';
import { Company } from 'constants/dummy';
import styles from './home-company.module.scss';

const HomeCompany = () => {
  const items = Company;

  return (
    <section className={styles.root} aria-labelledby="work-experience">
      <h2 id="work-experience" className={styles.title}>Work Experience</h2>

      <ul className={styles.items}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            <time className={styles.range} dateTime={item.range}>
              {item.range}
            </time>
            <div className={styles.dot} aria-hidden="true"></div>

            <article className={styles.container}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.role}>{item.role}</p>
              <ul className={styles.tasks}>
                {item.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeCompany;
