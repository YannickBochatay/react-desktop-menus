"use strict";

/* eslint-disable */

var action = function action() {
  return alert("hello world");
};

ReactDOM.render(React.createElement(
  ReactMenu,
  null,
  React.createElement(
    ReactMenu.Item,
    { action: action, key: 1 },
    " Hello world "
  ),
  React.createElement(
    ReactMenu.Item,
    { action: action, key: 2, disabled: true },
    " Disabled "
  ),
  React.createElement(
    ReactMenu.Item,
    { action: action, key: 3, icon: "fa fa-bar-chart" },
    " Fa Icon "
  ),
  React.createElement(
    ReactMenu.Item,
    { action: action, key: 4, icon: React.createElement("img", { src: "node_modules/jsyg-menu/icon.png", style: { width: 16 } }) },
    " Custom Icon "
  ),
  React.createElement(
    ReactMenu.Item,
    { action: action, key: 5, icon: "fa fa-modx", shortcut: "s" },
    " Shortcut "
  )
), document.getElementById("content"));