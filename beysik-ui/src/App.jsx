import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import LandingPage from './pages/LandingPage'; // Adjust path as needed
import theme from './theme'; // Import your shared theme
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your Router or other global components would go here */}
      <LandingPage />
      {/* You might have other routes/pages here */}
    </ThemeProvider>
  );
}

export default App;
