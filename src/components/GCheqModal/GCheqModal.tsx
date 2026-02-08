import type React from "react"
import { Modal, Button } from "react-bootstrap"
import {
    ShieldCheck,
    FileEdit,
    Activity,
    ListOrdered,
    FileText,
    BarChart3,
    Search,
    ExternalLink,
    X,
    Sparkles
} from "lucide-react"
import { GCheqModalStyles, StyledButton } from "../styled-components"

interface GCheqModalProps {
    show: boolean
    handleClose: () => void
}

export const GCheqModal: React.FC<GCheqModalProps> = ({ show, handleClose }) => {
    const features = [
        {
            icon: <ShieldCheck size={20} />,
            title: "Seguridad y Organización",
            description: "Registrá y organizá tus cheques de terceros de manera simple y segura."
        },
        {
            icon: <FileEdit size={20} />,
            title: "Control de Errores",
            description: "Carga de cheques con validación automática para minimizar errores humanos."
        },
        {
            icon: <Activity size={20} />,
            title: "Situación Crediticia",
            description: "Control en tiempo real de la situación crediticia del emisor e informes de cheques rechazados."
        },
        {
            icon: <ListOrdered size={20} />,
            title: "Ordenamiento Inteligente",
            description: "Múltiples opciones para ordenar y visualizar tus cheques en cartera según tu necesidad."
        },
        {
            icon: <FileText size={20} />,
            title: "Órdenes de Pago & PDF",
            description: "Generá salidas de cheques con impresión profesional en PDF y gestión de retenciones."
        },
        {
            icon: <BarChart3 size={20} />,
            title: "Informes Detallados",
            description: "Listados de cheques por cliente y periodos de tiempo para un control total del flujo."
        },
        {
            icon: <Search size={20} />,
            title: "Búsqueda Rápida",
            description: "Encontrá cualquier cheque al instante simplemente ingresando su número."
        }
    ]

    return (
        <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static">
            <Modal.Header className="border-0 pb-0">
                <Modal.Title className="w-100 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <Sparkles className="text-warning" size={24} />
                        <h4 className="mb-0 fw-bold" style={{ background: 'linear-gradient(to right, #818cf8, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            GCheq - Gestión de cheques de terceros - PRUEBA GRATUITA
                        </h4>
                    </div>
                    <Button variant="link" onClick={handleClose} className="p-0 text-white opacity-50 hover-opacity-100">
                        <X className="text-primary" size={24} />
                    </Button>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-4">
                <GCheqModalStyles>
                    <div className="row g-3">
                        {features.map((feature, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="feature-item h-100">
                                    <div className="icon-wrapper">
                                        {feature.icon}
                                    </div>
                                    <div className="content">
                                        <h6>{feature.title}</h6>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-section">
                        <h5>Prueba Gratis !!! ✨</h5>
                        <p>Descubre cómo GCheq puede transformar la administración financiera de tu empresa con su interfaz intuitiva.</p>
                        <div className="d-flex justify-content-center">
                            <StyledButton
                                as="a"
                                href="https://app.chequesrechazados.com.ar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3"
                            >
                                Acceder a GCheq <ExternalLink size={18} />
                            </StyledButton>
                        </div>
                    </div>
                </GCheqModalStyles>
            </Modal.Body>
        </Modal>
    )
}
