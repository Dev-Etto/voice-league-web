import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
  }

  body {
    background-color: ${props => props.theme.colors.primaryBg};
    color: ${props => props.theme.colors.textMain};
    line-height: 1.6;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
  }

  /* Scrollbar Customization */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.primaryBg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.glassBorder};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accentBlue};
  }
`;
