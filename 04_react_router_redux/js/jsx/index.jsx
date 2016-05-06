
import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,hashHistory,IndexRoute} from "react-router";

import App from "./app";
import Home from "./home";
import About from "./about";
import Join from "./join";

ReactDOM.render(
  <div>
    <Router history={hashHistory} selfname="rt">
      <Route path="/" IndexRoute component={App} >
          <IndexRoute component={Home} source={$.getJSON("http://127.0.0.1:8123")} />
      </Route>
      <Route path="/about" component={About} source={$.getJSON("http://127.0.0.1:8123/about")} />
      <Route path="/join" component={Join} source={$.getJSON("http://127.0.0.1:8123/join")} />
    </Router>
  </div>
  ,document.getElementById("containerId")
)
