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
    <StyledCard className="card mb-4">
      <div className="card-header">
        <h5 className="d-flex align-items-center mb-1">
          <Search className="me-2" size={20} />
          Consultar CUIT
        </h5>
        <small>Ingrese el CUIT en formato XX-XXXXXXXX-X o solo números</small>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cuit" className="form-label fw-semibold">
              CUIT
            </label>
            <StyledInput
              type="text"
              className="form-control form-control-lg"
              id="cuit"
              placeholder="20-12345678-9"
              value={cuit}
              onChange={handleInputChange}
              maxLength={13}
            />
          </div>
          <div className="d-grid">
            <StyledButton type="submit" className="btn btn-primary btn-lg" disabled={loading || !cuit}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Consultando...
                </>
              ) : (
                "Consultar CUIT"
              )}
            </StyledButton>
          </div>
        </form>
      </div>
    </StyledCard>
  );
};

export default Form;
