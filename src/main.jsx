import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import Navbar from "./Component/Navbar.jsx"

import { AuthProvider } from './Context/context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Navbar/>
      <App />  {/* App should wrap everything inside */}
    </AuthProvider>
  </StrictMode>
);
