import { ThemeOptions } from '@mui/material/styles';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#cf0df1',
    },
  },
};
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ce03f1',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
};

export { darkThemeOptions, lightThemeOptions };
