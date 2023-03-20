import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkThemeOptions, lightThemeOptions } from './themes/main';
import { Box, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// ROUTE PAGES
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ApplSent from './components/ApplSent';
import ApplResponse from './components/ApplResponse';
import ApplArchived from './components/ApplArchived';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import { AuthProvider, RequireAuth } from 'react-auth-kit';

function App() {
  // THEME CHANGING
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  /* State below checks first if there is localstorage for theme override
   -> if there isn't -> use system preference from code above (prefersDarkMode)
   -> else read localstorage (if it exists) and use it instead
  */
  const [darkMode, setDarkMode] = useState((): boolean => {
    const override = localStorage.getItem('themeoverride');
    if (override) {
      if (override === 'dark') {
        return true;
      } else {
        return false;
      }
    } else {
      if (prefersDarkMode) {
        return true;
      } else {
        return false;
      }
    }
  });

  /*
  Function below runs every time user click on theme switch inside Settings page,
  if so -> it means that app has to create new localstorage item for a specific theme based on current theme,
  so the next time app renders it checks for this item and sets overriden theme
  */
  function handleThemeChage(): void {
    const mode = darkMode ? 'light' : 'dark';
    localStorage.setItem('themeoverride', mode);
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  const darkTheme = createTheme(darkThemeOptions);
  const lightTheme = createTheme(lightThemeOptions);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ minWidth: '100vw', minHeight: '100vh' }}>
          <Paper sx={{ borderRadius: '0' }}>
            <AuthProvider authType={'cookie'} authName={'_auth'} cookieDomain={window.location.hostname} cookieSecure={false}>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/signin' element={<SignIn darkModeEnabled={darkMode} />} />
                  <Route
                    path='dashboard'
                    element={
                      <RequireAuth loginPath='/signin'>
                        <Dashboard />
                      </RequireAuth>
                    }
                  >
                    <Route index element={<ApplSent />} />
                    <Route path='sent' element={<ApplSent />} />
                    <Route path='response' element={<ApplResponse />} />
                    <Route path='archived' element={<ApplArchived />} />
                    <Route
                      path='settings'
                      element={<Settings isDarkModeEnabled={darkMode} changeDarkMode={handleThemeChage} />}
                    />
                    <Route path='profile' element={<Profile />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </AuthProvider>
          </Paper>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
