import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render } from 'react-dom';
import { SideBar } from './SideBar/SideBar';
import LoginForm from './Login/LoginForm';

render(
  <React.StrictMode>
        <SideBar />    

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();