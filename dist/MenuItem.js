"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {

  li: {
    margin: 0,
    whiteSpace: "nowrap",
    lineHeight: "140%"
  },

  a: {
    color: "#333",
    textDecoration: "none",
    display: "block",
    padding: "2px 5px",
    backgroundPosition: "5px 50%",
    backgroundSize: "16px 16px",
    backgroundRepeat: "no-repeat",
    position: "relative",
    cursor: "default"
  },

  icon: {
    display: "inline-block",
    width: 16,
    verticalAlign: "middle"
  },

  checkbox: {
    display: "inline-block",
    width: 16,
    verticalAlign: "middle",
    color: "black"
  },

  active: { backgroundColor: "#e5ecff" },

  disabled: {
    color: "gray",
    fontStyle: "italic",
    cursor: "not-allowed"
  },

  disabledActive: { backgroundColor: "#eee" },

  globalShortcut: {
    color: "gray",
    display: "inline-block",
    float: "right"
  },

  label: { marginRight: 15 },

  arrow: {
    display: "inline-block",
    float: "right",
    fontSize: 9
  }
};

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this.handleAction = _this.handleAction.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);

    _this.state = {
      checked: false,
      submenuPosition: { left: 0, top: 0 }
    };

    return _this;
  }

  _createClass(MenuItem, [{
    key: "handleAction",
    value: function handleAction(e) {

      e.preventDefault();

      if (this.props.disabled) return;

      if (this.props.action) this.props.action(e, !this.state.checked);

      this.setState({ checked: !this.state.checked });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {

      if (e.key === this.props.shortcut) this.handleAction(e);
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver(e) {

      if (this.props.onMouseOver) this.props.onMouseOver(e);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      if (this.props.shortcut) {

        document.addEventListener("keypress", this.handleKeyPress);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      document.removeEventListener("keypress", this.handleKeyPress);
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _props = this.props,
          active = _props.active,
          disabled = _props.disabled;


      var stateStyle = _extends({}, styles.a);

      if (active) {

        if (disabled) stateStyle = _extends({}, stateStyle, styles.disabled, styles.disabledActive);else stateStyle = _extends({}, stateStyle, styles.active);
      } else if (disabled) stateStyle = _extends({}, stateStyle, styles.disabled);

      return stateStyle;
    }
  }, {
    key: "createLabel",
    value: function createLabel() {
      var _props2 = this.props,
          shortcut = _props2.shortcut,
          children = _props2.children;
      var label = this.props.label;


      if (typeof children === "string") label = children;

      if (shortcut) {

        var index = label.toLowerCase().indexOf(shortcut.toLowerCase());

        return _react2.default.createElement(
          "span",
          { style: styles.label },
          label.slice(0, index),
          _react2.default.createElement(
            "u",
            null,
            label.slice(index, index + 1)
          ),
          label.slice(index + 1)
        );
      } else {

        return _react2.default.createElement(
          "span",
          { style: styles.label },
          label
        );
      }
    }
  }, {
    key: "createIcon",
    value: function createIcon() {
      var _props3 = this.props,
          icon = _props3.icon,
          checkbox = _props3.checkbox;
      var checked = this.state.checked;


      if (checkbox) {

        return _react2.default.createElement(
          "span",
          { style: styles.checkbox },
          checked ? "☑" : "☐"
        );
      } else {

        return _react2.default.createElement(
          "span",
          { style: styles.icon },
          typeof icon === "string" ? _react2.default.createElement("i", { className: icon }) : icon
        );
      }
    }
  }, {
    key: "createSubmenu",
    value: function createSubmenu() {
      var _this2 = this;

      return _react2.default.cloneElement(this.props.children, {
        display: this.props.display && this.props.submenuDisplay,
        style: _extends({ position: "absolute" }, this.state.submenuPosition),
        ref: function ref(node) {
          return _this2.submenu = node;
        }
      });
    }
  }, {
    key: "hasSubmenu",
    value: function hasSubmenu() {

      return _react2.default.Children.toArray(this.props.children).some(function (child) {
        return child.type === _Menu2.default;
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      if (this.props.submenuDisplay && !prevProps.submenuDisplay) {

        this.setSubmenuPosition();
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {

      this.setState({ checked: this.props.defaultChecked });
    }
  }, {
    key: "setSubmenuPosition",
    value: function setSubmenuPosition() {

      var li = _reactDom2.default.findDOMNode(this);
      var dim = li.getBoundingClientRect();
      var sub = _reactDom2.default.findDOMNode(this.submenu);

      var left = li.offsetWidth;
      var top = li.offsetTop;

      if (dim.right + sub.offsetWidth > window.innerWidth) left = -sub.offsetWidth;

      if (dim.bottom + sub.offsetHeight > window.innerHeight) top = li.offsetTop + li.offsetHeight - sub.offsetHeight;

      this.setState({ submenuPosition: { left: left, top: top } });
    }
  }, {
    key: "render",
    value: function render() {
      var _props4 = this.props,
          style = _props4.style,
          action = _props4.action,
          rest = _objectWithoutProperties(_props4, ["style", "action"]);

      var submenu = this.hasSubmenu();

      delete rest.disabled;
      delete rest.action;
      delete rest.disabled;
      delete rest.shortcut;
      delete rest.checkbox;
      delete rest.icon;
      delete rest.children;
      delete rest.active;
      delete rest.display;
      delete rest.submenuDisplay;
      delete rest.defaultChecked;

      return _react2.default.createElement(
        "li",
        _extends({}, rest, {
          style: _extends({}, styles.li, style),
          onMouseOver: this.handleMouseOver
        }),
        _react2.default.createElement(
          "a",
          {
            href: "#",
            onClick: !submenu && action ? this.handleAction : null,
            style: this.getStyle()
          },
          submenu ? _react2.default.createElement(
            "span",
            { style: styles.arrow },
            "\u25B6"
          ) : "",
          this.createIcon(),
          this.createLabel()
        ),
        submenu ? this.createSubmenu() : null
      );
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = {
  icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  style: _react.PropTypes.object,
  label: _react.PropTypes.string,
  children: _react.PropTypes.node,
  disabled: _react.PropTypes.bool,
  action: _react.PropTypes.func,
  keepMenu: _react.PropTypes.bool,
  checkbox: _react.PropTypes.bool,
  shortcut: _react.PropTypes.string,
  onMouseOver: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  display: _react.PropTypes.bool,
  active: _react.PropTypes.bool,
  submenuDisplay: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};

MenuItem.defaultProps = {
  disabled: false,
  display: true,
  submenuDisplay: false
};

exports.default = MenuItem;