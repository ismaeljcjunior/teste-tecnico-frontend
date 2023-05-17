import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ICustonThemeProps } from './../interfaces/interfces';


export const theme: ICustonThemeProps = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
});