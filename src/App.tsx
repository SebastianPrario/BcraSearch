import { GlobalStyle } from './GlobalStyle'
import Landing from './pages/Landing/Landing'
import { ThemeProvider } from './context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  )
}

export default App
