import type React from "react"
import { useState, useEffect } from "react"
import {
  StyledHero,
  StyledHistoryList,
  StyledHistoryItem,
} from '../../components/styled-components'
import UseFech from "../../lib/hook/UseFech"
import { ResultModal } from "../../components/ResultModal/ResultModal"
import ResultPage from "../ResultPage/ResultPage"
import NavBar from "../NavBar/NavBar"
import Form from "../Form/Form"
import { formatearCuit } from "../../lib/helpers/formatearCuit"
import Footer from "../../components/Footer/Footer"
import { Container } from "react-bootstrap"
import { validarCuit } from "../../lib/helpers/validarCuit"
import FeedbackWidget from "../../components/FeedbackWidget/FeedbackWidget"
import { useSearchHistory } from "../../lib/hook/useSearchHistory"
import { Clock } from "lucide-react"

export default function Landing() {
  const [cuit, setCuit] = useState("")
  const { data, setData, loading, setLoading, setError, fetchData } = UseFech()
  const [show, setShow] = useState(false)
  const { history, addToHistory } = useSearchHistory()

  const handleClose = () => setShow(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormateado = formatearCuit(e.target.value)
    setCuit(valorFormateado)
  }

  // Guardar en historial cuando los datos llegan
  useEffect(() => {
    if (data && (data.deuda || data.chequesRechazados)) {
      const denominacion = data.deuda?.denominacion || "Información de Cheques";
      const cuitActual = data.deuda?.identificacion || data.chequesRechazados?.identificacion?.toString() || "";

      if (cuitActual) {
        addToHistory(cuitActual, denominacion, data);
      }
    }
  }, [data]);

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

  const handleHistoryClick = (historyData: any) => {
    setData(historyData);
    setShow(true);
  }

  return (
    <Container className="d-flex flex-column container-fluid">
      <NavBar />
      <StyledHero>
        <div className="container text-center  p-0 m-0">
          <h1 className="display-5 fw-bold">Consulta Cheques Rechazados y Deuda Bancaria BCRA</h1>
          <p className="lead mb-4">Consulta GRATIS por CUIT la Central de Deudores y Cheques Rechazados del Banco Central</p>
        </div>
      </StyledHero>
      <main className="flex-grow-1 py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Form
                handleSubmit={handleSubmit}
                cuit={cuit}
                handleInputChange={handleInputChange}
                loading={loading}
              />

              {history.length > 0 && (
                <StyledHistoryList>
                  <div className="d-flex align-items-center gap-2 mb-2 px-1">
                    <Clock size={16} style={{ color: 'var(--text-dim)' }} />
                    <span style={{ color: 'var(--text-dim)', fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase' }}>Consultas Recientes</span>
                  </div>
                  {history.map((item) => (
                    <StyledHistoryItem key={item.cuit} onClick={() => handleHistoryClick(item.data)}>
                      <div className="info">
                        <span className="name">{item.denominacion}</span>
                        <span className="cuit">{formatearCuit(item.cuit)}</span>
                      </div>
                      <span className="date">Hace momentos</span>
                    </StyledHistoryItem>
                  ))}
                </StyledHistoryList>
              )}
            </div>

            {data && (
              <ResultModal
                show={show}
                handleClose={handleClose}>
                {({ content }) => (
                  <ResultPage
                    data={data}
                    content={content}
                  />
                )}
              </ResultModal>
            )}
          </div>
          <Footer />
        </div>
      </main>
      <FeedbackWidget />
    </Container>
  )
}
