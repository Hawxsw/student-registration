import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import Login from './pages/Login/Login';
import RegistroAdmin from './pages/Register/Admin/RegisterAdmin';
import ListaAlunos from './pages/home/Student';
import Dashboard from './pages/home/Dashboard';
import DashboardLayout from './pages/components/DashboardLayout';
import { LayoutProvider } from './pages/context/LayoutContext';
import HeaderLayout from './pages/components/HeaderLayout';
import { GlobalStyle } from './styles/GlobalStyle';
import { useTheme } from './pages/context/ThemeContext';
import { themes } from './pages/context/style/themes';
import ListaAdmin from './pages/home/admin';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <StyledThemeProvider theme={themes[theme]}>
        <>
          <GlobalStyle />
          <LayoutProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<HeaderLayout><DashboardLayout><Dashboard /></DashboardLayout></HeaderLayout>} />
              <Route path="/alunos" element={<HeaderLayout><DashboardLayout><ListaAlunos /></DashboardLayout></HeaderLayout>} />
              <Route path="/admins" element={<HeaderLayout><DashboardLayout><ListaAdmin /></DashboardLayout></HeaderLayout>} />
              <Route path="/registro-admin" element={<RegistroAdmin />} />
            </Routes>
          </LayoutProvider>
        </>
      </StyledThemeProvider>
    </Router>
  );
}

export default App;
