import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import logo from "./resource/img/logo.svg";

class Routes extends PureComponent {
  render() {
    const { routes = [] } = this.props;
    return (
      <React.Fragment>
        <Redirect from="/" to="/" />
        {routes.map((r, i) => (
          <Route exact={i === 0} path={r.path} component={r.component} />
        ))}

        {/* <Route exact path="/" component={Home}></Route>
        <Route path="/test1" component={() => <IoMdPerson />}></Route> */}
      </React.Fragment>
    );
  }
}
export default Routes;
