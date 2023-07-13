import { createGlobalStyle } from 'styled-components'
import "@fontsource/poppins";

export const GlobalStyle = createGlobalStyle`
:root {
  --pink: #2F303A;

}
body{
  font-family: "Poppins";
  background-color: #2F303A;
  size: 1.2rem;
  color:white;
};
ul li {list-style:none;}
a {color:white;
text-decoration:none;}
`