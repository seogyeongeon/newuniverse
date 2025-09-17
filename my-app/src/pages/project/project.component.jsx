import React from 'react';
import { Link } from 'react-router-dom';
// import { useProjectContext } from '../../hooks/useProjectContext';
import { useProjectContext } from 'hooks/useProjectContext';

const Project = () => {
  const { items } = useProjectContext();

  return (
    <div>
      <h2>Project</h2>

      {items.map((p) => (
        <li key={p.id}>
          {/* 클릭 시 id 포함된 경로로 이동 */}
          <Link to={`/project/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Project;