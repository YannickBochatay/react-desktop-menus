/*eslint-disable*/

import React from "react"
import ReactDOM from "react-dom"
import Menubar from "./Menubar"
import Menu from "./Menu"
import Item from "./MenuItem"
import Divider from "./Divider"

const action = () => alert("hello world")

ReactDOM.render(

  <Menubar>
    <Menu label="File">
      <Item action={ action } key={ 1 }> Hello world </Item>
      <Item action={ action } key={ 2 } disabled> Disabled </Item>
      <Item action={ action } key={ 3 } icon="glyphicon glyphicon-th-list"> Fa Icon </Item>
      <Item action={ action } key={ 4 } icon={ <img src="build/icon.svg"/> }> Custom Icon </Item>
      <Item
        action={ action }
        key={ 5 }
        icon={ <i className="fa fa-modx"/> }
        shortcut="s"
        label="exemple with shortcut"
        info="ctrl+S"
      />
      <Item key={ 9 } icon="fa fa-bar-chart" label="submenu again" shortcut="a">
        <Menu>
          <Item action={ action } key={ 1 }> Hello world </Item>
          <Item action={ action } key={ 2 } disabled> Disabled </Item>
          <Item action={ action } key={ 3 } icon="glyphicon glyphicon-road" label="submenu again">
            <Menu>
              <Item action={ action } key={ 1 }> Hello world </Item>
              <Item action={ action } key={ 2 } disabled> Disabled </Item>
              <Item action={ action } key={ 3 } icon="glyphicon glyphicon-headphones"> Fa Icon </Item>
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
          <Item action={ action } key={ 2 } icon="glyphicon glyphicon-print" label="another submenu">
            <Menu>
              <Item action={ action } key={ 1 }> Hello world </Item>
              <Item action={ action } key={ 2 } disabled> Disabled </Item>
              <Item action={ action } key={ 3 } icon="glyphicon glyphicon-fire" label="submenu again">
                <Menu>
                  <Item action={ action } key={ 1 }> Hello world </Item>
                  <Item action={ action } key={ 2 } disabled> Disabled </Item>
                  <Item action={ action } key={ 3 } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
                </Menu>
              </Item>
            </Menu>
          </Item>
        </Menu>
      </Item>
    </Menu>
    <Menu label="Edit">
      <Item action={ action } key={ 1 } checkbox shortcut="h"> Hello world </Item>
      <Item action={ action } key={ 2 } icon="glyphicon glyphicon-print" label="another submenu">
        <Menu>
          <Item action={ action } key={ 1 }> Hello world </Item>
          <Item action={ action } key={ 2 } disabled> Disabled </Item>
          <Item action={ action } key={ 3 } icon="glyphicon glyphicon-fire" label="submenu again">
            <Menu>
              <Item action={ action } key={ 1 }> Hello world </Item>
              <Item action={ action } key={ 2 } disabled> Disabled </Item>
              <Item action={ action } key={ 3 } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
            </Menu>
          </Item>
        </Menu>
      </Item>
    </Menu>
    <Menu label="View">
      <Item action={ action } key={ 1 } checkbox shortcut="h"> Hello world </Item>
      <Item action={ action } key={ 2 } icon="glyphicon glyphicon-print" label="another submenu">
        <Menu>
          <Item action={ action } key={ 1 }> Hello world </Item>
          <Item action={ action } key={ 2 } disabled> Disabled </Item>
          <Item action={ action } key={ 3 } icon="glyphicon glyphicon-fire" label="submenu again">
            <Menu>
              <Item action={ action } key={ 1 }> Hello world </Item>
              <Item action={ action } key={ 2 } disabled> Disabled </Item>
              <Item action={ action } key={ 3 } icon="glyphicon glyphicon-thumbs-up"> Fa Icon </Item>
            </Menu>
          </Item>
        </Menu>
      </Item>
    </Menu>
  </Menubar>,

  document.getElementById("content")
)
