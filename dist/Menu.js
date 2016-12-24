"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require("./MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseStyle = {
  position: "absolute",
  backgroundColor: "white",
  border: "1px solid gray",
  borderRadius: 2,
  boxShadow: "2px 1px 1px gray",
  listStyle: "none",
  padding: "3px 0px",
  margin: 0,
  lineHeight: "normal"
};

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = { itemActive: null, submenuDisplay: false };

    _this.handleKeyDown = _this.handleKeyDown.bind(_this);

    _this.items = [];

    return _this;
  }

  _createClass(Menu, [{
    key: "handleMouseOver",
    value: function handleMouseOver(i) {
      var _this2 = this;

      if (i !== this.state.itemActive) {

        if (this.delay) window.clearTimeout(this.delay);

        this.setState({ itemActive: i, submenuDisplay: false });

        var currentElmt = this.items[i];

        if (currentElmt && currentElmt.hasSubmenu && currentElmt.hasSubmenu()) {

          this.delay = window.setTimeout(function () {
            return _this2.setState({ submenuDisplay: true });
          }, 300);
        }
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {

      if (!this.props.display) return;

      var length = _react2.default.Children.count(this.props.children);
      var current = this.state.itemActive;
      var submenuDisplay = this.state.submenuDisplay;

      var currentElmt = this.items[current];
      var hasSubmenu = currentElmt && currentElmt.hasSubmenu && currentElmt.hasSubmenu();

      var newValue = null;

      switch (e.code) {

        case "ArrowDown":

          if (submenuDisplay) return;

          if (current === null || current + 1 >= length) newValue = 0;else newValue = current + 1;
          break;

        case "ArrowUp":

          if (submenuDisplay) return;

          if (current === null || current - 1 < 0) newValue = length - 1;else newValue = current - 1;
          break;

        case "ArrowLeft":case "Escape":

          if (submenuDisplay) this.setState({ submenuDisplay: false });
          break;

        case "ArrowRight":

          if (hasSubmenu) this.setState({ submenuDisplay: true });
          break;

        case "Enter":

          if (!submenuDisplay) {

            if (hasSubmenu) this.setState({ submenuDisplay: true });else if (currentElmt && currentElmt.handleAction) currentElmt.handleAction(e);
          }
          break;

        default:

          break;
      }

      if (newValue !== null) this.setState({ itemActive: newValue });
    }
  }, {
    key: "setRef",
    value: function setRef(i, elmt) {

      this.items[i] = elmt;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      var index = -1;

      return _react2.default.Children.map(this.props.children, function (child) {

        if (child.type === _MenuItem2.default) {

          index++;

          return _react2.default.cloneElement(child, {
            onMouseOver: _this3.handleMouseOver.bind(_this3, index),
            display: _this3.props.display,
            active: index === _this3.state.itemActive,
            ref: _this3.setRef.bind(_this3, index),
            submenuDisplay: index === _this3.state.itemActive && _this3.state.submenuDisplay
          });
        } else return child;
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      document.addEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {

      if (!this.props.display && nextProps.display) this.setState({ itemActive: 0 });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          display = _props.display,
          style = _props.style,
          rest = _objectWithoutProperties(_props, ["display", "style"]);

      delete rest.children;

      if (!display) return null;

      return _react2.default.createElement(
        "ul",
        _extends({
          style: _extends({}, baseStyle, style, { visibility: display ? "visible" : "hidden" })
        }, rest),
        this.renderChildren()
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  children: _react.PropTypes.node,
  display: _react.PropTypes.bool,
  style: _react.PropTypes.object
};

Menu.defaultProps = { display: true };

exports.default = Menu;