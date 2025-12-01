import styled from "styled-components"

export const StyledNavbar = styled.nav`
  background: var(--color-primary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--color-surface) !important;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
       
    &:hover {
      color: #e2e8f0 !important;
    }
  }
  
  .navbar-nav .nav-link {
    color: #94a3b8 !important;
    font-weight: 500;
    margin: 0 0.5rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--color-surface) !important;
    }
  }
`

export const StyledHero = styled.div`
  background: linear-gradient(to bottom, var(--color-surface), var(--color-background));
  padding: 4rem 0;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  
  h1 {
    color: var(--color-primary);
    font-weight: 800;
    letter-spacing: -1.5px;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }
  
  p {
    color: var(--color-secondary);
    font-size: 1.25rem;
    font-weight: 400;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`

export const StyledFooter = styled.footer`
  background: var(--color-primary);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  padding: 3rem 0;
  margin-top: auto;

  h5 {
    color: var(--color-surface);
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  
  a {
    color: #94a3b8;
    text-decoration: none;
    transition: all 0.2s ease;
    font-size: 0.95rem;
    
    &:hover {
      color: var(--color-surface);
    }
  }
  
  .footer-brand {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-surface);
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 3rem;
    padding-top: 2rem;
    text-align: center;
    font-size: 0.875rem;
  }
`
