"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require("react-router");

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

var _home = require("./home");

var _home2 = _interopRequireDefault(_home);

var _about = require("./about");

var _about2 = _interopRequireDefault(_about);

var _join = require("./join");

var _join2 = _interopRequireDefault(_join);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory, selfname: "rt" },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: "/", IndexRoute: true, component: _app2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default, source: $.getJSON("http://127.0.0.1:8123") })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: "/about", component: _about2.default, source: $.getJSON("http://127.0.0.1:8123/about") }),
    _react2.default.createElement(_reactRouter.Route, { path: "/join", component: _join2.default, source: $.getJSON("http://127.0.0.1:8123/join") })
  )
), document.getElementById("containerId"));