import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectContext } from 'hooks/useProjectContext'; // 경로는 구조에 맞게

const ProjectDetail = () => {
  const { id } = useParams();
  const { items: projects } = useProjectContext(); // context에서 items 가져오기

  // useParams()로 가져온 id는 string이므로 number로 변환
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <p>존재하지 않는 프로젝트입니다.</p>;

  return (
    <div>
      <h2>ProjectDetail</h2>
      <div>
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
