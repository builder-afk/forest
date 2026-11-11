import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context/AppContext';
import { AppContent } from './App';
import { initWebVitals } from './utils/reportWebVitals';
import './styles/index.css';

// Initialize Real User Monitoring for Core Web Vitals
initWebVitals();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <AppContent />
    </AppProvider>
  </React.StrictMode>
);

