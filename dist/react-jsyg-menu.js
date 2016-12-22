"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  "use strict";

  var styles = {

    ul: {
      position: "absolute",
      backgroundColor: "white",
      border: "1px solid gray",
      borderRadius: 2,
      boxShadow: "2px 1px 1px gray",
      listStyle: "none",
      padding: "3px 0px",
      margin: 0,
      lineHeight: "normal"
    },

    li: {
      margin: 0,
      whiteSpace: "nowrap",
      lineHeight: "140%"
    },

    divider: {
      borderBottom: "1px solid #ccc",
      width: "100%"
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
    },

    disabledInput: { cursor: "not-allowed" }
  };

  var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
      _classCallCheck(this, MenuItem);

      var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

      _this.handleAction = _this.handleAction.bind(_this);
      _this.handleKeyPress = _this.handleKeyPress.bind(_this);
      _this.handleMouseOver = _this.handleMouseOver.bind(_this);
      _this.handleMouseOut = _this.handleMouseOut.bind(_this);

      _this.state = {
        checked: false,
        active: false
      };

      return _this;
    }

    _createClass(MenuItem, [{
      key: "handleAction",
      value: function handleAction(e) {

        e.preventDefault();

        if (this.props.disabled) return;

        if (this.props.action) this.props.action(e);

        this.setState({
          active: true,
          checked: !this.state.checked
        });
      }
    }, {
      key: "handleKeyPress",
      value: function handleKeyPress(e) {

        if (e.key === this.props.shortcut) this.handleAction(e);
      }
    }, {
      key: "handleMouseOver",
      value: function handleMouseOver() {

        this.setState({ active: true });
      }
    }, {
      key: "handleMouseOut",
      value: function handleMouseOut() {

        this.setState({ active: false });
      }
    }, {
      key: "componentWillMount",
      value: function componentWillMount() {

        this.setState({
          checked: this.props.defaultChecked,
          active: this.props.defaultActive
        });
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

        var stateStyle = _extends({}, styles.a);

        if (this.state.active) stateStyle = _extends({}, stateStyle, styles.active);

        if (this.props.disabled) stateStyle = _extends({}, stateStyle, styles.disabled);

        return stateStyle;
      }
    }, {
      key: "createLabel",
      value: function createLabel() {
        var _props = this.props,
            label = _props.children,
            shortcut = _props.shortcut;


        if (shortcut) {

          var index = label.toLowerCase().indexOf(shortcut.toLowerCase());

          return React.createElement(
            "span",
            { style: styles.label },
            label.slice(0, index),
            React.createElement(
              "u",
              null,
              label.slice(index, index + 1)
            ),
            label.slice(index + 1)
          );
        } else {

          return React.createElement(
            "span",
            { style: styles.label },
            label
          );
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props,
            checkbox = _props2.checkbox,
            submenu = _props2.submenu,
            style = _props2.style,
            icon = _props2.icon,
            rest = _objectWithoutProperties(_props2, ["checkbox", "submenu", "style", "icon"]);

        var checked = this.state.checked;


        delete rest.disabled;
        delete rest.action;
        delete rest.defaultChecked;
        delete rest.defaultActive;
        delete rest.disabled;
        delete rest.children;
        delete rest.shortcut;

        return React.createElement(
          "li",
          _extends({ style: _extends({}, styles.li, style) }, rest),
          React.createElement(
            "a",
            {
              href: "#",
              onClick: this.handleAction,
              onMouseOver: this.handleMouseOver,
              onMouseOut: this.handleMouseOut,
              style: this.getStyle()
            },
            submenu ? React.createElement("span", { style: styles.arrow }) : "",
            React.createElement(
              "span",
              { style: styles.icon },
              typeof icon === "string" ? React.createElement("i", { className: icon }) : icon
            ),
            checkbox ? React.createElement(
              "span",
              { style: styles.checkbox },
              checked ? "☑" : "☐"
            ) : "",
            this.createLabel()
          )
        );
      }
    }]);

    return MenuItem;
  }(React.Component);

  var PropTypes = React.PropTypes;

  MenuItem.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    style: PropTypes.object,
    children: PropTypes.node,
    submenu: PropTypes.node,
    defaultActive: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    action: PropTypes.func.isRequired,
    keepMenu: PropTypes.bool,
    checkbox: PropTypes.bool,
    shortcut: PropTypes.string
  };

  MenuItem.defaultProps = {
    defaultActive: false,
    defaultChecked: false,
    disabled: false
  };

  var Menu = function (_React$Component2) {
    _inherits(Menu, _React$Component2);

    function Menu() {
      _classCallCheck(this, Menu);

      return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
      key: "render",
      value: function render() {

        return React.createElement(
          "ul",
          _extends({ style: styles.ul }, this.props),
          this.props.children
        );
      }
    }]);

    return Menu;
  }(React.Component);

  Menu.propTypes = {
    children: PropTypes.node
  };

  window.ReactMenu = Menu;

  Menu.Item = MenuItem;
})();