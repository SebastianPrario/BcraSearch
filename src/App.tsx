import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import Landing from './pages/Landing/Landing'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import Access from './pages/Access/Access'
import Dashboard from './pages/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BackgroundBlobs } from './components/BackgroundBlobs';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, isLoading } = useAuth();
  if (isLoading) return null;
  console.log(token);
  return token ? <>{children}</> : <Navigate to="/access" />;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <BackgroundBlobs />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/access" element={<Access />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
