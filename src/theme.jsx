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
    primary: grey ,
    divider: grey[700],
    background: {
      default: grey[700],
      paper: grey[700],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
    components: {
      MuiAppBarRoot:{
        light: '#7abbfc20',
        main: '#7abbfc',
        contrastText: '#fff'
      },
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
  },
});
export const darkTheme = responsiveFontSizes(createTheme(darkThemeData));

const AppTheme = responsiveFontSizes(createTheme(theme));

export default AppTheme;
