import styled from "styled-components"

export const StyledCard = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-surface);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  .card-header {
    background: var(--color-background);
    color: var(--color-primary);
    border-radius: 8px 8px 0 0 !important;
    border-bottom: 1px solid var(--color-border);
    padding: 1.25rem 1.5rem;
    
    h5 {
      margin: 0;
      font-weight: 700;
      font-size: 1.1rem;
      letter-spacing: -0.5px;
    }
    
    small {
      color: var(--color-secondary);
      font-size: 0.875rem;
      margin-top: 0.25rem;
      display: block;
    }
  }
  
  .card-body {
    padding: 1.5rem;
  }
`

export const StyledButton = styled.button`
  background: var(--color-accent);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  &:hover:not(:disabled) {
    background: #1d4ed8; /* Blue 700 */
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  &:disabled {
    background: #cbd5e1; /* Slate 300 */
    color: #94a3b8; /* Slate 400 */
    cursor: not-allowed;
    box-shadow: none;
  }
`

export const StyledInput = styled.input`
  border: 1px solid #cbd5e1; /* Slate 300 */
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: var(--color-surface);
  color: var(--color-primary);
  
  &:focus {
    background: var(--color-surface);
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); /* Blue 600 with opacity */
    outline: none;
  }
  
  &::placeholder {
    color: #94a3b8; /* Slate 400 */
  }
`

export const StyledResultCard = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 8px;
  width: 100%;
  margin: 0;
  max-width: 100%;
  overflow-x: auto;
  background: var(--color-surface);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  .card-header {
    background: var(--color-background);
    color: var(--color-primary);
    border-radius: 8px 8px 0 0 !important;
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 1.5rem;
    font-weight: 600;
  }
`

export const StyledBadge = styled.span`
  background: #f1f5f9; /* Slate 100 */
  color: #475569; /* Slate 600 */
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.25rem;
  display: inline-block;
  border: 1px solid #e2e8f0; /* Slate 200 */
`

export const StyledStatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${(props) =>
    props.status === "ACTIVO"
      ? `
    background: #dcfce7; /* Green 100 */
    color: #166534; /* Green 700 */
    border: 1px solid #bbf7d0; /* Green 200 */
  `
      : `
    background: #fee2e2; /* Red 100 */
    color: #991b1b; /* Red 800 */
    border: 1px solid #fecaca; /* Red 200 */
  `}
`

export const StyledAlert = styled.div<{ variant: "success" | "danger" }>`
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  font-weight: 500;
  
  ${(props) =>
    props.variant === "success"
      ? `
    background: #f0fdf4; /* Green 50 */
    color: #166534; /* Green 700 */
    border-color: #bbf7d0; /* Green 200 */
  `
      : `
    background: #fef2f2; /* Red 50 */
    color: #991b1b; /* Red 800 */
    border-color: #fecaca; /* Red 200 */
  `}
`
