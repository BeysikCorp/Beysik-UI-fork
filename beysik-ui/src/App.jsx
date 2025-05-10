import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import LandingPage from './pages/LandingPage';
import NewArrivals from './pages/NewArrivals';
import Navbar from './components/Navbar';
import theme from './theme';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;