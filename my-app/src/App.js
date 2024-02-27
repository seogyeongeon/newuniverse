import React from 'react';
import Menu from './layouts/menu/menu.component';
import Aside from './layouts/aside/aside.component';
import Header from './layouts/header/header.component';
import Home from './pages/home/home.component';
import Intro from './pages/introduce/introduce.component';
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import { Router, BrowserRouter, Route, Routes } from "react-router-dom";

// Link 컴포넌트를 사용하여 페이지를 전환하면 페이지를 새로 불러오지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경

function App() {
  return (
    // <Routes>
    //   <Route path="/" exact element={<Home />} />
    //   <Route path="/intro" element={<Intro />} />
    // </Routes>
    <div id="app" className="app">

      <Header />
      <Menu />


      <div>
        <Route path="/" component={Home} exact={true} />
        <Route path="/intro" component={Intro} />
      </div>
      {/* <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/in'>소개</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/in" component={Intro} />
      </Switch> */}
    </div>
  );
}

export default App;
