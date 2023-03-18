import './global.css';
import 'virtual:fonts.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { WrappedApp } from './App';

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>,
);
