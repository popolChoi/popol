import React from "react";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import { Layout } from "../components/layout";
import Home from "./home";

import Scroll from "./scroll";

const routes = [
  { path: "/", name: "Home", component: () => <Home /> },
  { path: "/scroll", name: "scroll", component: () => <Scroll /> },

  { path: "/css", name: "css" },
  { path: "/React", name: "React" },

  {
    path: "/React package",
    name: "React package",
  },
];
//raw-loader
function Routes() {
  return (
    <BrowserRouter>
      <Layout
        routes={routes}
        cayoutContent={
          <React.Fragment>
            <Redirect from="/" to="/" />
            {routes.map((r, i) => (
              <Route
                key={i}
                exact={i === 0}
                path={r.path}
                component={r.component}
              />
            ))}
          </React.Fragment>
        }
      />
    </BrowserRouter>
  );
}

export default Routes;
