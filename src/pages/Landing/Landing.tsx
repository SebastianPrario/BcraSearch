import type React from "react"
import { useState } from "react"
import {
  StyledHero,
} from '../../components/styled-components'
import UseFech from "../../lib/hook/UseFech"
import { ResultModal } from "../../components/ResultModal/ResultModal"
import ResultPage from "../ResultPage/ResultPage"
import NavBar from "../NavBar/NavBar"
import Form from "../Form/Form"
import { formatearCuit } from "../../lib/helpers/formatearCuit"
import Footer from "../../components/Footer/Footer"
import { Container } from "react-bootstrap"


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
    <Container className="d-flex flex-column container-fluid">
      <NavBar/>
      <StyledHero>
        <div className="container text-center  p-0 m-0">
          <h1 className="display-5 fw-bold">Consulta de CUIT</h1>
          <p className="lead">Ingrese el CUIT para obtener información sobre su Situación Bancaria</p>
        </div>
      </StyledHero>
      <main className="flex-grow-1 py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Form 
              handleSubmit = {handleSubmit}
              cuit = {cuit}
              handleInputChange = {handleInputChange}
              loading = {loading}
              />
            </div>
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
          <Footer/>
        </div>
      </main>
    </Container>
  )
}
