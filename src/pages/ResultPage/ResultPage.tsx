import React from 'react'
import { StyledResultCard, DesktopContainer, MobileContainer, MobileDataCard } from '../../components/styled-components'
import { Card } from 'react-bootstrap'
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
      <Card style={{ background: 'transparent', border: 'none' }}>
        {deuda && (
          <StyledResultCard>
            <div className="card-header">
              <small style={{ opacity: 0.8 }}>Reporte consolidado para la identificación: {deuda?.identificacion}</small>
            </div>
            <ResultCard deuda={deuda} />
          </StyledResultCard>
        )}

        {chequesRechazados && chequesRechazados.causales.length > 0 && (
          <StyledResultCard className="mt-4">
            <div className="card-header">
              <h5 className="mb-1">Cheques Rechazados</h5>
              <div className="d-flex flex-wrap gap-2">
                <small className='me-2'>Total: <b>{formatearImporte(total().total)}</b></small>
                <small>Cantidad: <b>{total().cantidad}</b></small>
              </div>
            </div>
            <div className="card-body">
              <DesktopContainer>
                <table>
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
                            <td className="text-end fw-bold" style={{ color: 'var(--secondary)' }}>{formatearImporte(d.monto)}</td>
                            <td>{d.fechaPago ? d.fechaPago : 'N/A'}</td>
                            <td>{d.estadoMulta}</td>
                          </tr>
                        ))
                      )
                    )}
                  </tbody>
                </table>
              </DesktopContainer>

              <MobileContainer>
                {chequesRechazados.causales.map((cheque, index) =>
                  cheque?.entidades.map((entidad, idx) =>
                    entidad.detalle.map((d, i) => (
                      <MobileDataCard key={`${index}-${idx}-${i}`}>
                        <div className="data-row">
                          <span className="label" data-definition="Motivo por el cual el cheque fue rechazado por la entidad financiera.">Causal</span>
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
                          <span className="value fw-bold" style={{ color: 'var(--secondary)' }}>{formatearImporte(d.monto)}</span>
                        </div>
                        <div className="data-row">
                          <span className="label" data-definition="Estado actual de la multa correspondiente al rechazo.">Estado Multa</span>
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
