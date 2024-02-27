import React from 'react';
import Home from './pages/home/home.component';
// import Intro from './pages/introduce/introduce.component';
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <Routes>
    //   <Route path="/" exact element={<Home />} />
    //   <Route path="/intro" element={<Intro />} />
    // </Routes>

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
