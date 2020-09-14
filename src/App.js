import React from "react";

import logo from "./resource/img/logo.svg";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import { Layout } from "./components/layout";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/test1", name: "test1", component: () => "!!!!" },
];

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <BrowserRouter>
          <Layout
            routes={routes}
            cayoutContent={
              <React.Fragment>
                <Redirect from="/" to="/" />
                {routes.map((r, i) => (
                  <Route
                    exact={i === 0}
                    path={r.path}
                    component={r.component}
                  />
                ))}
              </React.Fragment>
            }
          />
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
