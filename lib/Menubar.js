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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/jsx-no-bind:0 */

var styles = {

  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  },
  li: {
    display: "inline-block",
    padding: "0.2em 0.5em",
    cursor: "default",
    margin: 0
  },
  menu: {
    position: "absolute",
    marginLeft: "-0.5em"
  }
};

var Menubar = function (_Component) {
  _inherits(Menubar, _Component);

  function Menubar(props) {
    _classCallCheck(this, Menubar);

    var _this = _possibleConstructorReturn(this, (Menubar.__proto__ || Object.getPrototypeOf(Menubar)).call(this, props));

    _this.state = {
      showMenus: false,
      menuActive: null
    };

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleClickDoc = _this.handleClickDoc.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleMouseOut = _this.handleMouseOut.bind(_this);

    _this.items = [];

    return _this;
  }

  _createClass(Menubar, [{
    key: "close",
    value: function close() {

      this.setState({ showMenus: false, menuActive: null });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {

      this.setState({ showMenus: true });
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver(i) {

      if (i !== this.state.menuActive) {

        this.setState({ menuActive: i });
      }
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {

      if (!this.state.showMenus) this.setState({ menuActive: null });
    }
  }, {
    key: "handleClickDoc",
    value: function handleClickDoc(e) {

      if (this.ul && !this.ul.contains(e.target)) this.close();
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {

      var length = _react2.default.Children.count(this.props.children);
      var current = this.state.menuActive;
      var currentElmt = this.items[current];
      var submenuDisplay = currentElmt && currentElmt.state.submenuDisplay;

      var newValue = null;

      switch (e.key) {

        case "Escape":

          if (!submenuDisplay) this.setState({ showMenus: false, menuActive: null });
          break;

        case "ArrowLeft":

          if (submenuDisplay || !this.state.showMenus) return;

          if (current === null || current - 1 < 0) newValue = length - 1;else newValue = current - 1;
          break;

        case "ArrowRight":

          if (submenuDisplay || !this.state.showMenus) return;

          if (current === null || current + 1 >= length) newValue = 0;else newValue = current + 1;
          break;

        default:

          break;

      }

      if (newValue !== null) this.setState({ menuActive: newValue });
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

      document.addEventListener("click", this.handleClickDoc);
      if (this.props.keyboard) this.addKeyboardListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      document.removeEventListener("click", this.handleClickDoc);
      this.removeKeyboardListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {

      if (prevProps.keyboard && !this.props.keyboard) this.removeKeyboardListener();else if (!prevProps.keyboard && this.props.keyboard) this.addKeyboardListener();
    }
  }, {
    key: "setRef",
    value: function setRef(i, elmt) {

      this.items[i] = elmt;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      var index = -1;

      return _react2.default.Children.map(this.props.children, function (child, i) {

        if (child.type && child.type.isReactDesktopMenu) {

          index++;

          var active = _this2.state.menuActive === i;

          var props = {
            display: _this2.state.showMenus && active,
            ref: _this2.setRef.bind(_this2, index),
            style: _extends({}, styles.menu, child.props.style)
          };

          if (!("keyboard" in child.props)) props.keyboard = _this2.props.keyboard;

          var menu = _react2.default.cloneElement(child, props);

          var style = _extends({}, styles.li);

          if (active) style.backgroundColor = _this2.props.itemHoverColor;

          return _react2.default.createElement(
            "li",
            {
              style: style,
              onMouseOver: _this2.handleMouseOver.bind(_this2, index)
            },
            child.props.label,
            _react2.default.createElement("br", null),
            menu
          );
        } else return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          style = _props.style,
          rest = _objectWithoutProperties(_props, ["style"]);

      delete rest.children;
      delete rest.itemHoverColor;
      delete rest.keyboard;

      return _react2.default.createElement(
        "ul",
        _extends({}, rest, {
          style: _extends({}, styles.ul, style),
          onMouseDown: this.handleMouseDown,
          onMouseOut: this.handleMouseOut,
          ref: function ref(node) {
            return _this3.ul = node;
          }
        }),
        this.renderChildren()
      );
    }
  }]);

  return Menubar;
}(_react.Component);

Menubar.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  itemHoverColor: _propTypes2.default.string,
  keyboard: _propTypes2.default.bool
};

Menubar.defaultProps = {
  itemHoverColor: "#e5ecff",
  keyboard: true
};

exports.default = Menubar;