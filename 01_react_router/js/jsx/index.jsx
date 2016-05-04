
import React from "react";
import ReactDOM from "react-dom";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router,Route,hashHistory,IndexRoute} from "react-router";

import App from "./app.min";
import Home from "./home.min";
import Pc from "./pc.min";
import Book from "./book.min";
import Car from "./car.min";
import About from "./about.min";
import Join from "./join.min";

ReactDOM.render(
  <div>
    <Router history={hashHistory} selfname="rt">
      <Route path="/" IndexRoute index="0" component={App}>
        <IndexRoute component={Home} index="1" source={$.getJSON("http://127.0.0.1:8123")} />
        <Route path="/book" component={Book} index="2" source={$.getJSON("http://127.0.0.1:8123/book")} />
        <Route path="/pc" component={Pc} index="3" source={$.getJSON("http://127.0.0.1:8123/pc")} />
        <Route path="/car" component={Car} index="4" source={$.getJSON("http://127.0.0.1:8123/car")} />
      </Route>
      <Route path="/about" component={About} source={$.getJSON("http://127.0.0.1:8123/about")} />
      <Route path="/join" component={Join} source={$.getJSON("http://127.0.0.1:8123/join")} />
    </Router>
  </div>
  ,document.getElementById("containerId")
)
