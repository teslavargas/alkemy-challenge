import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import HeroDetail from "../components/hero/HeroDetail";
import { Home } from "../components/home/Home";
import Team from "../components/team/Team";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />

        <Route exact path="/" component={LoginScreen} />

        <PublicRoute exact path="/home" component={Home} />

        <PublicRoute exact path="/hero/:id" component={HeroDetail} />

        <PublicRoute exact path="/team" component={Team} />
      </Switch>
    </Router>
  );
};
