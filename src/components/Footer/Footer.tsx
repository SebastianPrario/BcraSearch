import React from 'react'

export default function Footer() {
  return (
    <div>
        <StyledFooter>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="d-flex align-items-center mb-3">
                <Building2 className="me-2" size={32} />
                <span className="footer-brand">ConsultaCUIT</span>
              </div>
              <p className="mb-4">
                Plataforma confiable para consultas de información tributaria. Acceda a datos actualizados de
                contribuyentes de forma rápida y segura.
              </p>
              <div className="d-flex gap-4">
                <a href="#">Términos de Uso</a>
                <a href="#">Privacidad</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Servicios</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Consulta CUIT</a>
                </li>
                <li className="mb-2">
                  <a href="#">Verificación Tributaria</a>
                </li>
                <li className="mb-2">
                  <a href="#">Reportes</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contacto</h5>
              <div className="mb-2">
                <Phone className="me-2" size={16} />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="mb-2">
                <Mail className="me-2" size={16} />
                <span>info@consultacuit.com</span>
              </div>
              <div className="mb-2">
                <MapPin className="me-2" size={16} />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="mb-0">© {new Date().getFullYear()} ConsultaCUIT. Todos los derechos reservados.</p>
          </div>
        </div>
      </StyledFooter>
    </div>
  )
}
