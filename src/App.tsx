import { GlobalStyle } from './GlobalStyle'
import Landing from './pages/Landing/Landing'
import { ThemeProvider } from './context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BackgroundBlobs } from './components/BackgroundBlobs';

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <BackgroundBlobs />
      <Landing />
    </ThemeProvider>
  )
}

export default App
