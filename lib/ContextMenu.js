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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextMenu = function (_Component) {
  _inherits(ContextMenu, _Component);

  function ContextMenu(props) {
    _classCallCheck(this, ContextMenu);

    var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));

    _this.state = { display: false, position: { x: 0, y: 0 } };

    _this.handleBlurWindow = _this.handleBlurWindow.bind(_this);
    _this.handleClickDoc = _this.handleClickDoc.bind(_this);
    _this.handleContextMenu = _this.handleContextMenu.bind(_this);

    _this.menu = _react2.default.createRef();
    return _this;
  }

  _createClass(ContextMenu, [{
    key: "close",
    value: function close() {
      this.setState({ display: false });
    }
  }, {
    key: "handleBlurWindow",
    value: function handleBlurWindow() {
      this.close();
    }
  }, {
    key: "handleClickDoc",
    value: function handleClickDoc(e) {

      if (!this.menu.current) return;

      var current = this.menu.current;


      if (current && !current.contains(e.target)) this.close();
    }
  }, {
    key: "handleContextMenu",
    value: function handleContextMenu(e) {
      var _this2 = this;

      e.preventDefault();
      e.persist();

      this.setState({ display: true }, function () {
        return _this2.setPosition(e);
      });

      if (this.props.onContextMenu) this.props.onContextMenu(e);
    }
  }, {
    key: "setPosition",
    value: function setPosition(e) {

      if (!this.menu) return;

      var current = this.menu.current;


      if (!current) return;

      var x = e.clientX;
      var y = e.clientY;

      if (e.clientX + current.offsetWidth > window.innerWidth) {

        x -= current.offsetWidth;
        if (x < 0) x = window.innerWidth - current.offsetWidth;
      }

      if (e.clientY + current.offsetHeight > window.innerHeight) {

        y -= current.offsetHeight;
        if (y < 0) y = window.innerHeight - current.offsetHeight;
      }

      this.setState({ position: { x: x, y: y } });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      document.addEventListener("mousedown", this.handleClickDoc);
      window.addEventListener("blur", this.handleBlurWindow);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      document.removeEventListener("mousedown", this.handleClickDoc);
      window.removeEventListener("blur", this.handleBlurWindow);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.display && !prevState.display) {
        this.addEventListeners();
      } else if (!this.state.display && prevState.display) {
        this.removeEventListeners();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEventListeners();
    }
  }, {
    key: "handlePreventDefault",
    value: function handlePreventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          menu = _props.menu,
          rest = _objectWithoutProperties(_props, ["children", "menu"]);

      var content = _react2.default.Children.only(children);

      var container = _react2.default.cloneElement(content, _extends({
        key: "container"
      }, rest, {
        onContextMenu: this.handleContextMenu
      }));

      if (this.state.display) {

        var contextMenu = _reactDom2.default.createPortal(_react2.default.createElement(
          "div",
          {
            key: "contextMenu",
            ref: this.menu,
            onContextMenu: this.handlePreventDefault,
            style: {
              position: "fixed",
              left: this.state.position.x,
              top: this.state.position.y
            }
          },
          menu
        ), document.body);

        return [container, contextMenu];
      } else return container;
    }
  }]);

  return ContextMenu;
}(_react.Component);

ContextMenu.propTypes = {
  children: _propTypes2.default.node,
  menu: _propTypes2.default.node,
  onContextMenu: _propTypes2.default.func
};

exports.default = ContextMenu;