import React, { useEffect } from 'react'
import { GlobalStyle } from './GlobalStyle'
import Landing from './pages/Landing/Landing'
import { ThemeProvider } from './context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initGA } from './lib/analytics'

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  )
}

export default App
