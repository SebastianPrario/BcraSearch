import { Row } from "react-bootstrap";
import { StyledFooter } from "../styled-components";
import { Mail, MapPin } from "lucide-react";
export default function Footer() {
  return (
      <StyledFooter>
        <div className="container py-2">
          <div className="row text-center px-5">
            <div className="col-12 ">
              <h5>Contacto</h5>
              <Row className="d-flex flex-row m-auto">
              <div className="mb-2 col-lg-12">
                <Mail className="me-2" size={16} />
                <span>chequesrechazados@icloud.com</span>
              </div>
              <div className="mb-2 col-lg-12">
                <MapPin className="me-2" size={16} />
                <span>Mar del Plata, Argentina</span>
              </div>
               </Row>  
            </div>
          </div>

       
            <p className="mb-0 text-center">© {new Date().getFullYear()} ConsultaBCRA. Todos los derechos reservados.</p>
      
        </div>
      </StyledFooter>
  )
}
