import { StyledResultCard } from '../styled-components'

export default function NoDataMessage() {
  return (
    <StyledResultCard className="card">
      <div className="card-header">
        <h5 className="mb-1">Sin Resultados</h5>
      </div>
      <div className="card-body">
        <p className='ms-3 mt-2'>No se encontraron datos para la CUIT proporcionada.</p>
      </div>
    </StyledResultCard>
  )
}
