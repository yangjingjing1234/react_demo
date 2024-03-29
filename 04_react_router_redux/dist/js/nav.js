"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _navlink = require("./navlink");

var _navlink2 = _interopRequireDefault(_navlink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {Link} from "react-router";


var Nav = function (_Component) {
	_inherits(Nav, _Component);

	function Nav(props) {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).call(this, props));
	}

	_createClass(Nav, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			// console.log("===will mounted===");
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			// console.log("===mounted===");
		}
	}, {
		key: "render",
		value: function render() {
			// console.log("===render===");
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"nav",
					{ className: "navbar" },
					_react2.default.createElement(
						"ul",
						null,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_navlink2.default,
								{ to: "/", onlyActiveOnIndex: true },
								"首页"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_navlink2.default,
								{ to: "/about" },
								"关于"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								_navlink2.default,
								{ to: "/join" },
								"加入我们"
							)
						)
					)
				)
			);
		}
	}]);

	return Nav;
}(_react.Component);

exports.default = Nav;