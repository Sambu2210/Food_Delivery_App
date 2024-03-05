import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoute from './AppRoute';
import Auth0ProviderNavigate from './auth/Auth0ProviderNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderNavigate>
          <AppRoute/>
        </Auth0ProviderNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
