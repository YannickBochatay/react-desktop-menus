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

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var menuType = _react2.default.createElement(_Menu2.default, null).type; // hook for react-hot-loader

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

      this.setState({ checked: !this.state.checked });

      if (this.props.action) this.props.action(e, !this.state.checked);
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
          style = _props.style,
          activeColor = _props.activeColor;


      var stateStyle = _extends({}, styles.li);

      if (active) {

        if (disabled) stateStyle = _extends({}, stateStyle, styles.disabled, styles.disabledActive);else stateStyle = _extends({}, stateStyle, { backgroundColor: activeColor });
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

      var props = {
        display: this.props.submenuDisplay,
        style: _extends({ position: "absolute" }, this.state.submenuPosition),
        ref: function ref(node) {
          return _this2.submenu = node;
        }
      };

      if (!("keyboard" in child.props)) props.keyboard = this.props.keyboard;

      return _react2.default.cloneElement(child, props);
    }
  }, {
    key: "hasSubmenu",
    value: function hasSubmenu() {

      return _react2.default.Children.toArray(this.props.children).some(function (child) {
        return child.type === menuType;
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
      var node = this.node;

      var dim = node.getBoundingClientRect();
      var subNode = this.submenu.node;

      if (!subNode) return;

      var left = node.offsetWidth;
      var top = node.offsetTop;

      if (dim.right + subNode.offsetWidth > window.innerWidth) left = -subNode.offsetWidth;

      if (dim.bottom + subNode.offsetHeight > window.innerHeight) {

        top = node.offsetTop + node.offsetHeight - subNode.offsetHeight;
      }

      this.setState({ submenuPosition: { left: left, top: top } });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      return _react2.default.Children.map(this.props.children, function (child) {

        if (child.type === menuType) return _this3.createSubmenu(child);else return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

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
          onClick: !submenu && action ? this.handleAction : null,
          ref: function ref(node) {
            return _this4.node = node;
          }
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
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  info: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  disabled: _propTypes2.default.bool,
  action: _propTypes2.default.func,
  checkbox: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  shortcut: _propTypes2.default.string,
  activeColor: _propTypes2.default.string,

  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  onMouseOver: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,
  active: _propTypes2.default.bool,
  submenuDisplay: _propTypes2.default.bool,
  keyboard: _propTypes2.default.bool
};

MenuItem.defaultProps = {
  disabled: false,
  submenuDisplay: false,
  activeColor: "#e5ecff"
};

exports.default = MenuItem;