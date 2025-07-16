import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useReactToPrint } from 'react-to-print'
import { Printer , X } from 'lucide-react';

interface CustomModalProps {
    show: boolean
    children: (props: { content: React.RefObject<HTMLDivElement| null>  }) => React.ReactNode | null
    handleClose: () => void
   
}

export function ResultModal({ children, show , handleClose}: CustomModalProps) {
 
    const content = useRef<HTMLDivElement>(null);
    const  reactToPrintFn  =  useReactToPrint ({ 
        contentRef: content,
        documentTitle: "BcraApi" 
      }) ;
  
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
                <Button variant='success' size='sm' className='ms-auto' onClick={reactToPrintFn}>
                    <Printer size={16}/>
                </Button>
                <Button variant='danger' size='sm' className='ms-2' onClick={handleClose}>
                    <X size={16}/>
                </Button>
            </Modal.Header>
             <Modal.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            {children( { content: content})}
            </Modal.Body>
        </Modal>
    )
}
