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
    history.push(`/project/${id}`); // id를 URL에 포함시켜 이동
  };

  return (
    <div
      className={clsx(styles.root, showImg && styles.showImg)}
      onClick={handleClick}
    >
      {showImg && (
        <div>
          <div className={clsx(styles.imgWrap, !!!item?.thumbnail && styles.default)}>
            <img src={item?.thumbnail || defaultImg} alt="" />
          </div>
        </div>

      )}

      <div className={styles.detail}>

        <div className={styles.title}>
          <FiAirplay /><span> {title}</span>
        </div>
        <div className={styles.info}>
          Forked from iamshaunjp/react-context-hooks

          All the course files for the React Context API & Hooks tutorial series on the Net Ninja YouTube channel.
        </div>
        <div className={clsx(
          styles.tool,
          [item?.tool],
        )}>
          {tool}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;