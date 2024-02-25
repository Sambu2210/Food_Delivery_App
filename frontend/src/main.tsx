import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoute from './AppRoute';
import Auth0ProviderNavigate from './auth/Auth0ProviderNavigate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderNavigate>
        <AppRoute/>
      </Auth0ProviderNavigate>
    </Router>
  </React.StrictMode>,
)
