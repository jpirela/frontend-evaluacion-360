// src/App.js
import React, { lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { themeChange } from 'theme-change';
import checkAuth from './app/auth';
import useVerifyUser from './app/verifyUser';
import initializeApp from './app/init';

const Layout = lazy(() => import('./containers/Layout'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

// Initializing different libraries
initializeApp();

function App() {

  useVerifyUser(); 

  useEffect(() => {
    themeChange(false);
  }, []);

  // Check for login and initialize axios
  const token = checkAuth();
  
    return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas que utilizan los componentes genéricos */}
        <Route path="/app/*" element={<Layout />} />

        {/* Redirigir todas las rutas no reconocidas */}
        <Route path="*" element={<Navigate to={token ? "/app/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
