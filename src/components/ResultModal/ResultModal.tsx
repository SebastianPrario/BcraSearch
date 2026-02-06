import React, { useRef, useState } from 'react'
import HelpPage from '../../pages/HelpPage/HelpPage'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useReactToPrint } from 'react-to-print'
import { Printer, X, HelpCircle, FileDown } from 'lucide-react';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface CustomModalProps {
    show: boolean
    children: (props: { content: React.RefObject<HTMLDivElement | null> }) => React.ReactNode | null
    handleClose: () => void

}

export function ResultModal({ children, show, handleClose }: CustomModalProps) {


    const [showModalHelp, setShowModalHelp] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const handleShowModalHelp = () => setShowModalHelp(true);
    const handleCloseModalHelp = () => setShowModalHelp(false);

    const content = useRef<HTMLDivElement>(null);

    const downloadPdf = async () => {
        if (!content.current) return;

        setIsExporting(true);
        try {
            const canvas = await html2canvas(content.current, {
                scale: 2,
                logging: false,
                useCORS: true
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('reporte-bcra.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsExporting(false);
        }
    };

    const reactToPrintFn = useReactToPrint({
        contentRef: content,
        documentTitle: "BcraApi"
    });


    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
        >
            <Modal.Header  >
                <h5 className="mb-0  me-5">Resultado de la Consulta</h5>
                <Button variant='info' size='sm' className='ms-auto' onClick={handleShowModalHelp}>
                    <HelpCircle size={16} />
                </Button>
                <Button
                    variant='primary'
                    size='sm'
                    className='ms-2'
                    onClick={downloadPdf}
                    disabled={isExporting}
                >
                    {isExporting ? <span className="spinner-border spinner-border-sm" /> : <FileDown size={16} />}
                </Button>
                <Button variant='success' size='sm' className='ms-2' onClick={reactToPrintFn}>
                    <Printer size={16} />
                </Button>
                <Button variant='danger' size='sm' className='ms-2' onClick={handleClose}>
                    <X size={16} />
                </Button>
            </Modal.Header>
            <Modal.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                {children({ content: content })}
            </Modal.Body>
            <Modal show={showModalHelp} onHide={handleCloseModalHelp} centered>
                <HelpPage handleClose={handleCloseModalHelp} />
            </Modal>
        </Modal>
    )
}
