import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import personalLogoFont from "./assets/JJFontPersonalLogo.otf";

import Home from "./pages";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Mukta', sans-serif;
}
@font-face {
    font-family: "personalLogoFont";
    src: url(${personalLogoFont});
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
