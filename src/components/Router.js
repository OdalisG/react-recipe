import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";

//router paths are used
//sorted by id
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;
