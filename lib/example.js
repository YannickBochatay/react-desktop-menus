"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Menubar = require("./Menubar");

var _Menubar2 = _interopRequireDefault(_Menubar);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require("./MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require("./Divider");

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/

var action = function action() {
  return alert("hello world");
};

_reactDom2.default.render(_react2.default.createElement(
  _Menubar2.default,
  null,
  _react2.default.createElement(
    _Menu2.default,
    { label: "File" },
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 1 },
      " Hello world "
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 2, disabled: true },
      " Disabled "
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 3, icon: "glyphicon glyphicon-th-list" },
      " Fa Icon "
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 4, icon: _react2.default.createElement("img", { src: "build/icon.svg" }) },
      " Custom Icon "
    ),
    _react2.default.createElement(_MenuItem2.default, {
      action: action,
      key: 5,
      icon: _react2.default.createElement("i", { className: "fa fa-modx" }),
      shortcut: "s",
      label: "exemple with shortcut",
      info: "ctrl+S"
    }),
    _react2.default.createElement(
      _MenuItem2.default,
      { key: 9, icon: "fa fa-bar-chart", label: "submenu again", shortcut: "a" },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 1 },
          " Hello world "
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 2, disabled: true },
          " Disabled "
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 3, icon: "glyphicon glyphicon-road", label: "submenu again" },
          _react2.default.createElement(
            _Menu2.default,
            null,
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 1 },
              " Hello world "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 2, disabled: true },
              " Disabled "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 3, icon: "glyphicon glyphicon-headphones" },
              " Fa Icon "
            )
          )
        )
      )
    ),
    _react2.default.createElement(_Divider2.default, null),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 6, checkbox: true, shortcut: "c" },
      " checkbox "
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 7, checkbox: true, defaultChecked: true },
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
          { action: action, key: 1, checkbox: true, shortcut: "h" },
          " Hello world "
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 2, icon: "glyphicon glyphicon-print", label: "another submenu" },
          _react2.default.createElement(
            _Menu2.default,
            null,
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 1 },
              " Hello world "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 2, disabled: true },
              " Disabled "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 3, icon: "glyphicon glyphicon-fire", label: "submenu again" },
              _react2.default.createElement(
                _Menu2.default,
                null,
                _react2.default.createElement(
                  _MenuItem2.default,
                  { action: action, key: 1 },
                  " Hello world "
                ),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { action: action, key: 2, disabled: true },
                  " Disabled "
                ),
                _react2.default.createElement(
                  _MenuItem2.default,
                  { action: action, key: 3, icon: "glyphicon glyphicon-thumbs-up" },
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
      { action: action, key: 1, checkbox: true, shortcut: "h" },
      " Hello world "
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 2, icon: "glyphicon glyphicon-print", label: "another submenu" },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 1 },
          " Hello world "
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 2, disabled: true },
          " Disabled "
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 3, icon: "glyphicon glyphicon-fire", label: "submenu again" },
          _react2.default.createElement(
            _Menu2.default,
            null,
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 1 },
              " Hello world "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 2, disabled: true },
              " Disabled "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 3, icon: "glyphicon glyphicon-thumbs-up" },
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
      { action: action, key: 1, checkbox: true, shortcut: "h" },
      " Hello world "
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { action: action, key: 2, icon: "glyphicon glyphicon-print", label: "another submenu" },
      _react2.default.createElement(
        _Menu2.default,
        null,
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 1 },
          " Hello world "
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 2, disabled: true },
          " Disabled "
        ),
        _react2.default.createElement(
          _MenuItem2.default,
          { action: action, key: 3, icon: "glyphicon glyphicon-fire", label: "submenu again" },
          _react2.default.createElement(
            _Menu2.default,
            null,
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 1 },
              " Hello world "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 2, disabled: true },
              " Disabled "
            ),
            _react2.default.createElement(
              _MenuItem2.default,
              { action: action, key: 3, icon: "glyphicon glyphicon-thumbs-up" },
              " Fa Icon "
            )
          )
        )
      )
    )
  )
), document.getElementById("content"));