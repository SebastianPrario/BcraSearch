import React from 'react'
import { StyledResultCard, DesktopContainer, MobileContainer, MobileDataCard } from '../../components/styled-components'
import { Card, Table } from 'react-bootstrap'
import type { Data, Cheque } from '../../types/api'
import { formatearImporte } from '../../lib/helpers/formaterImporte'
import ResultCard from '../../components/ResultCard/ResultCard'
import NoDataMessage from '../../components/NoDataMessage/NoDataMessage'


interface ResultPageProps {
  data: Data;
  content: React.RefObject<HTMLDivElement | null> | null;
}
export default function ResultPage({ data, content }: ResultPageProps) {
  const { deuda, chequesRechazados } = data

  if (!deuda && !chequesRechazados) {
    return (
      <div ref={content}>
        <Card style={{ borderRadius: '15px', border: 'none' }}>
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
      <Card style={{ borderRadius: '15px', border: 'none', background: 'transparent' }}>
        {deuda && <StyledResultCard className="card">
          <div className="card-header">
            <small>Información encontrada para la CUIT: {deuda?.identificacion}</small>
          </div>
          {<ResultCard deuda={deuda} />}
        </StyledResultCard>}

        {chequesRechazados && chequesRechazados.causales.length > 0 && (
          <StyledResultCard className="card mt-4" >
            <div className="card-header">
              <h5 className="mb-1">Cheques Rechazados</h5>
              <div className="d-flex flex-wrap gap-2">
                <small className='me-2'>Total: <b>{formatearImporte(total().total)}</b></small>
                <small>Cantidad: <b>{total().cantidad}</b></small>
              </div>
            </div>
            <div className="card-body">
              <DesktopContainer>
                <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                  <Table responsive striped bordered hover size="sm">
                    <thead className='text-center'>
                      <tr>
                        <th>Motivo</th>
                        <th>Numero</th>
                        <th>Fecha Rechazo</th>
                        <th>Importe</th>
                        <th>Fecha Pago</th>
                        <th>Estado Multa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chequesRechazados.causales.map((cheque, index) =>
                        cheque?.entidades.map((entidad, idx) =>
                          entidad.detalle.map((d, i) => (
                            <tr className='text-end' key={`${index}-${idx}-${i}`}>
                              <td className="text-start">{cheque.causal}</td>
                              <td>{d.nroCheque}</td>
                              <td>{d.fechaRechazo}</td>
                              <td className="text-end fw-bold">{formatearImporte(d.monto)}</td>
                              <td>{d.fechaPago ? d.fechaPago : 'N/A'}</td>
                              <td>{d.estadoMulta}</td>
                            </tr>
                          ))
                        )
                      )}
                    </tbody>
                  </Table>
                </div>
              </DesktopContainer>

              <MobileContainer>
                {chequesRechazados.causales.map((cheque, index) =>
                  cheque?.entidades.map((entidad, idx) =>
                    entidad.detalle.map((d, i) => (
                      <MobileDataCard key={`${index}-${idx}-${i}`}>
                        <div className="data-row">
                          <span className="label">Motivo</span>
                          <span className="value">{cheque.causal}</span>
                        </div>
                        <div className="data-row">
                          <span className="label">Número</span>
                          <span className="value">{d.nroCheque}</span>
                        </div>
                        <div className="data-row">
                          <span className="label">Fecha</span>
                          <span className="value">{d.fechaRechazo}</span>
                        </div>
                        <div className="data-row">
                          <span className="label">Importe</span>
                          <span className="value fw-bold">{formatearImporte(d.monto)}</span>
                        </div>
                        <div className="data-row">
                          <span className="label">Estado Multa</span>
                          <span className="value">{d.estadoMulta}</span>
                        </div>
                      </MobileDataCard>
                    ))
                  )
                )}
              </MobileContainer>
            </div>
          </StyledResultCard>
        )}
      </Card>
    </div>
  )
}
