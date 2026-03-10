import { Building2, Sun, Moon, User } from 'lucide-react'
import { StyledNavbar, AnnouncementBadge } from '../../components/styled-components'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <StyledNavbar className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/" style={{ color: 'var(--text-main)' }}>
          <Building2 className="me-2" size={32} />
          Consultas BCRA
        </Link>

        <div className="d-flex align-items-center gap-3">
          <div className="d-none d-lg-flex justify-content-center mb-0">
            <AnnouncementBadge>
              Ahora con Alertas x Mail
            </AnnouncementBadge>
          </div>

          <button
            onClick={toggleTheme}
            className="btn btn-link text-decoration-none p-0"
            style={{ color: 'var(--text-main)', transition: 'transform 0.3s ease' }}
            title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>

          {token ? (
            <div className="d-flex align-items-center gap-2">
              <Link to="/dashboard" className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1">
                <User size={18} />
                Panel
              </Link>
              <button onClick={handleLogout} className="btn btn-link btn-sm text-danger text-decoration-none">
                Salir
              </button>
            </div>
          ) : (
            <Link to="/access" className="btn btn-primary btn-sm d-flex align-items-center gap-1">
              <User size={18} />
              Usuario
            </Link>
          )}

        </div>
      </div>
    </StyledNavbar>
  )
}
