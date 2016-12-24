"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Divider = function Divider(_ref) {
  var style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["style"]);

  delete rest.active;
  delete rest.submenuDisplay;

  return _react2.default.createElement("li", _extends({ style: _extends({ borderBottom: "1px solid #ccc", width: "100%" }, style) }, rest));
};

Divider.propTypes = { style: _react.PropTypes.object };

exports.default = Divider;