import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Buffer } from "buffer";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  global.Buffer = Buffer;
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}
export default App;
