import { createGlobalStyle } from 'styled-components';
import { resetStyle } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  html {
    font-size: 62.5%;
  }
`;
