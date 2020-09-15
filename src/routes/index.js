import React from "react";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import { Layout } from "../components/layout";
import Home from "./home";
import Scroll from "./scroll";

const routes = [
  { path: "/", name: "Home", component: () => <Home /> },
  { path: "/test1", name: "test1", component: () => "!!!!" },
  { path: "/scroll", name: "scroll", component: () => <Scroll /> },
];

function Routes() {
  return (
    <BrowserRouter>
      <Layout
        routes={routes}
        cayoutContent={
          <React.Fragment>
            <Redirect from="/" to="/" />
            {routes.map((r, i) => (
              <Route exact={i === 0} path={r.path} component={r.component} />
            ))}
          </React.Fragment>
        }
      />
    </BrowserRouter>
  );
}

export default Routes;
