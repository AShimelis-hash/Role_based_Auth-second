import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
          {/* Add more routes here as needed */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

