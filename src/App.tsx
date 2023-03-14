import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkThemeOptions, lightThemeOptions } from './themes/main';
import { Box, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';

// ROUTE PAGES
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ApplSent from './components/ApplSent';
import ApplResponse from './components/ApplResponse';
import ApplArchived from './components/ApplArchived';

function App() {
  // THEME CHANGING
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState((): boolean => {
    if (prefersDarkMode) {
      return true;
    } else {
      return false;
    }
  });
  const darkTheme = createTheme(darkThemeOptions);
  const lightTheme = createTheme(lightThemeOptions);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box sx={{ minWidth: '100vw', minHeight: '100vh' }}>
        <Paper sx={{ borderRadius: '0' }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='dashboard' element={<Dashboard />}>
                <Route index path='*' element={<ApplSent />} />
                <Route path='response' element={<ApplResponse />} />
                <Route path='archived' element={<ApplArchived />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
