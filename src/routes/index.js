import React from "react";
import axios from "axios";  // 설치 후 import

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


function Routes() {
  var request = require("request");
  var url = "http://naver.com";
  request(url, function(error, response, html){
    console.log(html);
  });

//  axios({
//   method: 'get',
//   url: 'https://finance.naver.com/item/item_right_ajax.nhn?type=recent&code=005930&page=1',
//   headers: { 'Content-Type': 'application/x-www-form-urlencoded',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Credentials': 'true' },

//  })
//  .then(response => {      // .then : 응답(상태코드200~300미만)성공시
//     console.log(response);
//  })
//  .catch(error => {
//     console.log(error);
//  });


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





