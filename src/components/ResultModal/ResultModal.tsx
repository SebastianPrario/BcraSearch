import React from 'react'
import Modal from 'react-bootstrap/Modal'

interface CustomModalProps {
    show: boolean
    children: React.ReactNode
    handleClose: () => void
}

export function ResultModal({ children, show , handleClose}: CustomModalProps) {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
        >
            <div className='p-1'>
                 <button type="button"  className="btn-close align-items-end" onClick={handleClose} aria-label="Close"></button>
            </div>
                      <Modal.Body>{children}</Modal.Body>
        </Modal>
    )
}
