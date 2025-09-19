import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useProjectContext } from 'hooks/useProjectContext'; // 경로는 구조에 맞게
import styles from './projectdetail.module.scss';
import { FaCodeBranch } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const ProjectDetail = () => {
  const { id } = useParams();
  const { items: projects } = useProjectContext(); // context에서 items 가져오기

  // useParams()로 가져온 id는 string이므로 number로 변환
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <p>존재하지 않는 프로젝트입니다.</p>;

  return (
    <div className={styles.root}>

      <div className={styles.repoContainer}>

        <div className={clsx(styles.repoHeader, styles.start)}>
          <h1>{project?.title}</h1>
          <div className={styles.private}>{project.private ? 'Private' : 'Public'}</div>
        </div>

        <div className={styles.repoHeader}>
          <div className={styles.repoHeaderLeft}>

            <div className={styles.branchBtn}>
              <FaCodeBranch size={14} color="#4b5563" />
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#1f2937" }}>{project.company || 'main'}</span>
              <IoChevronDownSharp size={14} color="#4b5563" />
            </div>
            {/* Branch Count */}
            <div style={{ display: "inline-flex", alignItems: "center", margin: '0 15px', gap: "4px", fontSize: "14px" }}>
              <FaCodeBranch size={14} color="#4b5563" />
              <span style={{ color: "#111827" }}>1 Branch</span>
            </div>


            {/* Tag Count */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "14px" }}>
              <FaTag size={14} color="#4b5563" />
              <span style={{ color: "#111827" }}>0 Tags</span>
            </div>
          </div>

          {/* <div className={styles.repoActions}>
            <button>Link</button>
          </div> */}
        </div>


        <div className={styles.readme}>

          <div className={styles.top}>
            <span> 📖 READ ME</span>
          </div>

          {project?.thumbnail && (
            <div className={styles.image}>
              <img src={project.thumbnail} />
            </div>
          )}

          <div>✏️ 주요 역할: {project?.role}</div>
          <div>🔧 도구:  {project?.tools}</div>

          <div className={styles.desc}>
            {project.desc.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>

          {project?.url && (
            <button> <a href={project?.url}>🔧 {project?.url}</a></button>
          )}
        </div>
      </div>
    </div >
  );
};

export default ProjectDetail;
