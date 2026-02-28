import styled from "styled-components"

export const StyledNavbar = styled.nav`
  background: var(--card-bg);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid var(--glass-border);
  padding: 1.25rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  .navbar-brand {
    font-weight: 800;
    font-size: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.06em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
       
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }

    &:hover {
      filter: brightness(1.1);
      transform: scale(1.02);
    }
  }
  
  .navbar-nav .nav-link {
    color: var(--text-dim) !important;
    font-weight: 600;
    margin: 0.25rem 0.5rem;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    position: relative;
    
    @media (min-width: 768px) {
      font-size: 1rem;
      margin: 0 1rem;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      color: var(--text-main) !important;
      &::after {
        width: 100%;
      }
    }
  }
`

export const StyledHero = styled.div`
  background: transparent;
  padding: 2rem 0 1.5rem;
  text-align: center;
  position: relative;
  
  h1 {
    font-size: 2.25rem;
    font-weight: 900;
    line-height: 1.1;
    background: linear-gradient(135deg, var(--text-main) 30%, var(--primary) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.05em;
    margin-bottom: 1rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      font-size: 3.75rem;
      margin-bottom: 1.5rem;
    }
  }
  
  p {
    color: var(--text-dim);
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto 1.5rem;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`

export const StyledCard = styled.div`
  background: var(--card-bg);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 0;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow);
  
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(var(--primary-rgb), 0.3);
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.4), 0 0 20px rgba(var(--primary-rgb), 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    opacity: 0.8;
  }
  
  .card-header {
    background: rgba(255, 255, 255, 0.03);
    padding: 1.5rem 2rem;
    border-bottom: 1px solid var(--glass-border);
    
    h5 {
      margin: 0;
      font-weight: 800;
      font-size: 1.25rem;
      letter-spacing: -0.02em;
      color: var(--text-main);
    }
    
    small {
      color: var(--text-dim);
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  .card-body {
    padding: 2.5rem;
  }
`

export const StyledButton = styled.button`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px -5px rgba(var(--primary-rgb), 0.3);

  @media (min-width: 768px) {
    width: auto;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255,255,255,0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 30px -5px rgba(var(--primary-rgb), 0.5);
    &::after {
      opacity: 1;
    }
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px) scale(0.98);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: var(--neutral-700);
    box-shadow: none;
  }
`

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: var(--text-main);
  outline: none;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: var(--neutral-500);
    font-weight: 400;
  }
  
  &:focus {
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.07);
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02);
    transform: translateY(-1px);
  }
`

export const StyledResultCard = styled.div`
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  width: 100%;
  overflow: hidden;
  margin-top: 1.5rem;
  position: relative;

  @media (min-width: 768px) {
    border-radius: 24px;
    margin-top: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    opacity: 0.7;
  }
  
  .card-header {
    background: rgba(15, 23, 42, 0.3);
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--glass-border);
    color: var(--text-main);

    @media (min-width: 768px) {
      padding: 1.5rem 2rem;
    }
  }

  .card-body {
    padding: 0;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    
    th {
      background: rgba(15, 23, 42, 0.5);
      padding: 1rem;
      text-align: left;
      color: var(--text-dim);
      font-weight: 600;
      border-bottom: 1px solid var(--glass-border);
      position: sticky;
      top: 0;
      backdrop-filter: blur(10px);
      font-size: 0.9rem;

      @media (min-width: 768px) {
        padding: 1.25rem;
        font-size: 1rem;
      }
    }

    td {
      padding: 1rem;
      border-bottom: 1px solid var(--glass-border);
      color: var(--text-main);
      font-size: 0.9rem;

      @media (min-width: 768px) {
        padding: 1.25rem;
        font-size: 1rem;
      }
    }

    tr:hover td {
      background: rgba(var(--primary-rgb), 0.05);
    }
  }
`

export const StyledBadge = styled.span`
  background: rgba(99, 102, 241, 0.15);
  color: var(--primary);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    padding: 0.375rem 1rem;
    font-size: 0.75rem;
  }
`

export const StyledStatusBadge = styled.span<{ status: string }>`
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.75rem;
  }
  
  ${(props) =>
    props.status === "ACTIVO"
      ? `
    background: rgba(16, 185, 129, 0.25);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.4);
  `
      : `
    background: rgba(239, 68, 68, 0.25);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.4);
  `}
`

export const StyledFooter = styled.footer`
  background: var(--bg-main);
  color: var(--text-main);
  margin-top: 3rem;
  padding: 3rem 0 2rem;
  border-top: 1px solid var(--glass-border);
  position: relative;

  @media (min-width: 768px) {
    margin-top: 6rem;
    padding: 6rem 0 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent);
    opacity: 0.5;
  }
  
  h5 {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #818cf8, #f472b6);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
  
  a {
    color: var(--text-dim);
    transition: all 0.3s ease;
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }

    &:hover {
      color: var(--text-main);
      transform: translateX(5px);
      display: inline-block;
    }
  }
  
  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    margin-top: 2rem;
    padding-top: 2rem;
    text-align: center;
    color: var(--text-dim);
    font-size: 0.875rem;

    @media (min-width: 768px) {
      margin-top: 4rem;
      padding-top: 3rem;
      font-size: 1rem;
    }
  }
