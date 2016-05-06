"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radio = require("./radio");

var _radio2 = _interopRequireDefault(_radio);

var _reactRedux = require("react-redux");

var _carAction = require("./actions/carAction");

var _actionTypes = require("./actionTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.filterType = {
      "所有": _actionTypes.CAR_STATE_ALL,
      "使用中": _actionTypes.CAR_STATE_USEING,
      "未使用": _actionTypes.CAR_STATE_UNUSE,
      "维修中": _actionTypes.CAR_STATE_FIXING,
      "其他": _actionTypes.CAR_STATE_OTHER
    };
    return _this;
  }

  _createClass(Home, [{
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
    key: "radioChanged",
    value: function radioChanged(value) {
      // console.log("==radiochange===",value.filter);
      this.props.dispatch((0, _carAction.filterCarAction)(value.filter));

      // console.log(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // console.log("===render===")
      if (this.state) {
        var _data = this.state.data;
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "h1",
            null,
            _data.name
          ),
          _react2.default.createElement(
            "h4",
            null,
            "车辆列表"
          ),
          _react2.default.createElement(
            "form",
            null,
            _react2.default.createElement(
              _radio2.default,
              { onRadioChanged: this.radioChanged.bind(this) },
              _react2.default.createElement(
                "option",
                { value: "all", id: "all", filter: _actionTypes.CAR_STATE_ALL, name: "carstatus" },
                "所有"
              ),
              _react2.default.createElement(
                "option",
                { value: "use", id: "use", filter: _actionTypes.CAR_STATE_USEING, name: "carstatus" },
                "使用中"
              ),
              _react2.default.createElement(
                "option",
                { value: "unuse", id: "unuse", filter: _actionTypes.CAR_STATE_UNUSE, name: "carstatus" },
                "未使用"
              ),
              _react2.default.createElement(
                "option",
                { value: "fix", id: "fix", filter: _actionTypes.CAR_STATE_FIXING, name: "carstatus" },
                "维修中"
              ),
              _react2.default.createElement(
                "option",
                { value: "other", id: "other", filter: _actionTypes.CAR_STATE_OTHER, name: "carstatus" },
                "其他"
              )
            )
          ),
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  null,
                  "序列"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "车辆名称"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Logo"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "车牌号"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "车架号"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "发动机号"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "使用状态"
                )
              )
            ),
            _react2.default.createElement(
              "tbody",
              null,
              _data.carlist.map(function (repo, index) {
                var _filterType = _this3.filterType[repo.status];
                var _state = _this3.props.filter;
                if (_state != _actionTypes.CAR_STATE_ALL && _filterType !== _state) {
                  return;
                }
                return _react2.default.createElement(
                  "tr",
                  { key: index },
                  _react2.default.createElement(
                    "td",
                    null,
                    index + 1
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    repo.carname
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    _react2.default.createElement("img", { src: repo.logo })
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    repo.carnum
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    repo.carid
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    repo.careng
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    repo.status
                  )
                );
              })
            )
          )
        );
      } else {
        return _react2.default.createElement(
          "h1",
          null,
          "Loading...."
        );
      }
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(_carAction.filterCarAction)(Home);