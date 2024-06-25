import React from 'react';
import Menu from 'components/layouts/menu/menu.component';
import Header from 'components/layouts/header/header.component';
import Aside from 'components/layouts/aside/aside.component';
import Home from 'pages/home/home.component';
import Intro from 'pages/introduce/introduce.component';
// import { BrowserRouter as Route } from "react-router-dom";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
// Link 컴포넌트를 사용하여 페이지를 전환하면 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경
// const dotenv = require('dotenv')

function App() {
  return (
    <div id="app" className="app">
      {/* <Header /> */}

      <Aside />
      {/* <div className="content"> */}
      <div id="body" className="body">
        <Menu />
        <div>
          <Route path="/" component={Home} exact={true} />
          <Route path="/intro" component={Intro} />
        </div>
      </div>
    </div>
  );
}

export default App;
