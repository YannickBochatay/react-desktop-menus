import React, { Component } from "react"
import Menu from "../src/Menu"
import Item from "../src/MenuItem"
import ContextMenu from "../src/ContextMenu"

export default class ContextMenuExample extends Component {

  constructor(props) {

    super(props)

    this.onClick = this.onClick.bind(this)

  }

  onClick() {

    this.contextmenu.close()

  }

  render() {

    const style = {
      height : 300,
      backgroundColor : "#eee",
      display : "flex",
      alignItems : "center",
      justifyContent : "center"
    }

    const action = this.onClick

    const menu = (
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
    )

    return (
      <ContextMenu menu={ menu } ref={ elmt => this.contextmenu = elmt } { ...this.props }>
        <div style={ style }>
          Click right to display context menu
        </div>
      </ContextMenu>
    )

  }
}
