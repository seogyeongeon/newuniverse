import React, { createContext } from 'react';

export const ProjectContext = createContext();

const defaultItems = [
  { id: 1, title: '프로젝트 1', desc: '설명 1', url: '', tool: 'javascript' },
  { id: 2, title: '프로젝트 2', desc: '설명 2' },
];

const ProjcetProvider = ({ children, items = defaultItems, active, activeName }) => {
  return (
    <ProjectContext.Provider
      value={{
        items,
        active,
        activeName,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};


// ProjcetProvider.propTypes = propTypes;
// ProjcetProvider.defaultProps = defaultProps;

export default ProjcetProvider;
