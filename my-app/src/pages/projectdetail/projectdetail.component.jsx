import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useProjectContext } from 'hooks/useProjectContext';
import styles from './projectdetail.module.scss';
import { FaCodeBranch, FaTag } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const ProjectDetail = () => {
  const { id } = useParams();
  const { items: projects } = useProjectContext();
  const project = projects.find(p => p.id === Number(id)); // // useParams()로 가져온 id는 string이므로 number로 변환

  if (!project) return <p>존재하지 않는 프로젝트입니다.</p>;

  return (
    <div className={styles.root}>
      <div className={styles.repoContainer}>
        {/* 타이틀 */}
        <div className={clsx(styles.repoHeader, styles.isStart)}>
          <h1>{project.title}</h1>
          <div className={styles.private}>{project.private ? 'Private' : 'Public'}</div>
        </div>

        {/* utils */}
        <div className={styles.repoHeader}>
          <div className={styles.branch}>
            <FaCodeBranch size={14} />
            <span>{project.company || 'main'}</span>
            <IoChevronDownSharp size={14} />
          </div>

          <div className={styles.icon}>
            <FaCodeBranch size={14} />
            <span>1 Branch</span>
          </div>

          <div className={styles.icon}>
            <FaTag size={14} />
            <span>0 Tags</span>
          </div>
        </div>

        <div className={styles.readme}>
          <div className={styles.title}><span>📖 READ ME</span></div>

          {project.thumbnail && (
            <div className={styles.imgWrap}>
              <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
            </div>
          )}

          <div>✏️ 주요 역할: {project.role}</div>
          <div>🔧 도구: {project.tools}</div>

          <div className={styles.desc}>
            {project.desc.split("\n").map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}
          </div>

          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button>🔗 {project?.url}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
