import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const GlobalStyles = createGlobalStyle`
   
  html{
    scroll-behavior: smooth;
  }
body {
    margin: 0;
    padding: 0;
    background: rgba(255, 247, 224, 0.8) ;
    font-family: 'Roboto';
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
