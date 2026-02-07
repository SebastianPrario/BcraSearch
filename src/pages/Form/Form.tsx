import { Search } from 'lucide-react'
import React from 'react'
import { StyledCard, StyledInput, StyledButton } from '../../components/styled-components'

interface FormComponentProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  cuit: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const Form: React.FC<FormComponentProps> = ({ handleSubmit, cuit, handleInputChange, loading }) => {
  return (
    <StyledCard className="mb-4">
      <div className="card-header">
        <h5 className="d-flex align-items-center mb-1">
          <Search className="me-2 text-primary" size={24} />
          Consultar Situación Bancaria
        </h5>
        <small>Ingrese el CUIT para obtener el reporte consolidado</small>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cuit" className="form-label fw-bold" style={{ color: 'var(--text-dim)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Número de CUIT
            </label>
            <StyledInput
              type="text"
              id="cuit"
              placeholder="Ej: 20-12345678-9"
              value={cuit}
              onChange={handleInputChange}
              maxLength={13}
            />
          </div>
          <div className="d-grid mt-2">
            <StyledButton type="submit" disabled={loading || !cuit}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status"></span>
                  Procesando...
                </>
              ) : (
                <>
                  <Search size={18} />
                  Consultar Ahora
                </>
              )}
            </StyledButton>
          </div>
        </form>
      </div>
    </StyledCard>
  );
};

export default Form;
