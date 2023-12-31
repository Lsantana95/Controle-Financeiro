import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Spirited Sans', sans-serif;
    background-color: #00BFFF;
    height: 100vh;
 }
`;

export default Global;
