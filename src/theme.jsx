import { createTheme, responsiveFontSizes } from '@mui/material';

const grey= {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
}
const blue= {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
}
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

export const darkThemeData = createTheme({
  palette: {
    mode: 'dark',
    primary: blue ,
    divider: grey[700],
    background: {
      default: grey[700],
      paper: grey[700],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
    danger: {
      main: '#FB2576',
      contrastText: '#fff'
    },
    components: {
     
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '15px',
            fontWeight: 'bold',
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
  },
});
export const darkTheme = responsiveFontSizes(createTheme(darkThemeData));

const AppTheme = responsiveFontSizes(createTheme(theme));

export default AppTheme;
