import React from 'react';
import Menu from 'components/layouts/menu/menu.component';
import Header from 'components/layouts/header/header.component';
import Aside from 'components/layouts/aside/aside.component';
import Home from 'pages/home/home/home.component';
import Intro from 'pages/introduce/introduce.component';
import Resume from 'pages/resume/resume.component';
// import { BrowserRouter as Route } from "react-router-dom";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div id="app" className="app">
      <Header />

      <Menu />
      <div className="content">
        <Aside />
        <div id="body" className="body">
          <div>
            <Route path="/" component={Home} exact={true} />
            <Route path="/intro" component={Intro} />
            <Route path="/resume" component={Resume} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
