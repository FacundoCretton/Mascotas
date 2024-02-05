import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   
  html{
    scroll-behavior: smooth;
  }
body {
    margin: 0;
    padding: 0;
    background: #eaeaea ;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;
