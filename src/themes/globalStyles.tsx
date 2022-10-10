import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", "Arial", sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .noItems {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-top: 55px;
    &.--error {
      color: #bb2e1e;
    }
    &.--noMargins {
      margin: 0;
    }
  }
`;

export default GlobalStyle;
