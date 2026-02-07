import { formatearImporte } from '../../lib/helpers/formaterImporte'
import type { Deuda, Entidad } from '../../types/api'
import { DesktopContainer, MobileContainer, MobileDataCard, StyledStatusBadge } from '../styled-components'

interface ResultCardProps {
  deuda: Deuda;
}

export default function ResultCard({ deuda }: ResultCardProps) {
  if (!deuda) return null;

  return (
    <div className="card-body p-4">
      <div className="mb-4">
        <label className="form-label fw-bold" style={{ color: 'var(--text-dim)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Razón Social / Denominación
        </label>
        <h4 className="fw-bold" style={{ color: 'var(--text-main)', letterSpacing: '-0.02em' }}>{deuda.denominacion}</h4>
      </div>

      <div className="mt-5">
        <h6 className="fw-bold mb-4 d-flex align-items-center" style={{ color: 'var(--text-main)' }}>
          <span style={{ width: '4px', height: '18px', background: 'var(--primary)', display: 'inline-block', marginRight: '10px', borderRadius: '2px' }}></span>
          Detalle por Entidad Financiera
        </h6>

        <DesktopContainer>
          <table>
            <thead>
              <tr>
                <th className='text-start'>Entidad</th>
                <th className='text-center'>Situación</th>
                <th className='text-end'>Monto Consolidado</th>
                <th className='text-center'>Días Atraso</th>
              </tr>
            </thead>
            <tbody>
              {deuda.periodos[0].entidades.map((entidad: Entidad, index: number) => (
                <tr key={index}>
                  <td>{entidad.entidad}</td>
                  <td className='text-center'>
                    <StyledStatusBadge status={entidad.situacion === 1 ? 'ACTIVO' : 'ALTO RIESGO'}>
                      {entidad.situacion}
                    </StyledStatusBadge>
                  </td>
                  <td className="text-end fw-bold" style={{ color: 'var(--secondary)' }}>
                    {formatearImporte(entidad.monto * 1000)}
                  </td>
                  <td className="text-center">{entidad.diasAtrasoPago}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DesktopContainer>

        <MobileContainer>
          {deuda.periodos[0].entidades.map((entidad: Entidad, index: number) => (
            <MobileDataCard key={index}>
              <div className="data-row">
                <span className="label">Entidad</span>
                <span className="value">{entidad.entidad}</span>
              </div>
              <div className="data-row">
                <span className="label" data-definition="Escala del 1 al 5 que indica el nivel de cumplimiento del deudor.">Situación</span>
                <span className="value">
                  <StyledStatusBadge status={entidad.situacion === 1 ? 'ACTIVO' : 'ALTO RIESGO'}>
                    {entidad.situacion}
                  </StyledStatusBadge>
                </span>
              </div>
              <div className="data-row">
                <span className="label">Monto</span>
                <span className="value fw-bold" style={{ color: 'var(--secondary)' }}>{formatearImporte(entidad.monto * 1000)}</span>
              </div>
              <div className="data-row">
                <span className="label" data-definition="Cantidad de días de retraso en el pago de las obligaciones.">Días Atraso</span>
                <span className="value">{entidad.diasAtrasoPago}</span>
              </div>
            </MobileDataCard>
          ))}
        </MobileContainer>
      </div>
    </div>
  )
}
