import { Building2, Sun, Moon } from 'lucide-react'
import { StyledNavbar } from '../../components/styled-components'
import { useTheme } from '../../context/ThemeContext'

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledNavbar className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Building2 className="me-2" size={32} />
          Consultas BCRA
        </a>

        <div className="d-flex align-items-center gap-3">
          <button
            onClick={toggleTheme}
            className="btn btn-link me-4 text-decoration-none"
            style={{ color: 'var(--text-main)', transition: 'transform 0.3s ease' }}
            title={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>

          
        </div>
      </div>
    </StyledNavbar>
  )
}
