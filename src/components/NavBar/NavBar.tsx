import { Building2 } from 'lucide-react'
import { StyledNavbar } from '../Layout/StyledLayout'

export default function NavBar() {
  return (

    <StyledNavbar className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Building2 className="me-2" size={32} />
          Consultas BCRA
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Consultas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ayuda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div> */}
      </div>
    </StyledNavbar>
  )
}
