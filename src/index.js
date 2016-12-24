/*eslint-disable*/

import React from "react"
import ReactDOM from "react-dom"
import Menu from "./Menu"
import Item from "./MenuItem"
import Divider from "./Divider"

const action = () => alert("hello world")
const img = <img src="node_modules/jsyg-menu/icon.png" style={ { width : 16 } }/>
// const globalShortcut = <span style={ { color : "gray", float : "right ", display: "inline-block" } }>Ctrl+S</span>

ReactDOM.render(

  <Menu>
    <Item action={ action } key={ 1 }> Hello world </Item>
    <Item action={ action } key={ 2 } disabled> Disabled </Item>
    <Item action={ action } key={ 3 } icon="fa fa-bar-chart"> Fa Icon </Item>
    <Item action={ action } key={ 4 } icon={ img }> Custom Icon </Item>
    <Item action={ action } key={ 5 } icon="fa fa-modx" shortcut="s" label="Shortcut"></Item>
    <Item key={ 9 } icon="fa fa-bar-chart" label="submenu again" shortcut="a">
      <Menu>
        <Item action={ action } key={ 1 }> Hello world </Item>
        <Item action={ action } key={ 2 } disabled> Disabled </Item>
        <Item action={ action } key={ 3 } icon="fa fa-bar-chart" label="submenu again">
          <Menu>
            <Item action={ action } key={ 1 }> Hello world </Item>
            <Item action={ action } key={ 2 } disabled> Disabled </Item>
            <Item action={ action } key={ 3 } icon="fa fa-bar-chart"> Fa Icon </Item>
          </Menu>
        </Item>
      </Menu>
    </Item>
    <Divider/>
    <Item action={ action } key={ 6 } checkbox shortcut="c"> checkbox </Item>
    <Item action={ action } key={ 7 } checkbox defaultChecked> checkbox checked </Item>
    <Item key={ 8 } label="sub-menu" shortcut="m">
      <Menu>
        <Item action={ action } key={ 1 } checkbox shortcut="h"> Hello world </Item>
        <Item action={ action } key={ 2 } icon="fa fa-bar-chart" label="another submenu">
          <Menu>
            <Item action={ action } key={ 1 }> Hello world </Item>
            <Item action={ action } key={ 2 } disabled> Disabled </Item>
            <Item action={ action } key={ 3 } icon="fa fa-bar-chart" label="submenu again">
              <Menu>
                <Item action={ action } key={ 1 }> Hello world </Item>
                <Item action={ action } key={ 2 } disabled> Disabled </Item>
                <Item action={ action } key={ 3 } icon="fa fa-bar-chart"> Fa Icon </Item>
              </Menu>
            </Item>
          </Menu>
        </Item>
      </Menu>
    </Item>
  </Menu>,

  document.getElementById("content")
)
