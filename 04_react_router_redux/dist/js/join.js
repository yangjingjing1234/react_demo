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

var JoinUs = function (_React$Component) {
  _inherits(JoinUs, _React$Component);

  function JoinUs(props) {
    _classCallCheck(this, JoinUs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(JoinUs).call(this, props));
  }

  _createClass(JoinUs, [{
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
          var _job = function () {
            return _data.jobs.map(function (repo, index) {
              return _react2.default.createElement(
                "li",
                { key: index },
                repo.name,
                _react2.default.createElement(
                  "ul",
                  null,
                  repo.joblist.map(function (rp, idx) {
                    return _react2.default.createElement(
                      "li",
                      { key: idx },
                      _react2.default.createElement(
                        "em",
                        null,
                        rp.title
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        rp.content
                      )
                    );
                  })
                )
              );
            });
          }();
          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "h1",
              null,
              _data.name
            ),
            _react2.default.createElement(
              "label",
              null,
              "地址:"
            ),
            _react2.default.createElement(
              "a",
              { href: "mailto:" + _data.email },
              _data.email
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "label",
              null,
              "部门:"
            ),
            _react2.default.createElement(
              "ul",
              null,
              _job
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

  return JoinUs;
}(_react2.default.Component);

exports.default = JoinUs;