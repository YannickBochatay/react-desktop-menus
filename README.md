# react-desktop-menus
Desktop app menus with react

### Demo
[http://yannickbochatay.github.io/react-desktop-menus](http://yannickbochatay.github.io/react-desktop-menus/)

### Installation
```shell
npm install react-desktop-menus
```

### Example
```javascript
import React from "react"
import { render } from "react-dom"
import Menu from "react-desktop-menus"

const action = () => console.log("hello")

render(
  <Menu keyboard>
    <Menu.Item action={ action } label="Simple item"/>
    <Menu.Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
    <Menu.Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
    <Menu.Item disabled label="Item disabled" icon={ <i className="glyphicon glyphicon-headphones"/> }/>
    <Divider/>
    <Menu.Item action={ action } label="Custom hover color" activeColor="pink"/>
    <Menu.Item action={ action } checkbox> Item as a checkbox </Menu.Item>
    <Menu.Item action={ action } checkbox defaultChecked> Item as a checkbox checked </Menu.Item>
    <Menu.Item action={ action } icon={ <i className="fa fa-modx"/> } shortcut="s" label="Item with shortcut"/>
    <Menu.Item action={ action } icon={ <i className="glyphicon glyphicon-print"/> } info="Info" label="Item with info"/>
    <Menu.Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu">
      <Menu>
        <Menu.Item action={ action } label="Simple item"/>
        <Menu.Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
        <Menu.Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
      </Menu>
    </Menu.Item>
  </Menu>
  ,
  document.getElementById("content")
)
```

## Constructors

### Menu

#### Usage
```javascript
import Menu from "react-desktop-menus"

ReactDOM.render(<Menu>, document.getElementById("content"))
```
or (to load only what you need)
```javascript
import Menu from "react-desktop-menus/lib/Menu"

ReactDOM.render(<Menu>, document.getElementById("content"))
```

#### Properties
- **keyboard** (boolean) : use keyboard to select and/or execute an item action,
- **display** (boolean) : display or not the menu,
- **style** (object) : overriders style menu,
- **itemHoverColor** (object) : background color when an item is active,
- **label** (string) : label to display for a menubar



### MenuItem

#### Usage
```javascript
import Menu from "react-desktop-menus"

ReactDOM.render(
  <Menu>
    <Menu.Item action={ () => console.log(hello) } label="toto"/>
  </Menu>,
  document.getElementById("content")
)
```
or (to load only what you need)
```javascript
import Menu from "react-desktop-menus/lib/Menu"
import MenuItem from "react-desktop-menus/lib/MenuItem"
```

#### Properties
- **icon** (node) : component for icon,
- **info** (string) : info displayed on right (like a global shortcut)
- **label** (string)
- **disabled** (boolean)
- **action** (function) : action to execute on click (or enter if keyboard is enabled)
- **checkbox** (boolean) : replace icon with a checkbox
- **defaultChecked** (boolean)
- **shortcut** (string) : shortcut letter (it will be underlined in label displayed) to access this item
- **activeColor** (string) : background color when item is active
- **style** (object) : overrides item style


### Menubar

### ContextMenu

### Divider
