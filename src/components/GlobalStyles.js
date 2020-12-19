import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    background: #00C9FF;
    background: -webkit-linear-gradient(to bottom, #92FE9D, #00C9FF);
    background: linear-gradient(to bottom, #92FE9D, #00C9FF);
    height: 100%;
    margin: 0;
    color: #242423;
  }
`
