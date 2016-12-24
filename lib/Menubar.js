"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Menu = require("./Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  liHover: { backgroundColor: "#e5ecff" },
  menu: { marginLeft: "-0.5em" }
};

function isChildOf(elmt, parent) {

  var testElmt = elmt;

  while (testElmt) {

    if (testElmt === parent) return true;
    testElmt = testElmt.parentNode;
  }

  return false;
}

var Menubar = function (_Component) {
  _inherits(Menubar, _Component);

  function Menubar(props) {
    _classCallCheck(this, Menubar);

    var _this = _possibleConstructorReturn(this, (Menubar.__proto__ || Object.getPrototypeOf(Menubar)).call(this, props));

    _this.state = {
      showMenus: false,
      menuActive: null
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleClickDoc = _this.handleClickDoc.bind(_this);

    return _this;
  }

  _createClass(Menubar, [{
    key: "handleClick",
    value: function handleClick() {

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
    key: "handleClickDoc",
    value: function handleClickDoc(e) {

      if (!isChildOf(e.target, this.ul)) this.setState({ showMenus: false });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      document.addEventListener("click", this.handleClickDoc);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {

      document.removeEventListener("click", this.handleClickDoc);
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      return _react2.default.Children.map(this.props.children, function (child, i) {

        if (child.type === _Menu2.default) {

          var active = _this2.state.menuActive === i;

          var menu = _react2.default.cloneElement(child, {
            display: _this2.state.showMenus && active,
            style: _extends({}, styles.menu, child.props.style)
          });

          var style = _extends({}, styles.li, active ? styles.liHover : null);

          return _react2.default.createElement(
            "li",
            { style: style, onMouseOver: _this2.handleMouseOver.bind(_this2, i) },
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

      return _react2.default.createElement(
        "ul",
        _extends({}, rest, {
          style: _extends({}, styles.ul, style),
          onClick: this.handleClick,
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
  children: _react.PropTypes.node,
  style: _react.PropTypes.object
};

exports.default = Menubar;