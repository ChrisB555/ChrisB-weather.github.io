import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Home from "./pages/main/Home";

const Routers = () => {
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>
  </div>;
};
export default Routers;
