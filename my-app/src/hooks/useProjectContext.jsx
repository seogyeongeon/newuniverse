import { useContext } from 'react';
import { ProjectContext } from '../contexts/project/project.context';

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
