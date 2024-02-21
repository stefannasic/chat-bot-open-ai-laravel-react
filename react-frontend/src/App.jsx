import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/homeComponent';
import LoginComponent from './components/auth/loginComponent';
import RegisterComponent from './components/auth/registerComponent';
import DashboardComponent from './components/dashboard/dashboardComponent';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/dashboard" element={<DashboardComponent />} />
      <Route path="/" element={<HomeComponent />} />
    </Routes>
  );
}

export default App;
