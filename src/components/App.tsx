import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import LandingPage from './LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;