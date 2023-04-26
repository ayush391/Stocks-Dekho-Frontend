import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppState } from './context/AppState';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppState>
  </React.StrictMode>
);
