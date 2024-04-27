// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'yup'
import '@reduxjs/toolkit'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store.js';

import { Provider } from 'react-redux';
// import { store } from './Redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store= {store}>
      <App />
    </Provider>
  </BrowserRouter>


)
