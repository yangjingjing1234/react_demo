"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  function RadioButton(props) {
    _classCallCheck(this, RadioButton);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioButton).call(this, props));
  }

  _createClass(RadioButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refs.all && (this.refs.all.checked = true);
    }
  }, {
    key: "handleChanged",
    value: function handleChanged(event) {
      var key = Object.keys(this.refs);
      this.props.onChanged({ filter: this.props.filter, checked: this.refs[key].checked });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "label",
        { htmlFor: this.props.id },
        _react2.default.createElement("input", { type: "radio",
          id: this.props.id,
          ref: this.props.id,
          name: this.props.name,
          value: this.props.value,
          filter: this.props.filter,
          onChange: this.handleChanged.bind(this) }),
        this.props.children
      );
    }
  }]);

  return RadioButton;
}(_react2.default.Component);

var RadioGroup = function (_React$Component2) {
  _inherits(RadioGroup, _React$Component2);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioGroup).call(this, props));
  }

  _createClass(RadioGroup, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({ value: "use" });
    }
  }, {
    key: "handleChanged",
    value: function handleChanged(value) {
      this.props.onRadioChanged(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = [];
      this.props.children.map(function (child, index) {
        var item = _react2.default.createElement(
          RadioButton,
          { key: index,
            id: child.props.id,
            name: child.props.name,
            value: child.props.value,
            filter: child.props.filter,
            onChanged: _this3.handleChanged.bind(_this3) },
          child.props.children
        );
        children.push(item);
      });
      return _react2.default.createElement(
        "div",
        { value: this.state.value },
        children
      );
    }
  }]);

  return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;