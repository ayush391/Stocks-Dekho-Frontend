import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7abbfc20',
      main: '#7abbfc',
      contrastText: '#fff'
    },
    secondary: {
      main: '#91D8E4',
      contrastText: '#fff'
    },
    white: {
      main: '#fff',
      contrastText: '#000'
    },
    danger: {
      main: '#FB2576',
      contrastText: '#fff'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          fontWeight: 'bold'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px'
        }
      }
    },
    MuiTextField: {
      root: {
        [`& fieldset`]: {
          borderRadius: 0
        }
      }
    }
  }
});

const AppTheme = responsiveFontSizes(createTheme(theme));

export default AppTheme;
