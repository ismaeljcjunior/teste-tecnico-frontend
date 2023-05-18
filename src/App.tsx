
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { PageLogin } from './pages/login/PageLogin'
import { theme } from './shared/theme/theme';
import { Home } from './pages/home/Home';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  )
}


