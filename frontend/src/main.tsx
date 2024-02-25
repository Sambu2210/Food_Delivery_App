import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoute from './AppRoute';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoute/>
    </Router>
  </React.StrictMode>,
)
