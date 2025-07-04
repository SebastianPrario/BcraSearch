import styled from "styled-components"

export const StyledNavbar = styled.nav`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  .navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    color: white !important;
       
    &:hover {
      color: #f8f9fa !important;
    }
  }
  
  .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.9) !important;
    font-weight: 500;
    margin: 0 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      color: white !important;
      transform: translateY(-1px);
    }
  }
`

export const StyledHero = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 1rem 0;
  border-radius: 20px;
  margin-bottom: 0;
  
  h1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.0rem;  }
  
  p {
    color: #6c757d;
    font-size: 0.9rem;
    font-weight: 150;
  }
`

export const StyledCard = styled.div`
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 15px 15px 0 0 !important;
    border: none;
    
    h5 {
      margin: 0;
      font-weight: 600;
    }
    
    small {
      opacity: 0.9;
    }
  }
`

export const StyledButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 25px;
  padding: 0.75rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const StyledInput = styled.input`
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
    outline: none;
  }
`

export const StyledResultCard = styled.div`
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #28a745;
  width: 100%;
  margin: 0;
  max-width: 100%;
  overflow-x: scroll;


  .card-header {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
    border-radius: 15px 15px 0 0 !important;
    border: none;
  }
`

export const StyledBadge = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin: 0.25rem;
  display: inline-block;
`

export const StyledStatusBadge = styled.span<{ status: string }>`
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${(props) =>
    props.status === "ACTIVO"
      ? `
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    color: white;
  `
      : `
    background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
    color: white;
  `}
`

export const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  margin-left: 0;
  border-radius: 20px;
  h5 {
    color: #ecf0f1;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  a {
    color: #bdc3c7;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: #ecf0f1;
      text-decoration: underline;
    }
  }
  
  .footer-brand {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ecf0f1;
  }
  
  .footer-bottom {
    border-top: 1px solid #34495e;
    margin-top: 2rem;
    padding-top: 2rem;
    text-align: center;
    color: #95a5a6;
  }
`

export const StyledAlert = styled.div<{ variant: "success" | "danger" }>`
  border: none;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  
  ${(props) =>
    props.variant === "success"
      ? `
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    color: #155724;
    border-left: 4px solid #28a745;
  `
      : `
    background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
    color: #721c24;
    border-left: 4px solid #dc3545;
  `}
`

