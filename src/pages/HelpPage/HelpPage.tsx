import React from 'react';
import { Modal } from 'react-bootstrap';

interface HelpPageProps {
    handleClose: () => void;
}

export default function HelpPage({ handleClose }: HelpPageProps) {
  return (
    <>
        <Modal.Header closeButton onHide={handleClose}>
            <Modal.Title>Ayuda - Situación Crediticia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Fuente de la Información</h6>
            <p>La información de este sitio es suministrada en tiempo real por las APIs públicas del <strong>Banco Central de la República Argentina (BCRA)</strong>.</p>
            
            <h6 className="mt-4">Clasificación en la Central de Deudores</h6>
            <p>La situación de un deudor se clasifica según los días de atraso en el pago de sus deudas:</p>
            <ul>
                <li><strong>1. Normal:</strong> Atraso que no supere los 31 días.</li>
                <li><strong>2. Riesgo bajo:</strong> Atraso de más de 31 y hasta 90 días.</li>
                <li><strong>3. Riesgo medio:</strong> Atraso de más de 90 y hasta 180 días.</li>
                <li><strong>4. Riesgo alto:</strong> Atraso de más de 180 días hasta un año.</li>
                <li><strong>5. Irrecuperable:</strong> Atrasos superiores a un año.</li>
                <li><strong>6. Irrecuperable por disposición técnica:</strong> Deuda considerada incobrable por razones técnicas.</li>
            </ul>

            <h6 className="mt-4">Central de Cheques Rechazados</h6>
            <p>Esta sección informa sobre cheques que fueron rechazados por diversas causales, como:</p>
            <ul>
                <li><strong>Sin fondos suficientes:</strong> El motivo más común, falta de saldo en la cuenta.</li>
                <li><strong>Defectos formales:</strong> Errores en la confección del cheque (fecha, firma, etc.).</li>
                <li><strong>Cuenta cerrada:</strong> La cuenta desde la que se emitió el cheque fue cerrada.</li>
            </ul>

            <h6 className="mt-4">¿Qué hago si la información es incorrecta?</h6>
            <p>Si consideras que la información exhibida es incorrecta, debes contactar a la entidad financiera con la que operas para que ellos soliciten la rectificación ante el BCRA. Esta aplicación solo muestra los datos públicos y no puede modificarlos.</p>
        </Modal.Body>
    </>
  );
}
