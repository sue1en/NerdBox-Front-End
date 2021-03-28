import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    font-family: Verdana;
  }
  
  #root{
    display:flex; 
    flex-direction:column; 
    height:100vh;
  }
`

export default GlobalStyle;