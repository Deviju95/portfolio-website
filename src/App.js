import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import personalLogoFont from "./assets/JJFontPersonalLogo.otf";

import Home from "./pages";
import ThankYouPage from "./pages/ThankYouPage";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "personalLogoFont";
    src: url(${personalLogoFont});
  }

  body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Mukta', sans-serif;
}
`;

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/thankyou" component={ThankYouPage} />
      </Switch>
    </Router>
  );
}

export default App;
