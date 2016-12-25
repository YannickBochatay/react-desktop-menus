/*eslint-disable*/

import React from "react"
import ReactDOM from "react-dom"
import Menubar from "./Menubar"
import Menu from "./Menu"
import ContextMenu from "./ContextMenu"
import Item from "./MenuItem"
import Divider from "./Divider"

const action = () => alert("hello world")

ReactDOM.render(

  <Menubar>
    <Menu label="File">
      <Item action={ action } > Hello world </Item>
      <Item action={ action } disabled> Disabled </Item>
      <Item action={ action } icon="glyphicon glyphicon-th-list"> Fa Icon </Item>
      <Item action={ action } icon={ <img src="build/icon.svg"/> }> Custom Icon </Item>
      <Item
        action={ action }
        icon={ <i className="fa fa-modx"/> }
        shortcut="s"
        label="exemple with shortcut"
        info="ctrl+S"
      />
      <Item icon="fa fa-bar-chart" label="submenu again" shortcut="a">
        <Menu>
          <Item action={ action }> Hello world </Item>
          <Item action={ ()=> console.log("action") } keepMenu> Keep menu open on action </Item>
          <Item action={ action } disabled> Disabled </Item>
          <Item action={ action } icon="glyphicon glyphicon-road" label="submenu again">
            <Menu>
              <Item action={ action }> Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-headphones"> Fa Icon </Item>
            </Menu>
          </Item>
        </Menu>
      </Item>
      <Divider/>
      <Item action={ action } checkbox shortcut="c"> checkbox </Item>
      <Item action={ action } checkbox defaultChecked> checkbox checked </Item>
      <Item key={ 8 } label="sub-menu" shortcut="m">
        <Menu>
          <Item action={ action } checkbox shortcut="h"> Hello world </Item>
          <Item action={ action } icon="glyphicon glyphicon-print" label="another submenu">
            <Menu>
              <Item action={ action }> Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
                <Menu>
                  <Item action={ action } > Hello world </Item>
                  <Item action={ action } disabled> Disabled </Item>
                  <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
                </Menu>
              </Item>
            </Menu>
          </Item>
        </Menu>
      </Item>
    </Menu>
    <Menu label="Edit">
      <Item action={ action } checkbox shortcut="h"> Hello world </Item>
      <Item action={ action } icon="glyphicon glyphicon-print" label="another submenu">
        <Menu>
          <Item action={ action }> Hello world </Item>
          <Item action={ action } disabled> Disabled </Item>
          <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
            <Menu>
              <Item action={ action } > Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
            </Menu>
          </Item>
        </Menu>
      </Item>
    </Menu>
    <Menu label="View">
      <Item action={ action } checkbox shortcut="h"> Hello world </Item>
      <Item action={ action } icon="glyphicon glyphicon-print" label="another submenu">
        <Menu>
          <Item action={ action } > Hello world </Item>
          <Item action={ action } disabled> Disabled </Item>
          <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
            <Menu>
              <Item action={ action } > Hello world </Item>
              <Item action={ action } disabled> Disabled </Item>
              <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
            </Menu>
          </Item>
        </Menu>
      </Item>
    </Menu>
  </Menubar>,

  document.getElementById("menubar")
)

ReactDOM.render(
  <ContextMenu>
    <div style={ { height : 500, backgroundColor : "#eee" } }/>
    <Menu>
      <Item action={ action } > Hello world </Item>
      <Item action={ action } disabled> Disabled </Item>
      <Item action={ action } icon="glyphicon glyphicon-fire" label="submenu again">
        <Menu>
          <Item action={ ()=> console.log("action") }> Hello world </Item>
          <Item action={ ()=> console.log("action") } keepMenu> Keep menu open on action </Item>
          <Item action={ action } disabled> Disabled </Item>
          <Item action={ action } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
        </Menu>
      </Item>
    </Menu>
  </ContextMenu>,

  document.getElementById("contextmenu")
)
