"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Menubar = require("./Menubar");

var _Menubar2 = _interopRequireDefault(_Menubar);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _ContextMenu = require("./ContextMenu");

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

var _MenuItem = require("./MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require("./Divider");

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint-disable*/

var MenubarExample = function (_React$Component) {
  _inherits(MenubarExample, _React$Component);

  function MenubarExample(props) {
    _classCallCheck(this, MenubarExample);

    var _this = _possibleConstructorReturn(this, (MenubarExample.__proto__ || Object.getPrototypeOf(MenubarExample)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);

    return _this;
  }

  _createClass(MenubarExample, [{
    key: "handleClick",
    value: function handleClick() {

      console.log("hello world");

      this.menubar.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var action = this.handleClick;

      return _react2.default.createElement(
        _Menubar2.default,
        { ref: function ref(elmt) {
            return _this2.menubar = elmt;
          }, style: { border: "1px solid #eee" } },
        _react2.default.createElement(
          _Menu2.default,
          { label: "File" },
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action },
            " Hello world "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, disabled: true },
            " Disabled "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, icon: "glyphicon glyphicon-th-list" },
            " Fa Icon "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, icon: _react2.default.createElement("img", { src: "build/icon.svg" }) },
            " Custom Icon "
          ),
          _react2.default.createElement(_MenuItem2.default, {
            action: action,
            icon: _react2.default.createElement("i", { className: "fa fa-modx" }),
            shortcut: "s",
            label: "exemple with shortcut",
            info: "ctrl+S"
          }),
          _react2.default.createElement(
            _MenuItem2.default,
            { icon: "fa fa-bar-chart", label: "submenu again", shortcut: "a" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action },
                " Hello world "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, disabled: true },
                " Disabled "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, icon: "glyphicon glyphicon-road", label: "submenu again" },
                _react2.default.createElement(
                  _Menu2.default,
                  null,
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action },
                    " Hello world "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, disabled: true },
                    " Disabled "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, icon: "glyphicon glyphicon-headphones" },
                    " Fa Icon "
                  )
                )
              )
            )
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, checkbox: true, shortcut: "c" },
            " checkbox "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, checkbox: true, defaultChecked: true },
            " checkbox checked "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { key: 8, label: "sub-menu", shortcut: "m" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, checkbox: true, shortcut: "h" },
                " Hello world "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, icon: "glyphicon glyphicon-print", label: "another submenu" },
                _react2.default.createElement(
                  _Menu2.default,
                  null,
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action },
                    " Hello world "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, disabled: true },
                    " Disabled "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, icon: "glyphicon glyphicon-fire", label: "submenu again" },
                    _react2.default.createElement(
                      _Menu2.default,
                      null,
                      _react2.default.createElement(
                        _MenuItem2.default,
                        { action: action },
                        " Hello world "
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        { action: action, disabled: true },
                        " Disabled "
                      ),
                      _react2.default.createElement(
                        _MenuItem2.default,
                        { action: action, icon: "glyphicon glyphicon-thumbs-up" },
                        " Fa Icon "
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          { label: "Edit" },
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, checkbox: true, shortcut: "h" },
            " Hello world "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, icon: "glyphicon glyphicon-print", label: "another submenu" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action },
                " Hello world "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, disabled: true },
                " Disabled "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, icon: "glyphicon glyphicon-fire", label: "submenu again" },
                _react2.default.createElement(
                  _Menu2.default,
                  null,
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action },
                    " Hello world "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, disabled: true },
                    " Disabled "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, icon: "glyphicon glyphicon-thumbs-up" },
                    " Fa Icon "
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          { label: "View" },
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, checkbox: true, shortcut: "h" },
            " Hello world "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, icon: "glyphicon glyphicon-print", label: "another submenu" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action },
                " Hello world "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, disabled: true },
                " Disabled "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, icon: "glyphicon glyphicon-fire", label: "submenu again" },
                _react2.default.createElement(
                  _Menu2.default,
                  null,
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action },
                    " Hello world "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, disabled: true },
                    " Disabled "
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    { action: action, icon: "glyphicon glyphicon-thumbs-up" },
                    " Fa Icon "
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MenubarExample;
}(_react2.default.Component);

var ContextMenuExample = function (_React$Component2) {
  _inherits(ContextMenuExample, _React$Component2);

  function ContextMenuExample(props) {
    _classCallCheck(this, ContextMenuExample);

    var _this3 = _possibleConstructorReturn(this, (ContextMenuExample.__proto__ || Object.getPrototypeOf(ContextMenuExample)).call(this, props));

    _this3.handleClick = _this3.handleClick.bind(_this3);

    return _this3;
  }

  _createClass(ContextMenuExample, [{
    key: "handleClick",
    value: function handleClick() {

      console.log("hello world");

      this.contextmenu.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var action = this.handleClick;

      var style = {
        height: 300,
        backgroundColor: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      };

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
          null,
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action },
            " Hello world "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, disabled: true },
            " Disabled "
          ),
          _react2.default.createElement(
            _MenuItem2.default,
            { action: action, icon: "glyphicon glyphicon-fire", label: "submenu again" },
            _react2.default.createElement(
              _Menu2.default,
              null,
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action },
                " Hello world "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, disabled: true },
                " Disabled "
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { action: action, icon: "glyphicon glyphicon-thumbs-up" },
                " Fa Icon "
              )
            )
          )
        )
      );
    }
  }]);

  return ContextMenuExample;
}(_react2.default.Component);

var Section = function Section(_ref) {
  var title = _ref.title,
      children = _ref.children;
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

_reactDom2.default.render(_react2.default.createElement(
  "article",
  null,
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