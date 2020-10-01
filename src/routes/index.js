import React from "react";
import { Switch, Route, useLocation } from "react-router";

import SignUp from "../pages/signup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
    </Switch>
  );
};
export default Routes;
