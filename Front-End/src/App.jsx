import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import RegistroAdmin from './pages/Register/Register';
import Dashboard from './pages/home/Dashboard';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registro-admin" element={<RegistroAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
