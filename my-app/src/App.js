import React from 'react';
import { Route, Switch } from "react-router-dom";
import Menu from 'components/layouts/menu/menu.component';
import Header from 'components/layouts/header/header.component';
import Aside from 'components/layouts/aside/aside.component';
import Home from 'pages/home/home/home.component';
import Project from 'pages/project/project.component';
import ProjectDetail from 'pages/projectdetail/projectdetail.component';
import Resume from 'pages/resume/resume.component';

function App() {
  return (
    <div id="app" className="app">
      <Header />
      <Menu />

      <div className="content">
        <Aside />
        <div id="body" className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route exact path="/project" component={Project} />           {/* 목록 페이지 */}
            <Route path="/project/:id" component={ProjectDetail} /> {/* 상세 페이지 */}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;