import styled from "styled-components"

export const StyledNavbar = styled.nav`
  background: var(--surface);
  box-shadow: var(--shadow);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
  margin-bottom: 2rem;
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--primary) !important;
    letter-spacing: -0.025em;
       
    &:hover {
      color: var(--accent) !important;
    }
  }
  
  .navbar-nav .nav-link {
    color: var(--text-muted) !important;
    font-weight: 500;
    margin: 0 0.5rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--accent) !important;
    }
  }
`

export const StyledHero = styled.div`
  background: transparent;
  padding: 3rem 0;
  text-align: center;
  
  h1 {
    color: var(--primary);
    font-weight: 800;
    font-size: 2.5rem;
    letter-spacing: -0.05em;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-muted);
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
    font-weight: 400;
  }
`

export const StyledCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  &:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--accent);
  }
  
  .card-header {
    background: var(--primary);
    color: white;
    padding: 1.25rem;
    border: none;
    
    h5 {
      margin: 0;
      font-weight: 600;
      letter-spacing: -0.01e;
    }
    
    small {
      color: var(--border);
      opacity: 0.8;
    }
  }

  .card-body {
    padding: 2rem;
  }
`

export const StyledButton = styled.button`
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    background: var(--accent-hover);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: var(--text-muted);
  }
`

export const StyledInput = styled.input`
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  width: 100%;
  transition: all 0.2s ease;
  color: var(--text);
  
  &::placeholder {
    color: var(--text-muted);
  }
  
  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    outline: none;
  }
`

export const StyledResultCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
  
  .card-header {
    background: var(--primary-light);
    color: white;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--border);
  }

  .card-body {
    overflow-x: auto;
  }
`

export const StyledBadge = styled.span`
  background: var(--background);
  color: var(--primary);
  border: 1px solid var(--border);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
`

export const StyledStatusBadge = styled.span<{ status: string }>`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  
  ${(props) =>
    props.status === "ACTIVO"
      ? `
    background: #dcfce7;
    color: #166534;
  `
      : `
    background: #fee2e2;
    color: #991b1b;
  `}
`

export const StyledFooter = styled.footer`
  background: var(--primary);
  color: white;
  margin-top: 4rem;
  padding: 4rem 0 2rem;
  border-radius: 24px 24px 0 0;
  
  h5 {
    color: white;
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
  }
  
  a {
    color: var(--border);
    transition: all 0.2s ease;
    
    &:hover {
      color: white;
    }
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 3rem;
    padding-top: 2rem;
    text-align: center;
    color: var(--text-muted);
    font-size: 0.875rem;
  }
`

export const StyledAlert = styled.div<{ variant: "success" | "danger" }>`
  border-radius: 8px;
  padding: 1rem;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  
  ${(props) =>
    props.variant === "success"
      ? `
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  `
      : `
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
  `}
`

export const MobileContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`

export const DesktopContainer = styled.div`
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
`

export const MobileDataCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: var(--shadow);

  .data-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border);
    
    &:last-child {
      border-bottom: none;
    }

    .label {
      font-weight: 600;
      color: var(--text-muted);
      font-size: 0.85rem;
    }

    .value {
      font-weight: 500;
      color: var(--text);
      font-size: 0.9rem;
    }
  }
`

export const StyledFeedbackWidget = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;

  @media (max-width: 767px) {
    bottom: 1rem;
    right: 1rem;
  }
`

export const FeedbackButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    background: var(--accent);
  }
`

export const FeedbackCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
  padding: 1.5rem;
  width: 300px;
  position: absolute;
  bottom: 70px;
  right: 0;
  
  h6 {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  textarea {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    resize: none;
    height: 100px;

    &:focus {
      outline: none;
      border-color: var(--accent);
    }
  }

  .stars {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: #fbbf24;
    cursor: pointer;
  }
`

