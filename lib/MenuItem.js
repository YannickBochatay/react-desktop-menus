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
    lineHeight: "140%",
    padding: "2px 5px",
    cursor: "default",
    display: "flex",
    alignItems: "center"
  },

  icon: {
    width: 16,
    marginRight: 5,
    color: "black"
  },

  active: { backgroundColor: "#e5ecff" },

  disabled: {
    color: "gray",
    fontStyle: "italic",
    cursor: "not-allowed"
  },

  disabledActive: { backgroundColor: "#eee" },

  info: { color: "gray" },

  label: {
    marginRight: 15,
    flex: 1
  },

  arrow: { fontSize: 9 }
};

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this.handleAction = _this.handleAction.bind(_this);
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
    key: "handleMouseOver",
    value: function handleMouseOver(e) {

      if (this.props.onMouseOver) this.props.onMouseOver(e);
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _props = this.props,
          active = _props.active,
          disabled = _props.disabled,
          style = _props.style;


      var stateStyle = _extends({}, styles.li);

      if (active) {

        if (disabled) stateStyle = _extends({}, stateStyle, styles.disabled, styles.disabledActive);else stateStyle = _extends({}, stateStyle, styles.active);
      } else if (disabled) stateStyle = _extends({}, stateStyle, styles.disabled);

      return _extends({}, stateStyle, style);
    }
  }, {
    key: "createLabel",
    value: function createLabel() {
      var _props2 = this.props,
          shortcut = _props2.shortcut,
          label = _props2.label;


      if (_react2.default.isValidElement(label)) {

        return _react2.default.cloneElement(label, { style: _extends({}, styles.label, label.props.style) });
      } else if (typeof label === "string") {

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
        } else return _react2.default.createElement(
          "span",
          { style: styles.label },
          label
        );
      } else return null;
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
          { style: styles.icon },
          checked ? "☑" : "☐"
        );
      } else if (typeof icon === "string") {

        return _react2.default.createElement("i", { className: icon, style: styles.icon });
      } else if (_react2.default.isValidElement(icon)) {

        return _react2.default.cloneElement(icon, { style: _extends({}, styles.icon, icon.props.style) });
      } else {

        return _react2.default.createElement("span", { style: styles.icon });
      }
    }
  }, {
    key: "createInfo",
    value: function createInfo() {
      var info = this.props.info;


      if (_react2.default.isValidElement(info)) {

        return _react2.default.cloneElement(info, { style: _extends({}, styles.info, info.props.style) });
      } else if (typeof info === "string") {

        return _react2.default.createElement(
          "span",
          { style: styles.info },
          info
        );
      } else return null;
    }
  }, {
    key: "createSubmenu",
    value: function createSubmenu(child) {
      var _this2 = this;

      return _react2.default.cloneElement(child, {
        display: this.props.submenuDisplay,
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

      if (!sub) return;

      var left = li.offsetWidth;
      var top = li.offsetTop;

      if (dim.right + sub.offsetWidth > window.innerWidth) left = -sub.offsetWidth;

      if (dim.bottom + sub.offsetHeight > window.innerHeight) top = li.offsetTop + li.offsetHeight - sub.offsetHeight;

      this.setState({ submenuPosition: { left: left, top: top } });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      return _react2.default.Children.map(this.props.children, function (child) {

        if (child.type === _Menu2.default) return _this3.createSubmenu(child);else return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props4 = this.props,
          action = _props4.action,
          rest = _objectWithoutProperties(_props4, ["action"]);

      var submenu = this.hasSubmenu();

      for (var n in this.constructor.propTypes) {
        delete rest[n];
      }return _react2.default.createElement(
        "li",
        _extends({}, rest, {
          style: this.getStyle(),
          onMouseOver: this.handleMouseOver,
          onClick: !submenu && action ? this.handleAction : null
        }),
        this.createIcon(),
        this.createLabel(),
        this.renderChildren(),
        this.createInfo(),
        submenu ? _react2.default.createElement(
          "span",
          { style: styles.arrow },
          "\u25B6"
        ) : ""
      );
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = {
  icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  info: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  style: _react.PropTypes.object,
  children: _react.PropTypes.node,
  disabled: _react.PropTypes.bool,
  action: _react.PropTypes.func,
  checkbox: _react.PropTypes.bool,
  shortcut: _react.PropTypes.string,
  onMouseOver: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  active: _react.PropTypes.bool,
  submenuDisplay: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};

MenuItem.defaultProps = {
  disabled: false,
  submenuDisplay: false
};

exports.default = MenuItem;