import React, { Component } from "react"
import Menubar from "../src/Menubar"
import Menu from "../src/Menu"
import Item from "../src/MenuItem"

export default class MenubarExample extends Component {

  constructor(props) {

    super(props)

    this.onClick = this.onClick.bind(this)

  }

  onClick() {

    console.log("hello world")

    this.menubar.close()

  }

  render() {

    const action = this.onClick

    return (
      <Menubar ref={ elmt => this.menubar = elmt } style={ { border : "1px solid #eee" } } { ...this.props }>
        <Menu label="File">
          <Item action={ action } label="Simple item"/>
          <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
          <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
          <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
            <Menu>
              <Item action={ action } label="Simple item"/>
              <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
              <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
            </Menu>
          </Item>
        </Menu>
        <Menu label="Edit">
          <Item action={ action } label="Simple item"/>
          <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
          <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
          <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
            <Menu>
              <Item action={ action } label="Simple item"/>
              <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
              <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
            </Menu>
          </Item>
        </Menu>
        <Menu label="View">
          <Item action={ action } label="Simple item"/>
          <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
          <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
          <Item icon={ <i className="fa fa-bar-chart"/> } label="Submenu again">
            <Menu>
              <Item action={ action } label="Simple item"/>
              <Item action={ action } icon={ <i className="glyphicon glyphicon-road"/> } label="Item with icon"/>
              <Item action={ action } icon={ <img src="build/icon.svg"/> } label="Item with any kind of icon"/>
            </Menu>
          </Item>
        </Menu>
      </Menubar>
    )

  }

}
