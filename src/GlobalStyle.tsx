import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #6366f1;
    --primary-rgb: 99, 102, 241;
    --primary-dark: #4f46e5;
    --secondary: #ec4899;
    --secondary-rgb: 236, 72, 153;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
    --neutral-900: #0f172a;
    --neutral-800: #1e293b;
    --neutral-700: #334155;
    --neutral-600: #475569;
    --neutral-500: #64748b;
    --neutral-400: #94a3b8;
    --neutral-300: #cbd5e1;
    --neutral-200: #e2e8f0;
    --neutral-100: #f1f5f9;
    --neutral-50: #f8fafc;
  }

  body.dark {
    --bg-main: #020617;
    --bg-gradient: radial-gradient(circle at 50% 0%, #111827 0%, #020617 100%);
    --card-bg: rgba(17, 24, 39, 0.65);
    --text-main: #f8fafc;
    --text-dim: #94a3b8;
    --primary: #818cf8; /* Lighter indigo for better contrast in dark */
    --secondary: #f472b6; /* Lighter pink for better contrast in dark */
    --accent-number: #38bdf8; /* High-contrast sky blue specifically for numbers */
    --glass-border: rgba(255, 255, 255, 0.12);
    --glass-glow: rgba(99, 102, 241, 0.15);
    --shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
  }

  body.light {
    --bg-main: #f8fafc;
    --bg-gradient: radial-gradient(circle at 50% 0%, #e0e7ff 0%, #f8fafc 100%);
    --card-bg: rgba(255, 255, 255, 0.7);
    --text-main: #0f172a;
    --text-dim: #475569;
    --primary: #6366f1;
    --secondary: #ec4899;
    --accent-number: #0284c7;
    --glass-border: rgba(0, 0, 0, 0.08);
    --glass-glow: rgba(99, 102, 241, 0.05);
    --shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  body {
    background: var(--bg-gradient);
    background-attachment: fixed;
    background-color: var(--bg-main);
    color: var(--text-main);
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 0.5s ease;
  }

  /* Decorative Background Elements */
  body::before {
    content: '';
    position: fixed;
    top: -10%;
    right: -10%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%);
    z-index: -1;
    filter: blur(80px);
    pointer-events: none;
  }

  body::after {
    content: '';
    position: fixed;
    bottom: -10%;
    left: -10%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(var(--secondary-rgb), 0.1) 0%, transparent 70%);
    z-index: -1;
    filter: blur(80px);
    pointer-events: none;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.02em;
  }

  a {
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(var(--primary-rgb), 0.2);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(var(--primary-rgb), 0.4);
  }

  /* Animations */
  @keyframes blobMove {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0, 0) scale(1); }
  }

  .premium-blur {
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
  }

  /* Print Styles */
  @media print {
    body {
      background: white !important;
      color: black !important;
    }

    body::before,
    body::after,
    .no-print,
    .modal-header,
    .modal-footer,
    nav,
    button:not(.print-only),
    .feedback-widget,
    footer {
      display: none !important;
    }

    .modal {
      position: absolute !important;
      left: 0 !important;
      top: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      overflow: visible !important;
    }

    .modal-dialog {
      max-width: 100% !important;
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .modal-content {
      border: none !important;
      box-shadow: none !important;
      background: white !important;
    }

    .modal-body {
      max-height: none !important;
      overflow: visible !important;
      padding: 0 !important;
    }

    .card-body, .table-responsive {
      max-height: none !important;
      overflow: visible !important;
      padding: 0 !important;
    }

    /* Force visibility of containers during print */
    .desktop-only-print {
      display: block !important;
    }

    /* Reset glassmorphism for print */
    * {
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      box-shadow: none !important;
      text-shadow: none !important;
      transition: none !important;
    }

    .card, [class*="StyledCard"], [class*="StyledResultCard"] {
      background: white !important;
      border: 1px solid #ddd !important;
      color: black !important;
      overflow: visible !important;
      margin-bottom: 2rem !important;
      break-inside: avoid;
    }

    table {
      width: 100% !important;
      border: 1px solid #ccc !important;
      page-break-inside: auto;
    }

    thead {
      display: table-header-group;
    }

    tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }

    th, td {
      color: black !important;
      border: 1px solid #eee !important;
      padding: 8px !important;
    }

    h1, h2, h3, h4, h5, h6 {
      color: black !important;
      -webkit-text-fill-color: black !important;
      background: none !important;
      margin-top: 10px !important;
    }
  }
  }
`;