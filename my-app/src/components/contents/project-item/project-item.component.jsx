import React from 'react';
import clsx from 'clsx';
import { FiAirplay } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import defaultImg from 'assets/images/default.jpg';
import styles from './project-item.module.scss';

const ProjectItem = ({ item, showImg }) => {
  const history = useHistory();

  const title = item?.title || 'react-wedding-card';
  const tool = item?.tool || 'javascript';
  const id = item?.id;

  const handleClick = () => {
    history.push(`/project/${id}`);
  };

  const desc = item.desc?.split("\n").slice(0, 1);
  return (
    <article
      className={clsx(styles.root, showImg && styles.showImg)}
    >
      <button
        type="button"
        onClick={handleClick}
        className={styles.button}
        aria-label={`View project details for ${title}`}
      >
        {showImg && (
          <div className={clsx(styles.imgWrap, !item?.thumbnail && styles.default)}>
            <img
              src={item?.thumbnail || defaultImg}
              alt={item?.thumbnail ? `${title} thumbnail` : "Default thumbnail"}
              loading="lazy"
            />
          </div>
        )}

        <div className={styles.detail}>
          <h3 className={styles.title}>
            <FiAirplay aria-hidden="true" />
            <span>{title}</span>
          </h3>
          <p className={styles.info}>
            {desc.map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </p>
          <p className={styles.info}>
            - {item?.tools}
          </p>
          <span className={clsx(styles.tool, styles[tool])}>{tool}</span>
        </div>
      </button>
    </article>
  );
};

export default ProjectItem;
