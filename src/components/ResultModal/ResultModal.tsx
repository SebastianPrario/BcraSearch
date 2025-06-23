import React from 'react'
import { Button } from 'react-bootstrap'
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
            <div className="text-end p-1">
                <Button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                    aria-label="Close"
                ></Button>
            </div>
            <Modal.Body>{children}</Modal.Body>
        </Modal>
    )
}
