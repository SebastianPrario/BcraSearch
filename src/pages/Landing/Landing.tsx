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
import { FAQ } from "../../components/FAQ"

export default function Landing() {
  const [cuit, setCuit] = useState("")
  const { data, setData, loading, setLoading, setError, fetchData } = UseFech()
  const [show, setShow] = useState(false)
  const { history: searchHistory, addToHistory } = useSearchHistory()

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
    <Container className="d-flex flex-column container-fluid" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <NavBar />
      <main className="flex-grow-1">
        <StyledHero>
          <div className="container px-4">
            <h1>Consulta de Situación <br /><span style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Financiera & Bancaria</span></h1>
            <p className="mx-auto">
              Obtenga informes detallados sobre deudas bancarias y cheques rechazados en segundos. Información directa del Banco Central de la República Argentina.
            </p>
          </div>
        </StyledHero>

        <div className="container pb-5" style={{ marginTop: '-1rem' }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{ position: 'relative' }}>
                <Form
                  handleSubmit={handleSubmit}
                  cuit={cuit}
                  handleInputChange={handleInputChange}
                  loading={loading}
                />
              </div>

              {searchHistory.length > 0 && (
                <StyledHistoryList>
                  <div className="d-flex align-items-center gap-2 mb-3 mt-4 px-1">
                    <Clock size={16} style={{ color: 'var(--primary)' }} />
                    <span style={{ color: 'var(--text-dim)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Consultas Recientes</span>
                  </div>
                  <div className="row g-3">
                    {searchHistory.slice(0, 3).map((item) => (
                      <div className="col-md-4" key={item.cuit}>
                        <StyledHistoryItem onClick={() => handleHistoryClick(item.data)} style={{ height: '100%' }}>
                          <div className="info">
                            <span className="name text-truncate" style={{ maxWidth: '150px' }}>{item.denominacion}</span>
                            <span className="cuit">{formatearCuit(item.cuit)}</span>
                          </div>
                        </StyledHistoryItem>
                      </div>
                    ))}
                  </div>
                </StyledHistoryList>
              )}

              <FAQ />
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
    </Container >
  )
}
