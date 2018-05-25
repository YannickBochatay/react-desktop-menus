"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseStyle = {
  display: "inline-block",
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
      var _this3 = this;

      if (!this.props.display) return;

      var length = _react2.default.Children.count(this.props.children);
      var current = this.state.itemActive;
      var submenuDisplay = this.state.submenuDisplay;

      var currentElmt = this.items[current];
      var submenu = currentElmt && currentElmt.submenu;

      var newValue = null;

      switch (e.key) {

        case "ArrowDown":

          if (submenuDisplay) return;

          e.preventDefault();

          if (current === null || current + 1 >= length) newValue = 0;else newValue = current + 1;
          break;

        case "ArrowUp":

          if (submenuDisplay) return;

          e.preventDefault();

          if (current === null || current - 1 < 0) newValue = length - 1;else newValue = current - 1;
          break;

        case "ArrowLeft":case "Escape":

          if (submenuDisplay && (!submenu || !submenu.state.submenuDisplay)) {

            e.preventDefault();

            window.setTimeout(function () {
              return _this3.setState({ submenuDisplay: false });
            }, 0);
          }
          break;

        case "ArrowRight":

          if (submenu && !submenuDisplay) {

            e.preventDefault();
            this.setState({ submenuDisplay: true });
          } else if (!submenuDisplay && current === -1) {

            e.preventDefault();
            newValue = 0;
          }
          break;

        case "Enter":

          if (!submenuDisplay) {

            if (submenu) {

              e.preventDefault();
              this.setState({ submenuDisplay: true });
            } else if (currentElmt && currentElmt.handleAction) {

              e.preventDefault();
              currentElmt.handleAction(e);
            }
          }
          break;

        default:

          if (!submenuDisplay) {

            var index = this.items.findIndex(function (item) {
              return item.props.shortcut === e.key;
            });

            if (index !== -1) {

              e.preventDefault();
              newValue = index;
              if (this.items[index].handleAction) this.items[index].handleAction(e);
            }
          }

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
      var _this4 = this;

      var index = -1;

      return _react2.default.Children.map(this.props.children, function (child, i) {

        index++;

        var props = {
          active: index === _this4.state.itemActive,
          ref: _this4.setRef.bind(_this4, index),
          submenuDisplay: index === _this4.state.itemActive && _this4.state.submenuDisplay,
          key: i
        };

        var onMouseOver = _this4.handleMouseOver.bind(_this4, index);

        if ("onMouseOver" in child.props) {

          var ownMouseOver = child.props.onMouseOver;

          props.onMouseOver = function (e) {

            ownMouseOver(e);
            onMouseOver(e);
          };
        } else props.onMouseOver = onMouseOver;

        if ("itemHoverColor" in _this4.props && !("activeColor" in child.props)) {

          props.activeColor = _this4.props.itemHoverColor;
        }

        if (!("keyboard" in child.props)) props.keyboard = _this4.props.keyboard;

        return _react2.default.cloneElement(child, props);
      });
    }
  }, {
    key: "addKeyboardListener",
    value: function addKeyboardListener() {

      document.addEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "removeKeyboardListener",
    value: function removeKeyboardListener() {

      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      if (this.props.keyboard) this.addKeyboardListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      this.removeKeyboardListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      if (prevProps.keyboard && !this.props.keyboard) this.removeKeyboardListener();else if (!prevProps.keyboard && this.props.keyboard) this.addKeyboardListener();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {

      if (!this.props.display && nextProps.display) this.setState({ itemActive: -1 });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          display = _props.display,
          style = _props.style,
          rest = _objectWithoutProperties(_props, ["display", "style"]);

      delete rest.children;
      delete rest.label;
      delete rest.onAction;
      delete rest.itemHoverColor;
      delete rest.keyboard;

      if (!display) return null;

      return _react2.default.createElement(
        "ul",
        _extends({}, rest, {
          style: _extends({}, baseStyle, style),
          ref: function ref(node) {
            return _this5.node = node;
          }
        }),
        this.renderChildren()
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  children: _propTypes2.default.node,
  display: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  itemHoverColor: _propTypes2.default.string,
  keyboard: _propTypes2.default.bool
};

Menu.defaultProps = { display: true };

exports.default = Menu;