import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AppState } from './context/AppState';
import { AppThemeProvider } from './context/ThemeContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState>
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <HashRouter>
            <CssBaseline />
            <App />
          </HashRouter>
        </AppThemeProvider>
      </QueryClientProvider>
    </AppState>
  </React.StrictMode>
);
