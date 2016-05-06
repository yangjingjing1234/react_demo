"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _nav = require("./nav");

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this, props));
  }

  _createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.route.source.then(function (value) {
        return _this2.setState({ loading: false, data: value });
      }, function (error) {
        return _this2.setState({ loading: false, error: error });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _html = function () {
        if (_this3.state) {
          var _data = _this3.state.data;
          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "h1",
              null,
              _data.name
            ),
            _react2.default.createElement(
              "h3",
              null,
              _data.address
            )
          );
        } else {
          return _react2.default.createElement(
            "h1",
            null,
            "Loading..."
          );
        }
      }();

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_nav2.default, null),
        _html
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;