import { formatearImporte } from '../../lib/helpers/formaterImporte'
import type { Deuda, Entidad } from '../../types/api'
import { DesktopContainer, MobileContainer, MobileDataCard, StyledStatusBadge, StyledBadge } from '../styled-components'

interface ResultCardProps {
  deuda: Deuda;
}

export default function ResultCard({ deuda }: ResultCardProps) {
  if (!deuda) return null;

  return (
    <div className="card-body p-4 p-md-5">
      <div className="mb-5">
        <label className="form-label fw-bold" style={{ color: 'var(--text-dim)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Razón Social / Denominación
        </label>
        <h3 className="fw-900 mb-0" style={{ color: 'var(--text-main)', letterSpacing: '-0.03em' }}>{deuda.denominacion}</h3>
        <div className="mt-2">
          <StyledBadge>CUIT: {deuda.identificacion}</StyledBadge>
        </div>
      </div>

      <div className="mt-5">
        <h6 className="fw-bold mb-4 d-flex align-items-center" style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
          <span style={{ width: '6px', height: '22px', background: 'linear-gradient(to bottom, var(--primary), var(--secondary))', display: 'inline-block', marginRight: '12px', borderRadius: '4px' }}></span>
          Situación Crediticia por Entidad
        </h6>

        <DesktopContainer>
          <div className="table-responsive" style={{ borderRadius: '16px', border: '1px solid var(--glass-border)', overflow: 'hidden' }}>
            <table className="mb-0">
              <thead>
                <tr>
                  <th className='text-start'>Entidad Financiera</th>
                  <th className='text-center'>Situación</th>
                  <th className='text-end'>Monto Consolidado</th>
                  <th className='text-center'>Atraso (Días)</th>
                </tr>
              </thead>
              <tbody>
                {deuda.periodos[0].entidades.map((entidad: Entidad, index: number) => (
                  <tr key={index}>
                    <td className="fw-600">{entidad.entidad}</td>
                    <td className='text-center'>
                      <StyledStatusBadge status={entidad.situacion === 1 ? 'ACTIVO' : 'ALTO RIESGO'}>
                        {entidad.situacion}
                      </StyledStatusBadge>
                    </td>
                    <td className="text-end fw-bold" style={{ color: 'var(--accent-number)', fontSize: '1.1rem' }}>
                      {formatearImporte(entidad.monto * 1000)}
                    </td>
                    <td className="text-center fw-500">{entidad.diasAtrasoPago}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DesktopContainer>

        <MobileContainer>
          {deuda.periodos[0].entidades.map((entidad: Entidad, index: number) => (
            <MobileDataCard key={index} style={{ borderLeft: `4px solid ${entidad.situacion === 1 ? 'var(--success)' : 'var(--danger)'}` }}>
              <div className="data-row">
                <span className="label">Entidad</span>
                <span className="value fw-bold">{entidad.entidad}</span>
              </div>
              <div className="data-row">
                <span className="label">Situación</span>
                <span className="value">
                  <StyledStatusBadge status={entidad.situacion === 1 ? 'ACTIVO' : 'ALTO RIESGO'}>
                    {entidad.situacion}
                  </StyledStatusBadge>
                </span>
              </div>
              <div className="data-row">
                <span className="label">Monto</span>
                <span className="value fw-bold" style={{ color: 'var(--accent-number)', fontSize: '1.1rem' }}>{formatearImporte(entidad.monto * 1000)}</span>
              </div>
              <div className="data-row">
                <span className="label">Atraso</span>
                <span className="value">{entidad.diasAtrasoPago} días</span>
              </div>
            </MobileDataCard>
          ))}
        </MobileContainer>
      </div>
    </div>
  )
}
