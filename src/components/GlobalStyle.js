import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  outline: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  -webkit-tap-highlight-color: rgba(0,0,0,0); /*avoid grey div bg on tab*/
}

img {
  outline: none;
}

body {
  font-family: "Lato", sans-serif;
  overflow: hidden;
}
`;

export default GlobalStyle;