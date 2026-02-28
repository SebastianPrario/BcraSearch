
import { StyledFooter } from "../styled-components";
import { Mail, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h5 className="mb-4">Información de Contacto</h5>
            <div className="d-flex flex-column align-items-center gap-3 mb-4">
              <div className="d-flex align-items-center gap-2">
                <div style={{ background: 'var(--primary)', padding: '8px', borderRadius: '10px', color: 'white' }}>
                  <Mail size={18} />
                </div>
                <span style={{ fontWeight: 500 }}>chequesrechazados@icloud.com</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div style={{ background: 'var(--secondary)', padding: '8px', borderRadius: '10px', color: 'white' }}>
                  <MapPin size={18} />
                </div>
                <span style={{ fontWeight: 500 }}>Mar del Plata, Argentina</span>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="mb-0">© {new Date().getFullYear()} ConsultaBCRA. Todos los derechos reservados.</p>
              <small style={{ opacity: 0.6 }}>Esta aplicación no es oficial del BCRA. Los datos se obtienen de APIs públicas.</small>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}
