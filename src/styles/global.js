import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: ${(props) => props.theme.primaryColor};
    font-family: 'MedievalSharp', cursive;
  }
`;
export default GlobalStyle;
