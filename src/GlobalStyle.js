import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

   ${
     "" /* * {
    outline: 1px solid red !important;

} */
   }
*,*::before,*::after {
      margin: 0;
      padding: 0;
   }
   html {
      overflow-x: hidden;
   }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${(props) =>
      props.theme.mode === "dark" ? "#000000" : "#ffffff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#ffffff" : "#000000")};
    overflow-x: hidden;
  }

  a {
      color: inherit;
      text-decoration: none;
   }

  @media (min-width: 768px) {
    body {
      padding:0 10rem;
    }
  }
`;

export default GlobalStyle;
