import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home/homeComponent';
import LoginComponent from './components/auth/loginComponent';
import RegisterComponent from './components/auth/registerComponent';
import DashboardComponent from './components/dashboard/dashboardComponent';
import ProfileComponent from './components/profile/profileComponent';
import AuthLayout from './layouts/authLayout';
import GuestLayout from './layouts/guestLayout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route element={<AuthLayout />}>
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/profile" element={<ProfileComponent />} />
      </Route>
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Route>
    </Routes>
  );
}

export default App;
