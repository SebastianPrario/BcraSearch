import type React from "react"
import { useState } from "react"
import { Search, Building2 } from "lucide-react"
import {
  StyledNavbar,
  StyledHero,
  StyledCard,
  StyledButton,
  StyledInput,
} from '../../components/styled-components'
import UseFech from "../../lib/hook/UseFech"
import { ResultModal } from "../../components/ResultModal/ResultModal"
import ResultPage from "../ResultPage/ResultPage"


export default function Landing() {
  const [cuit, setCuit] = useState("")
  const { data, loading , setLoading, setError,  fetchData } = UseFech()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const validarCuit = (cuit: string) => {
    const cuitLimpio = cuit.replace(/[-\s]/g, "")
    if (cuitLimpio.length !== 11 || !/^\d+$/.test(cuitLimpio)) {
      return false
    }
    return true
  }

  const formatearCuit = (valor: string) => {
    const numeros = valor.replace(/\D/g, "")
    const limitado = numeros.slice(0, 11)
    
    if (limitado.length >= 2) {
      let formateado = limitado.slice(0, 2)
      if (limitado.length > 2) {
        formateado += "-" + limitado.slice(2, 10)
      }
      if (limitado.length > 10) {
        formateado += "-" + limitado.slice(10)
      }
     
      return formateado
    }

    return limitado
  }
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormateado = formatearCuit(e.target.value)
    setCuit(valorFormateado)

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validarCuit(cuit)) {
      setError("Por favor ingrese un CUIT válido (11 dígitos)")
      return
    }
    setLoading(true)
    setError("")
    try {
      const cuitLimpio = cuit.replace(/[-\s]/g, "")
      fetchData(cuitLimpio)
    } catch (error) {
      console.log(error)
      setError("Error al consultar el CUIT. Intente nuevamente.")
    } finally {
      setShow(true)
      setLoading(false)
      setCuit("") 
    }
  }
  
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <StyledNavbar className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <Building2 className="me-2" size={32} />
            ConsultaBCRA
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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
          </div>
        </div>
      </StyledNavbar>

      {/* Hero Section */}
      <StyledHero>
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Consulta de CUIT</h1>
          <p className="lead">Ingrese el CUIT para obtener información sobre su Situación Bancaria</p>
        </div>
      </StyledHero>

      {/* Main Content */}
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Formulario */}
              <StyledCard className="card mb-4">
                <div className="card-header">
                  <h5 className="d-flex align-items-center mb-1">
                    <Search className="me-2" size={20} />
                    Consultar CUIT
                  </h5>
                  <small>Ingrese el CUIT en formato XX-XXXXXXXX-X o solo números</small>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="cuit" className="form-label fw-semibold">
                        CUIT
                      </label>
                      <StyledInput
                        type="text"
                        className="form-control form-control-lg"
                        id="cuit"
                        placeholder="20-12345678-9"
                        value={cuit}
                        onChange={handleInputChange}
                        maxLength={13}
                      />
                    </div>


                    <div className="d-grid">
                      <StyledButton type="submit" className="btn btn-primary btn-lg" disabled={loading || !cuit}>
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Consultando...
                          </>
                        ) : (
                          "Consultar CUIT"
                        )}
                      </StyledButton>
                    </div>
                  </form>
                </div>
              </StyledCard>

             
              {data && (
                <ResultModal 
                  show={show}
                  handleClose={handleClose}>
                  <ResultPage
                  data={data}
                  />
                </ResultModal>
              )}
            </div>
          </div>
        </div>
      </main>

    
      
    </div>
  )
}
