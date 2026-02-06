import { Table } from 'react-bootstrap'
import { formatearImporte } from '../../lib/helpers/formaterImporte'
import type { Deuda, Entidad } from '../../types/api'
import { DesktopContainer, MobileContainer, MobileDataCard } from '../styled-components'

interface ResultCardProps {
  deuda: Deuda;
}

export default function ResultCard({ deuda }: ResultCardProps) {
  if (!deuda) return null;

  return (
    <div className="card-body">
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="mb-0">
            <strong>Razón Social:</strong>
            <p className="text-muted mb-2">{deuda.denominacion}</p>
          </div>
        </div>
      </div>
      <div>
        <h6 className="fw-bold mb-3">Central de Deudores del Sistema Financiero</h6>

        <DesktopContainer>
          <Table striped>
            <thead className='text-center'>
              <tr>
                <th className='text-start'>Entidad</th>
                <th className='text-start'>Situación</th>
                <th className='text-center'>Monto</th>
                <th className='text-start'>Dias de Atraso</th>
              </tr>
            </thead>
            <tbody>
              {deuda.periodos[0].entidades.map((entidad: Entidad, index: number) => (
                <tr key={index}>
                  <td>{entidad.entidad}</td>
                  <td
                    className='text-center fw-bold'
                    style={{ color: entidad.situacion === 1 ? '#166534' : '#991b1b' }}
                  >
                    {entidad.situacion}
                  </td>
                  <td className="text-end">
                    {formatearImporte(entidad.monto * 1000)}
                  </td>
                  <td className="text-center">{entidad.diasAtrasoPago}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </DesktopContainer>

        <MobileContainer>
          {deuda.periodos[0].entidades.map((entidad: Entidad, index: number) => (
            <MobileDataCard key={index}>
              <div className="data-row">
                <span className="label">Entidad</span>
                <span className="value">{entidad.entidad}</span>
              </div>
              <div className="data-row">
                <span className="label">Situación</span>
                <span className="value fw-bold" style={{ color: entidad.situacion === 1 ? '#166534' : '#991b1b' }}>
                  {entidad.situacion}
                </span>
              </div>
              <div className="data-row">
                <span className="label">Monto</span>
                <span className="value">{formatearImporte(entidad.monto * 1000)}</span>
              </div>
              <div className="data-row">
                <span className="label">Días Atraso</span>
                <span className="value">{entidad.diasAtrasoPago}</span>
              </div>
            </MobileDataCard>
          ))}
        </MobileContainer>
      </div>
    </div>
  )
}
