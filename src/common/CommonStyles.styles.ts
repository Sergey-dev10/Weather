import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
      margin: 0;
      padding:0;
      background-color: #1a1b1e;
      font-family: BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
      color: #c1c2c5;
      line-height: 1.55;
    }
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 1.625rem;
  font-weight: 700;
`;
