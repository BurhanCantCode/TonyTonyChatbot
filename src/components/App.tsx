import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import LandingPage from './LandingPage';

function App() {
  const handleNext = () => {
    console.log('Next button clicked');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage onNext={handleNext} />
    </ThemeProvider>
  );
}

export default App;