import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProjectProvider from './contexts/project/project.context';
// root.js
const root = ReactDOM.createRoot(document.getElementById('root'));
// require("dotenv").config();

root.render(
  <BrowserRouter>
    <ProjectProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProjectProvider>
  </BrowserRouter>
);

reportWebVitals();
