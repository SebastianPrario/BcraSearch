import React from 'react'
import { StyledResultCard } from '../../components/styled-components'
import { Card, Table } from 'react-bootstrap'
import type { Data, Cheque } from '../../types/api'
import { formatearImporte } from '../../lib/helpers/formaterImporte'
import ResultCard from '../../components/ResultCard/ResultCard'
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage'


interface ResultPageProps {
  data: Data;
  content: React.RefObject<HTMLDivElement | null > | null;
}
export default function ResultPage ({data, content}: ResultPageProps) {
  const { deuda , chequesRechazados } = data
 
  if (!deuda && !chequesRechazados) {
    return (
      <div ref={content}>
        <Card style={{ borderRadius: '15px',  border: 'none' }}>
          <NoDataMessage />
        </Card>
      </div>
    );
  }
  const total = () => {
    let total = 0;
    let cantidad = 0;
    
    chequesRechazados?.causales.forEach((cheque: Cheque) => {
      cheque.entidades.forEach((entidad) => {
        entidad.detalle.forEach((d) => {
          total += d.monto;
          cantidad += 1;
        });
      });
    });
    
    return { total, cantidad };
  }
  return (
   
    <div ref={content}>
    <Card style={{ borderRadius: '15px',  border: 'none' }}>
      {deuda && <StyledResultCard className="card">
                  <div className="card-header">
                    <small>Información encontrada para la CUIT: {deuda?.identificacion}</small>
                  </div>
                  {  <ResultCard deuda={deuda} /> }
                </StyledResultCard>}

        {chequesRechazados && chequesRechazados.causales.length > 0 && (
          <StyledResultCard className="card mt-4" >      
            <div className="card-header">
              <h5 className="mb-1">Información de Cheques Rechazados para la CUIT: {chequesRechazados?.identificacion}</h5>
              <small className='me-2'>Importe Total en Cheques Rechazados: <b>{formatearImporte(total().total)}</b></small>
              <small>Cantidad de Cheques Rechazados: <b>{total().cantidad}</b> cheques</small>
            </div>
            <div className="card-body" style={{ maxHeight: '500px', overflowY: 'auto' }}>
              <Table responsive striped bordered hover  size="sm" style={{ tableLayout: 'fixed' }}>
                <thead className='text-center'>
                  <tr>
                    <th style={{ width: '15%' }}>Motivo</th>
                    <th style={{ width: '12%' }}>Numero</th>
                    <th style={{ width: '15%' }}>Fecha Rechazo</th>
                    <th style={{ width: '18%' }}>Importe</th>
                    <th style={{ width: '15%' }}>Fecha Pago</th>
                    <th style={{ width: '15%' }}>Fecha Pago Multa</th>
                    <th style={{ width: '12%' }}>Estado Multa</th>
                    </tr>
                </thead>
                <tbody>
                  {chequesRechazados.causales.map((cheque, index) =>
                    cheque?.entidades.map((entidad, idx) =>
                      entidad.detalle.map((d, i) => (
                        <tr  className='text-end' key={`${index}-${idx}-${i}`}>
                          <td>{cheque.causal}</td>
                          <td className='text-end'>{d.nroCheque}</td> 
                          <td>{d.fechaRechazo}</td>
                          <td className="text-end">{formatearImporte(d.monto)}</td>
                          <td>{d.fechaPago ? d.fechaPago : 'N/A'}</td>
                          <td>{d.fechaPagoMulta ? d.fechaPagoMulta : 'N/A'}</td>
                          <td>{d.estadoMulta}</td>
                        </tr>
                      ))
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </StyledResultCard>
        )}
    </Card>
    </div>
  )
}
