import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Inter, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: 20px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;
