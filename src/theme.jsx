const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      light: '#7abbfc20',
      main: '#7abbfc',
      dark: '#7abbfc',
      contrastText: '#fff'
    },
    secondary: {
      light: '#91D8E4',
      main: '#91D8E4',
      dark: '#91D8E4',
      contrastText: '#fff'
    },
    white: {
      light: '#fff',
      main: '#fff',
      dark: '#000',
      contrastText: '#000'
    },
    danger: {
      light: '#FB2576',
      main: '#FB2576',
      dark: '#FB2576',
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
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // backgroundColor: 'white'
        }
      }
    }
  }
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      light: '#7abbfc20',
      main: '#7abbfc',
      dark: '#7abbfc',
      contrastText: '#fff'
    },
    secondary: {
      light: '#91D8E4',
      main: '#91D8E4',
      dark: '#91D8E4',
      contrastText: '#fff'
    },
    white: {
      light: '#fff',
      main: '#000',
      dark: '#000',
      contrastText: '#fff'
    },
    danger: {
      light: '#FB2576',
      main: '#FB2576',
      dark: '#FB2576',
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
    },
    MuiInput: {
      styleOverrides: {
        root: {
          // backgroundColor: 'white'
        }
      }
    }
  }
};
const createThemeWithMode = (mode = 'light') => {
  return mode === 'dark' ? darkTheme : lightTheme;
};
export default createThemeWithMode;
