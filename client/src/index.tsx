import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render } from 'react-dom';
import SideBar from './SideBar/SideBar';
import LoginForm from './Login/LoginForm';
import { UserStore } from './store';

const store = new UserStore();

render(
  <React.StrictMode>
        <BrowserRouter>
          <SideBar store={store} /> 
          <Routes>
            <Route path="/" element={<App store={store} />} />
            <Route path="/login" element={<LoginForm store={store} />} />
          </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();