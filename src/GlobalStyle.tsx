import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #6366f1;
    --primary-rgb: 99, 102, 241;
    --primary-dark: #4f46e5;
    --secondary: #ec4899;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
  }

  body.dark {
    --bg-main: #0f172a;
    --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    --card-bg: rgba(30, 41, 59, 0.7);
    --text-main: #becddd;
    --text-dim: #94a3b8;
    --glass-border: rgba(255, 255, 255, 0.1);
    --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5);
  }

  body.light {
    --bg-main: #f8fafc;
    --bg-gradient: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
    --card-bg: rgba(255, 255, 255, 0.6);
    --text-main: #0f172a;
    --text-dim: #475569;
    --glass-border: rgba(0, 0, 0, 0.1);
    --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
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
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;