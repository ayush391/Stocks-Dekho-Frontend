import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppState } from './context/AppState';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppThemeProvider } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState>
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <CssBaseline />
          <App />
        </AppThemeProvider>
      </QueryClientProvider>
    </AppState>
  </React.StrictMode>
);
