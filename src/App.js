import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import personalLogoFont from "./assets/JJFontPersonalLogo.otf";

import Home from "./pages";
import ThankYouPage from "./pages/ThankYouPage";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
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
        <Route path="/" component={Home} exact />
        <Route path="/thankyou" component={ThankYouPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
