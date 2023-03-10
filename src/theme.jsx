import { createTheme, responsiveFontSizes } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
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
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '15px',
                    fontWeight: 'bold'
                },


            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '20px'
                },

            },
        },
    },
});


const AppTheme = responsiveFontSizes(createTheme(theme))

export default AppTheme