`

export const StyledAlert = styled.div<{ variant: "success" | "danger" }>`
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    padding: 1.25rem;
    margin: 1.5rem 0;
    gap: 1rem;
    font-size: 1rem;
  }
  
  ${(props) =>
    props.variant === "success"
      ? `
    background: rgba(16, 185, 129, 0.1);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.2);
  `
      : `
    background: rgba(239, 68, 68, 0.1);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.2);
  `}
`

export const MobileContainer = styled.div`
  display: block; /* Por defecto visible (Móvil) */
  @media (min-width: 768px) {
    display: none; /* Ocultar en tablets/desktop */
  }
  @media print {
    display: none !important; /* Nunca mostrar la versión móvil en impresión */
  }
`

export const DesktopContainer = styled.div`
  display: none; /* Por defecto oculto (Móvil) */
  @media (min-width: 768px) {
    display: block; /* Mostrar en tablets/desktop */
  }
  @media print {
    display: block !important; /* Siempre mostrar en impresión */
  }
`

export const MobileDataCard = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 1.25rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .data-row {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    
    &:last-child {
      border-bottom: none;
    }

    .label {
      font-weight: 600;
      color: var(--text-dim);
      font-size: 0.8rem;

      @media (min-width: 768px) {
        font-size: 0.875rem;
      }
    }

    .value {
      font-weight: 500;
      color: var(--text-main);
      font-size: 0.9rem;

      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`

export const StyledFeedbackWidget = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 1000;

  @media (min-width: 768px) {
    bottom: 2.5rem;
    right: 2.5rem;
  }
`

export const FeedbackButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
    border-radius: 32px;
  }
  
  &:hover {
    @media (min-width: 1024px) {
      transform: scale(1.1) rotate(5deg);
      background: var(--primary-dark);
    }
  }
`

export const FeedbackCard = styled.div`
  background: var(--card-bg);
  backdrop-filter: blur(30px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  width: 280px;
  position: absolute;
  bottom: 70px;
  right: 0;
  animation: slideInUp 0.4s ease-out;

  @media (min-width: 768px) {
    padding: 2rem;
    width: 320px;
    bottom: 80px;
  }
  
  h6 {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--text-main);

    @media (min-width: 768px) {
      font-size: 1.125rem;
      margin-bottom: 1.25rem;
    }
  }

  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 0.75rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    resize: none;
    height: 100px;
    color: var(--text-main);

    @media (min-width: 768px) {
      padding: 1rem;
      font-size: 0.95rem;
      margin-bottom: 1.25rem;
      height: 120px;
    }

    &:focus {
      outline: none;
      border-color: var(--primary);
      background: rgba(255, 255, 255, 0.06);
    }
  }

  .stars {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: #fbbf24;

    @media (min-width: 768px) {
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }
  }

  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

export const StyledHistoryList = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

export const StyledHistoryItem = styled.button`
  background: rgba(var(--primary-rgb), 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease;
  color: var(--text-main);
  text-align: left;

  &:hover {
    background: rgba(var(--primary-rgb), 0.1);
    border-color: var(--primary);
    transform: translateX(5px);
  }

  .info {
    display: flex;
    flex-direction: column;
    
    .name {
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--text-main);
    }
    
    .cuit {
      font-size: 0.75rem;
      color: var(--text-dim);
    }
  }

  .date {
    font-size: 0.7rem;
    color: var(--text-dim);
    font-style: italic;
  }
`

export const GCheqButton = styled.button`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.4);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.2));
  }
`;

export const GCheqModalStyles = styled.div`
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.25rem;
    padding: 1rem;
    background: rgba(var(--primary-rgb), 0.05);
    border-radius: 16px;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(var(--primary-rgb), 0.08);
      transform: translateX(5px);
    }

    .icon-wrapper {
      background: var(--primary);
      color: white;
      padding: 0.5rem;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .content {
      h6 {
        margin: 0 0 0.25rem 0;
        font-weight: 700;
        color: var(--text-main);
      }
      p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-dim);
        line-height: 1.4;
      }
    }
  }

  .cta-section {
    margin-top: 2rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
    border-radius: 20px;
    text-align: center;
    border: 1px solid var(--glass-border);

    h5 {
      font-weight: 800;
      margin-bottom: 0.5rem;
      background: linear-gradient(to right, #818cf8, #f472b6);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      color: var(--text-dim);
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
    }
  }
`;
