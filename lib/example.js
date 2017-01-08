"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ContextMenu = require("./ContextMenu");

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _Divider = require("./Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _Menubar = require("./Menubar");

var _Menubar2 = _interopRequireDefault(_Menubar);

var _MenuItem = require("./MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuExample = function MenuExample(_ref) {
  var action = _ref.action,
      label = _ref.label;
  return _react2.default.createElement(
    _Menu2.default,
    { label: label },
    _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
    _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
    _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" }),
    _react2.default.createElement(_MenuItem2.default, {
      action: action,
      disabled: true,
      label: "Item disabled",
      icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-headphones" })
    }),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(_MenuItem2.default, { action: action, label: "Custom hover color", activeColor: "pink" }),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, checkbox: true },
      " Item as a checkbox "
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, checkbox: true, defaultChecked: true },
      " Item as a checkbox checked "
    ),
    _react2.default.createElement(_MenuItem2.default, {
      action: action,
      icon: _react2.default.createElement("i", { className: "fa fa-modx" }),
      shortcut: "s",
      label: "Item with shortcut"
    }),
    _react2.default.createElement(_MenuItem2.default, {
      action: action,
      icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-print" }),
      info: "Info",
      label: "Item with info"
    }),
    _react2.default.createElement(
      _MenuItem2.default,
      { icon: _react2.default.createElement("i", { className: "fa fa-bar-chart" }), label: "Submenu" },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
        _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
        _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" }),
        _react2.default.createElement(_MenuItem2.default, {
          action: action,
          disabled: true,
          label: "Item disabled",
          icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-headphones" })
        }),
        _react2.default.createElement(
          _MenuItem2.default,
          { icon: _react2.default.createElement("i", { className: "fa fa-bar-chart" }), label: "Submenu again" },
          _react2.default.createElement(
            _Menu2.default,
            null,
            _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
            _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
            _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" }),
            _react2.default.createElement(_MenuItem2.default, {
              action: action,
              disabled: true,
              label: "Item disabled",
              icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-headphones" })
            })
          )
        )
      )
    )
  );
};

MenuExample.propTypes = {
  action: _react.PropTypes.func,
  label: _react.PropTypes.string
};

var MenubarExample = function (_Component) {
  _inherits(MenubarExample, _Component);

  function MenubarExample(props) {
    _classCallCheck(this, MenubarExample);

    var _this = _possibleConstructorReturn(this, (MenubarExample.__proto__ || Object.getPrototypeOf(MenubarExample)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);

    return _this;
  }

  _createClass(MenubarExample, [{
    key: "onClick",
    value: function onClick() {

      console.log("hello world");

      this.menubar.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var action = this.onClick;

      return _react2.default.createElement(
        _Menubar2.default,
        { ref: function ref(elmt) {
            return _this2.menubar = elmt;
          }, style: { border: "1px solid #eee" } },
        _react2.default.createElement(
          _Menu2.default,
          { label: "File" },
          _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" }),
          _react2.default.createElement(
            _MenuItem2.default,
            { icon: _react2.default.createElement("i", { className: "fa fa-bar-chart" }), label: "Submenu again" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" })
            )
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          { label: "Edit" },
          _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" }),
          _react2.default.createElement(
            _MenuItem2.default,
            { icon: _react2.default.createElement("i", { className: "fa fa-bar-chart" }), label: "Submenu again" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" })
            )
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          { label: "View" },
          _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" }),
          _react2.default.createElement(
            _MenuItem2.default,
            { icon: _react2.default.createElement("i", { className: "fa fa-bar-chart" }), label: "Submenu again" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" })
            )
          )
        )
      );
    }
  }]);

  return MenubarExample;
}(_react.Component);

var ContextMenuExample = function (_Component2) {
  _inherits(ContextMenuExample, _Component2);

  function ContextMenuExample(props) {
    _classCallCheck(this, ContextMenuExample);

    var _this3 = _possibleConstructorReturn(this, (ContextMenuExample.__proto__ || Object.getPrototypeOf(ContextMenuExample)).call(this, props));

    _this3.onClick = _this3.onClick.bind(_this3);

    return _this3;
  }

  _createClass(ContextMenuExample, [{
    key: "onClick",
    value: function onClick() {

      console.log("hello world");

      this.contextmenu.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var style = {
        height: 300,
        backgroundColor: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      };

      var action = this.onClick;

      return _react2.default.createElement(
        _ContextMenu2.default,
        { ref: function ref(elmt) {
            return _this4.contextmenu = elmt;
          } },
        _react2.default.createElement(
          "div",
          { style: style },
          "Click right to see context menu"
        ),
        _react2.default.createElement(
          _Menu2.default,
          { label: "File" },
          _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
          _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" }),
          _react2.default.createElement(
            _MenuItem2.default,
            { icon: _react2.default.createElement("i", { className: "fa fa-bar-chart" }), label: "Submenu again" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(_MenuItem2.default, { action: action, label: "Simple item" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("i", { className: "glyphicon glyphicon-road" }), label: "Item with icon" }),
              _react2.default.createElement(_MenuItem2.default, { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }), label: "Item with any kind of icon" })
            )
          )
        )
      );
    }
  }]);

  return ContextMenuExample;
}(_react.Component);

var Section = function Section(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;
  return _react2.default.createElement(
    "section",
    null,
    _react2.default.createElement(
      "h3",
      null,
      title
    ),
    children
  );
};

Section.propTypes = {
  title: _react.PropTypes.string,
  children: _react.PropTypes.node
};

_reactDom2.default.render(_react2.default.createElement(
  "article",
  null,
  _react2.default.createElement(
    Section,
    { title: "Static menu" },
    _react2.default.createElement(MenuExample, { action: function action() {
        return console.log("hello");
      } })
  ),
  _react2.default.createElement(
    Section,
    { title: "Menu bar" },
    _react2.default.createElement(MenubarExample, null)
  ),
  _react2.default.createElement(
    Section,
    { title: "Context menu" },
    _react2.default.createElement(ContextMenuExample, null)
  )
), document.getElementById("content"));