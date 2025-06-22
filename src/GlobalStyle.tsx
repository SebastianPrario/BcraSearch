import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  :root {
    --color-principal: #6200ea;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #dfd0d0;
    color: #333;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;